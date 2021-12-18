---
date: !!timestamp 2019-09-11T00:00:00.00+08:00
---

在 golang 中，使用 go 关键字可以创建一个 goroutine。那么怎么使用 goroutine 满足各种不同的需求呢？

一. 直接使用 go 关键字运行函数：

```golang
func greet(name string) {
  fmt.Printf("Hello %s!\n", name)
}

func main() {
  go greet("World")
  time.Sleep(1 * time.Second)
}
```

这种方法是最常用的方法，将要使用协程运行的任务编写到一个函数中，在需要的时候使用 go 关键字执行就可以了，需要注意的是，如果没有并发控制，那么一定要给协程的执行留出充分的时间，否则协程还没有处理完，有可能程序就已经退出了。

二. 使用匿名函数创建协程

```golang
func main() {
  go func (name string) {
    fmt.Printf("Hello %s!\n", name)
  } ("World")
  time.Sleep(1 * time.Second)
}
```

这种方法也是非常常用的，使用匿名函数的好处，首先是需要的地方单独定义，适合不需要复用的逻辑，另外匿名函数不需要占用命名，对于解决程序员三大难题还是很有帮助的。

三. 匿名函数直接访问主调函数中的变量

你有可能已经想到了，在使用匿名函数的方法中，匿名函数内部实际上是可以访问主调函数空间中的变量的。也就是说，我们不需要使用参数传递，就可以让协程获取到需要的参数。

```golang
func main() {
  var name = "World"
  go func() {
    fmt.Printf("Hello %s!\n", name)
  } ()
  time.Sleep(1 * time.Second)
}
```

请注意，这种方法有一个坑，因为协程中可以直接访问主调函数中的变量，而不是通过参数传递获取，这样就跳过了拷贝变量的步骤，协程中访问变量就是实实在在的主调函数中的变量，有些时候程序可能会和你的预期有些区别。比如：

```golang
func main() {
  var name = "World"
  go func() {
    fmt.Printf("Hello %s!\n", name)
  } ()
  name = "me"
  time.Sleep(1 * time.Second)
}
```

执行上面的程序，很大概率会打印出“Hello me!” 而不是 “Hello World!”，这是因为创建协程需要时间，并且协程调度不是我们编写的程序能够控制的。如果在打印的时候，name 的内容没有变化，协程就会打印出“Hello World!”，而如果 name 的值已经变化了，那么打印出来的东西也会发生变化。同时，除了主调函数的值影响协程 ，协程对变量的修改也会直接影响主调函数，最大的问题是，没有并发控制的情况中，你无法知道协程有没有修改主调函数中的变量。比如：

```golang
func main() {
  var a = 1
  go func() {
    a = 2
  } ()
  fmt.Print("1+1 = " )
  fmt.Println(a + a)
  time.Sleep(1 * time.Second)
}
```

如果协程执行的很晚，那么我们可能打印出正确的内容，如果协程执行的很快，那么就会打印出 “1+1 = 4”这个错误的答案。

四. 使用 sync.WaitGroup 进行协程控制

```golang
func main() {
  var a = 1
  wg := sync.WaitGroup{}
  wg.Add(1)
  go func() {
   defer wg.Done()
    a = 2
  } ()
  wg.Wait()
  fmt.Print("2+2 = " )
  fmt.Println(a + a)
  time.Sleep(1 * time.Second)
}
```

为了准确的控制工作的流程，我们使用 sync.WaitGroup 进行协程同步，wg.Add(1)声明一个会执行的协程，wg.Done()表明有一个协程执行完成了。wg.Wait()会在协程退出前保持阻塞，只有协程结束之后，打印工作才会进行，这样就能打印出正确的 “2+2 = 4”的结果。

五. 使用循环创建多个协程

我们使用协程的目的就是为了效率，如果每次都只创建一个协程，那么对于提到处理效率并没有什么帮助。所以通常使用协程都会配合循环创建多个协程。

```golang
func main() {
  var names = []string{"Alice", "Bob", "Charlie", "Dave", "Eve"}
  for i := range names {
    go func() {
      fmt.Printf("Hello %s!\n", names[i])
    } ()
  }
  time.Sleep(1 * time.Second)
}
```

执行上面的程序你可能会打印出 5 个相同的 Hello Eve!是的，我们再一次踩到了使用匿名函数的坑。因为 i 也是主调函数中的变量，所以在协程中执行打印的时候，i 其实已经变化了，这个例子中创建的协程比较少，大概率在所有协程执行执行的时候，i 已经变成最终的值 4 了。那么如何解决这个问题呢？我们可以在创建协程之前将它拷贝一遍，这样每个协程就可以使用一个稳定的值了。

```golang
func main() {
  var names = []string{"Alice", "Bob", "Charlie", "Dave", "Eve"}
  for i := range names {
    index := i
    go func() {
      fmt.Printf("Hello %s!\n", names[index])
    } ()
  }
  time.Sleep(1 * time.Second)
}
```

当然，这也只是 names 变量不会发生变化的情况下适用，最好我们直接将要使用的量复制出来。

```golang
func main() {
  var names = []string{"Alice", "Bob", "Charlie", "Dave", "Eve"}
  for i := range names {
    name:= names[i]
    go func() {
      fmt.Printf("Hello %s!\n", name)
    } ()
  }
  time.Sleep(1 * time.Second)
}
```

如果你的结构体比较复杂，你担心拷贝会影响性能，那么你只能通过其他办法保证协程执行完成前 names 不会发生变化，比如使用 sync.WaitGroup。

六. 使用循环调用函数创建协程

在上面的例子中我们需要主动拷贝变量，避免协程在使用变量前变量发生变化带来的问题。那么为什么不直接通过参数传递呢？

```golang
func greet(name string) {
  fmt.Printf("Hello %s!\n", name)
}
func main() {
  var names = []string{"Alice", "Bob", "Charlie", "Dave", "Eve"}
  for i := range names {
    go greet(names[i])
  }
  time.Sleep(1 * time.Second)
}
```

如果你的函数需要复用，正好可以使用这种方式。

七. 使用 Channel 获取返回值

如果协程不需要返回结果，比如我们上面的例子，那么直接传递参数给被调函数就好了。如果我们的任务不是打印，而是需要将结果返回给主调函数，那么就需要借助管道。我们经常编写的 web 服务器都是这种需求。

```golang
func greet(name string, ch chan string) {
  ch <- fmt.Sprintf("<div>Hello %s!</div>", name)
}
func main() {
  var names = []string{"Alice", "Bob", "Charlie", "Dave", "Eve"}
  results := make(chan string, 5)
  for i := range names {
    go greet(names[i], results)
  }
  time.Sleep(1 * time.Second)
  close(results)
  for greeting := range results {
    fmt.Println(greeting)
  }
}
```

上面的程序中，我们使用 time.Sleep 等待协程完成是非常粗糙低效的方法，在编写真正的程序时千万不要这么做，最好还是使用 WaitGroup。

```golang
func greet(name string, ch chan string, wg  *sync.WaitGroup) {
  defer wg.Done()
  ch <- fmt.Sprintf("<div>Hello %s!</div>", name)
}
func main() {
  var names = []string{"Alice", "Bob", "Charlie", "Dave", "Eve"}
  results := make(chan string, 5)
  wg := sync.WaitGroup{}
  wg.Add(len(names))
  for i := range names {
    go greet(names[i], results, &wg)
  }
  wg.Wait()
  close(results)
  for greeting := range results {
    fmt.Println(greeting)
  }
}
```

你有没有觉得将 wg 通过传参的方式传到 greet 函数内部非常的不优雅？这样限制了 greet 函数的复用性，所以我们应该把 WaitGroup 从调用函数的过程中拆分出来。

```golang
func greet(name string, ch chan string) {
  ch <- fmt.Sprintf("<div>Hello %s!</div>", name)
}
func main() {
  var names = []string{"Alice", "Bob", "Charlie", "Dave", "Eve"}
  results := make(chan string, 5)
  wg := sync.WaitGroup{}
  wg.Add(len(names))
  for i := range names {
    name := names[i]
    go func() {
      defer wg.Done()
      greet(name, results)
    }()
  }
  wg.Wait()
  close(results)
  for greeting := range results {
    fmt.Println(greeting)
  }
}
```

上面的例子中，我们其实是使用匿名函数创建的协程，然后在协程中调用 greet 函数，这样就可以将协程控制和业务逻辑分开，协程控制在匿名函数中，业务逻辑在被调函数中。

既然可以将协程控制和业务逻辑分开来提高被调函数的复用性，那么也可以将 Channel 和被调函数分开来提高函数复用性。这样 greeting 就是一个普通的函数了，即使在不需要 Channel 和协程的情况下也可以复用。

```golang
func greet(name string) (greeting string) {
   return fmt.Sprintf("<div>Hello %s!</div>", name)
}
func main() {
  var names = []string{"Alice", "Bob", "Charlie", "Dave", "Eve"}
  results := make(chan string, 5)
  wg := sync.WaitGroup{}
  wg.Add(len(names))
  for i := range names {
    name := names[i]
    go func() {
      defer wg.Done()
      greeting := greet(name)
      results <- greeting
    }()
  }
  wg.Wait()
  close(results)
  for greeting := range results {
    fmt.Println(greeting)
  }
}
```

八. 使用 Channel 传入参数

在上面的例子中，我们为每个需要处理的 name 创建了一个协程，因为需要处理的参数并不是很多，这样没有什么问题，但是如果有成千上万，甚至不断的有参数需要处理，为每次请求创建协程可能会浪费大量的时间在创建协程上，那么我们可以只创建固定数量的协程，然后将需要处理的参数传递给协程。

```golang
const routineNumber = 100

func greet(request chan string) () {
   for name := range request {
     fmt.Printf("<div>Hello %s!</div>\n", name)
  }
}

func main() {
  var names = []string{"Alice", "Bob", "Charlie", "Dave", "Eve"}
  request := make(chan string)
  wg := sync.WaitGroup{}

  wg.Add(routineNumber)
  for i := 0; i < routineNumber; i++ {
    go func() {
      defer wg.Done()
      greet(request)
    }()
  }

  for i := range names {
    request <- names[i]
  }
  close(request)
  wg.Wait()
}
```

上面的例子中我们用 100 个协程处理 5 个请求似乎有些浪费，但是当请求增加到几千几万个或者源源不断之后，这样做就是很常见的做法了。

九. 主动结束协程

值得注意的是，在上面一个例子中，协程中的 for 循环时因为 close(request)的操作而跳出的。也就是说，我们可以通过关闭管道来停止协程，但是如果协程没有传入参数，在实际应用中有很多这样的情况，比如协程接受 http 请求，处理并返回，或者监听消息队列，处理接受到的信息并记入数据库等， 我们应该怎么关闭循环的协程呢？我们可以创建一个无意义的管道来控制，也可以使用 Context。

使用管道的方法和上文的例子类似，只不过使用的是一个空结构体管道。

```golang
func greet(stop chan struct{}) {
  for {
    select {
    case <-stop:
      break
    default:
      time.Sleep(1 * time.Second)
      fmt.Println("Hello World!")
    }
  }
}

func main() {
  stop := make(chan struct{})
  go greet(stop)
  time.Sleep(10 * time.Second)
  close(stop)
  time.Sleep(10 * time.Second)
}
```

上面的程序会每秒打印一个 Hello World! 当运行大约十秒后停止打印，再过十秒后程序停止。select 关键字会随机执行一个 case 后的命令，如果成功就会执行 case 下面的程序，这段程序中只有一个 case，当执行<- stop 时，因为 stop 管道中没有内容，就会阻塞，不能执行，所以在 stop 管道开着的过程中只能执行 default 中的程序。当管道关闭时，<- stop 就不会阻塞了，进入 case 下面的程序，随即跳出循环，协程就会退出。

上面的例子中我们使用管道控制协程是否退出，那么反过来想，其实我们也可以使用管道控制主进程是否退出，也就是在协程中关闭管道，并退出协程，当主进程发现管道关闭之后就知道协程已经退出了，然后就可以取消阻塞继续执行了。

context 包是更高级的解决方案，context 包定义了 Context 接口，Context 定义了 4 个函数，其中 Done() 返回的是一个空结构体管道。可以用来控制协程退出。

```golang
func greet(ctx context.Context) {
  for {
    select {
    case <- ctx.Done():
      break
    default:
      time.Sleep(1 * time.Second)
      fmt.Println("Hello World!")
    }
  }
}

func main() {
  ctx, cancel := context.WithCancel(context.Background())
  go greet(ctx)
  time.Sleep(10 * time.Second)
  cancel()
  time.Sleep(10 * time.Second)
}
```

当然 Context 的功能远不止于此，它还可以用来控制超时和保存数据等。

十. 创建多协程任务

从上面的各种例子中我们可以看到，本来被调函数非常简单，但是为了使用协程提高并发性能，我们写了很多的代码来创建协程。该不会是每次需要创建协程都要写这么多代码吧。当然不是，程序员最大的优点就是会把重复的东西复用。

```golang
func greet(name string){
   fmt.Printf("<div>Hello %s!</div>\n", name)
}

func multiExec(f func(string), names []string) {
  wg := sync.WaitGroup{}
  wg.Add(len(names))
  for i := range names {
    name := names[i]
    go func() {
      defer wg.Done()
      f(name)
    }()
  }
  wg.Wait()
}

func main() {
  var names = []string{"Alice", "Bob", "Charlie", "Dave", "Eve"}
  multiExec(greet, names)
}
```

通过上面的 multiExec 函数的封装，我们每次需要使用多协程打印 names 的时候都只需要一条语句就可以了。

但是这样复用性依然很差，因为 multiExec 只接受 func(string)类型的函数。如果想要用这个函数创建多个协程就很麻烦了。所以我们创建协程时应该传入无差别的函数。你还记得我们前面用匿名函数调用函数创建协程吗？

```golang
func greet(name string){
   fmt.Printf("<div>Hello %s!</div>\n", name)
}

func multiExec(f func(), count int) (wg *sync.WaitGroup) {
  wg = &sync.WaitGroup{}
  wg.Add(count)
  for i:=0; i < count; i++ {
    go func() {
      defer wg.Done()
      f()
    }()
  }
  return wg
}

func main() {
  count := 5
  var names = []string{"Alice", "Bob", "Charlie", "Dave", "Eve"}
  nameCh := make(chan string, 5)

  wg := multiExec(func (){
      for name := range nameCh{
        greet(name)
      }
    }, count)

  for i := range names {
    nameCh <- names[i]
  }
  close(nameCh)

  wg.Wait()
}
```

这个例子看起来似乎并没有省多少代码，这是因为比较的对象不同，如果你的程序非常复杂，通过这种形式的封装还是可以减少不少工作量的。或者，你也可以直接将 Channel 或者 Context 等工具封装到 multiExec 函数中来处理更复杂的任务。

这个例子看起来似乎并没有省多少代码，这是因为比较的对象不同，如果你的程序非常复杂，通过这种形式的封装还是可以减少不少工作量的。或者，你也可以直接将 Channel 或者 Context 等工具封装到 multiExec 函数中来处理更复杂的任务。

十一. 通过传递函数创建协程

除了通过管道传递参数，我们也可以用管道传递函数，直接把参数通过闭包的形式封装在函数中传递协程。

```golang
func multiExec(count, len int) (tasks chan func(), wg *sync.WaitGroup) {
    wg = &sync.WaitGroup{}
    tasks = make(chan func(), len)
    // 创建任务队列
    for i := 0; i < count; i++ {
        wg.Add(1)
        go func() {
            defer wg.Done()
            for t := range tasks {
                t()
            }
        }()
    }
    return
}

func main() {
    var names = []string{"Alice", "Bob", "Charlie", "Dave", "Eve"}

    taskChan, wg := multiExec(4, 1)
    for i := range names {
        name := names[i]
        taskChan <- func() {
            fmt.Println(name)
        }
    }
    close(taskChan)
    wg.Wait()
}
```

并且这样我们可以不断的向队列中添加各种各样的任务，而不仅仅局限于一开始设定的函数。
