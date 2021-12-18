import{e as n}from"./app.06f66c16.js";import{_ as s}from"./plugin-vue_export-helper.21dcd24c.js";const a={},e=n(`<p>\u5728 golang \u4E2D\uFF0C\u4F7F\u7528 go \u5173\u952E\u5B57\u53EF\u4EE5\u521B\u5EFA\u4E00\u4E2A goroutine\u3002\u90A3\u4E48\u600E\u4E48\u4F7F\u7528 goroutine \u6EE1\u8DB3\u5404\u79CD\u4E0D\u540C\u7684\u9700\u6C42\u5462\uFF1F</p><p>\u4E00. \u76F4\u63A5\u4F7F\u7528 go \u5173\u952E\u5B57\u8FD0\u884C\u51FD\u6570\uFF1A</p><div class="language-golang ext-golang line-numbers-mode"><pre class="language-golang"><code>func greet(name string) {
  fmt.Printf(&quot;Hello %s!\\n&quot;, name)
}

func main() {
  go greet(&quot;World&quot;)
  time.Sleep(1 * time.Second)
}
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div><p>\u8FD9\u79CD\u65B9\u6CD5\u662F\u6700\u5E38\u7528\u7684\u65B9\u6CD5\uFF0C\u5C06\u8981\u4F7F\u7528\u534F\u7A0B\u8FD0\u884C\u7684\u4EFB\u52A1\u7F16\u5199\u5230\u4E00\u4E2A\u51FD\u6570\u4E2D\uFF0C\u5728\u9700\u8981\u7684\u65F6\u5019\u4F7F\u7528 go \u5173\u952E\u5B57\u6267\u884C\u5C31\u53EF\u4EE5\u4E86\uFF0C\u9700\u8981\u6CE8\u610F\u7684\u662F\uFF0C\u5982\u679C\u6CA1\u6709\u5E76\u53D1\u63A7\u5236\uFF0C\u90A3\u4E48\u4E00\u5B9A\u8981\u7ED9\u534F\u7A0B\u7684\u6267\u884C\u7559\u51FA\u5145\u5206\u7684\u65F6\u95F4\uFF0C\u5426\u5219\u534F\u7A0B\u8FD8\u6CA1\u6709\u5904\u7406\u5B8C\uFF0C\u6709\u53EF\u80FD\u7A0B\u5E8F\u5C31\u5DF2\u7ECF\u9000\u51FA\u4E86\u3002</p><p>\u4E8C. \u4F7F\u7528\u533F\u540D\u51FD\u6570\u521B\u5EFA\u534F\u7A0B</p><div class="language-golang ext-golang line-numbers-mode"><pre class="language-golang"><code>func main() {
  go func (name string) {
    fmt.Printf(&quot;Hello %s!\\n&quot;, name)
  } (&quot;World&quot;)
  time.Sleep(1 * time.Second)
}
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><p>\u8FD9\u79CD\u65B9\u6CD5\u4E5F\u662F\u975E\u5E38\u5E38\u7528\u7684\uFF0C\u4F7F\u7528\u533F\u540D\u51FD\u6570\u7684\u597D\u5904\uFF0C\u9996\u5148\u662F\u9700\u8981\u7684\u5730\u65B9\u5355\u72EC\u5B9A\u4E49\uFF0C\u9002\u5408\u4E0D\u9700\u8981\u590D\u7528\u7684\u903B\u8F91\uFF0C\u53E6\u5916\u533F\u540D\u51FD\u6570\u4E0D\u9700\u8981\u5360\u7528\u547D\u540D\uFF0C\u5BF9\u4E8E\u89E3\u51B3\u7A0B\u5E8F\u5458\u4E09\u5927\u96BE\u9898\u8FD8\u662F\u5F88\u6709\u5E2E\u52A9\u7684\u3002</p><p>\u4E09. \u533F\u540D\u51FD\u6570\u76F4\u63A5\u8BBF\u95EE\u4E3B\u8C03\u51FD\u6570\u4E2D\u7684\u53D8\u91CF</p><p>\u4F60\u6709\u53EF\u80FD\u5DF2\u7ECF\u60F3\u5230\u4E86\uFF0C\u5728\u4F7F\u7528\u533F\u540D\u51FD\u6570\u7684\u65B9\u6CD5\u4E2D\uFF0C\u533F\u540D\u51FD\u6570\u5185\u90E8\u5B9E\u9645\u4E0A\u662F\u53EF\u4EE5\u8BBF\u95EE\u4E3B\u8C03\u51FD\u6570\u7A7A\u95F4\u4E2D\u7684\u53D8\u91CF\u7684\u3002\u4E5F\u5C31\u662F\u8BF4\uFF0C\u6211\u4EEC\u4E0D\u9700\u8981\u4F7F\u7528\u53C2\u6570\u4F20\u9012\uFF0C\u5C31\u53EF\u4EE5\u8BA9\u534F\u7A0B\u83B7\u53D6\u5230\u9700\u8981\u7684\u53C2\u6570\u3002</p><div class="language-golang ext-golang line-numbers-mode"><pre class="language-golang"><code>func main() {
  var name = &quot;World&quot;
  go func() {
    fmt.Printf(&quot;Hello %s!\\n&quot;, name)
  } ()
  time.Sleep(1 * time.Second)
}
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><p>\u8BF7\u6CE8\u610F\uFF0C\u8FD9\u79CD\u65B9\u6CD5\u6709\u4E00\u4E2A\u5751\uFF0C\u56E0\u4E3A\u534F\u7A0B\u4E2D\u53EF\u4EE5\u76F4\u63A5\u8BBF\u95EE\u4E3B\u8C03\u51FD\u6570\u4E2D\u7684\u53D8\u91CF\uFF0C\u800C\u4E0D\u662F\u901A\u8FC7\u53C2\u6570\u4F20\u9012\u83B7\u53D6\uFF0C\u8FD9\u6837\u5C31\u8DF3\u8FC7\u4E86\u62F7\u8D1D\u53D8\u91CF\u7684\u6B65\u9AA4\uFF0C\u534F\u7A0B\u4E2D\u8BBF\u95EE\u53D8\u91CF\u5C31\u662F\u5B9E\u5B9E\u5728\u5728\u7684\u4E3B\u8C03\u51FD\u6570\u4E2D\u7684\u53D8\u91CF\uFF0C\u6709\u4E9B\u65F6\u5019\u7A0B\u5E8F\u53EF\u80FD\u4F1A\u548C\u4F60\u7684\u9884\u671F\u6709\u4E9B\u533A\u522B\u3002\u6BD4\u5982\uFF1A</p><div class="language-golang ext-golang line-numbers-mode"><pre class="language-golang"><code>func main() {
  var name = &quot;World&quot;
  go func() {
    fmt.Printf(&quot;Hello %s!\\n&quot;, name)
  } ()
  name = &quot;me&quot;
  time.Sleep(1 * time.Second)
}
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div><p>\u6267\u884C\u4E0A\u9762\u7684\u7A0B\u5E8F\uFF0C\u5F88\u5927\u6982\u7387\u4F1A\u6253\u5370\u51FA\u201CHello me!\u201D \u800C\u4E0D\u662F \u201CHello World!\u201D\uFF0C\u8FD9\u662F\u56E0\u4E3A\u521B\u5EFA\u534F\u7A0B\u9700\u8981\u65F6\u95F4\uFF0C\u5E76\u4E14\u534F\u7A0B\u8C03\u5EA6\u4E0D\u662F\u6211\u4EEC\u7F16\u5199\u7684\u7A0B\u5E8F\u80FD\u591F\u63A7\u5236\u7684\u3002\u5982\u679C\u5728\u6253\u5370\u7684\u65F6\u5019\uFF0Cname \u7684\u5185\u5BB9\u6CA1\u6709\u53D8\u5316\uFF0C\u534F\u7A0B\u5C31\u4F1A\u6253\u5370\u51FA\u201CHello World!\u201D\uFF0C\u800C\u5982\u679C name \u7684\u503C\u5DF2\u7ECF\u53D8\u5316\u4E86\uFF0C\u90A3\u4E48\u6253\u5370\u51FA\u6765\u7684\u4E1C\u897F\u4E5F\u4F1A\u53D1\u751F\u53D8\u5316\u3002\u540C\u65F6\uFF0C\u9664\u4E86\u4E3B\u8C03\u51FD\u6570\u7684\u503C\u5F71\u54CD\u534F\u7A0B \uFF0C\u534F\u7A0B\u5BF9\u53D8\u91CF\u7684\u4FEE\u6539\u4E5F\u4F1A\u76F4\u63A5\u5F71\u54CD\u4E3B\u8C03\u51FD\u6570\uFF0C\u6700\u5927\u7684\u95EE\u9898\u662F\uFF0C\u6CA1\u6709\u5E76\u53D1\u63A7\u5236\u7684\u60C5\u51B5\u4E2D\uFF0C\u4F60\u65E0\u6CD5\u77E5\u9053\u534F\u7A0B\u6709\u6CA1\u6709\u4FEE\u6539\u4E3B\u8C03\u51FD\u6570\u4E2D\u7684\u53D8\u91CF\u3002\u6BD4\u5982\uFF1A</p><div class="language-golang ext-golang line-numbers-mode"><pre class="language-golang"><code>func main() {
  var a = 1
  go func() {
    a = 2
  } ()
  fmt.Print(&quot;1+1 = &quot; )
  fmt.Println(a + a)
  time.Sleep(1 * time.Second)
}
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br></div></div><p>\u5982\u679C\u534F\u7A0B\u6267\u884C\u7684\u5F88\u665A\uFF0C\u90A3\u4E48\u6211\u4EEC\u53EF\u80FD\u6253\u5370\u51FA\u6B63\u786E\u7684\u5185\u5BB9\uFF0C\u5982\u679C\u534F\u7A0B\u6267\u884C\u7684\u5F88\u5FEB\uFF0C\u90A3\u4E48\u5C31\u4F1A\u6253\u5370\u51FA \u201C1+1 = 4\u201D\u8FD9\u4E2A\u9519\u8BEF\u7684\u7B54\u6848\u3002</p><p>\u56DB. \u4F7F\u7528 sync.WaitGroup \u8FDB\u884C\u534F\u7A0B\u63A7\u5236</p><div class="language-golang ext-golang line-numbers-mode"><pre class="language-golang"><code>func main() {
  var a = 1
  wg := sync.WaitGroup{}
  wg.Add(1)
  go func() {
   defer wg.Done()
    a = 2
  } ()
  wg.Wait()
  fmt.Print(&quot;2+2 = &quot; )
  fmt.Println(a + a)
  time.Sleep(1 * time.Second)
}
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br></div></div><p>\u4E3A\u4E86\u51C6\u786E\u7684\u63A7\u5236\u5DE5\u4F5C\u7684\u6D41\u7A0B\uFF0C\u6211\u4EEC\u4F7F\u7528 sync.WaitGroup \u8FDB\u884C\u534F\u7A0B\u540C\u6B65\uFF0Cwg.Add(1)\u58F0\u660E\u4E00\u4E2A\u4F1A\u6267\u884C\u7684\u534F\u7A0B\uFF0Cwg.Done()\u8868\u660E\u6709\u4E00\u4E2A\u534F\u7A0B\u6267\u884C\u5B8C\u6210\u4E86\u3002wg.Wait()\u4F1A\u5728\u534F\u7A0B\u9000\u51FA\u524D\u4FDD\u6301\u963B\u585E\uFF0C\u53EA\u6709\u534F\u7A0B\u7ED3\u675F\u4E4B\u540E\uFF0C\u6253\u5370\u5DE5\u4F5C\u624D\u4F1A\u8FDB\u884C\uFF0C\u8FD9\u6837\u5C31\u80FD\u6253\u5370\u51FA\u6B63\u786E\u7684 \u201C2+2 = 4\u201D\u7684\u7ED3\u679C\u3002</p><p>\u4E94. \u4F7F\u7528\u5FAA\u73AF\u521B\u5EFA\u591A\u4E2A\u534F\u7A0B</p><p>\u6211\u4EEC\u4F7F\u7528\u534F\u7A0B\u7684\u76EE\u7684\u5C31\u662F\u4E3A\u4E86\u6548\u7387\uFF0C\u5982\u679C\u6BCF\u6B21\u90FD\u53EA\u521B\u5EFA\u4E00\u4E2A\u534F\u7A0B\uFF0C\u90A3\u4E48\u5BF9\u4E8E\u63D0\u5230\u5904\u7406\u6548\u7387\u5E76\u6CA1\u6709\u4EC0\u4E48\u5E2E\u52A9\u3002\u6240\u4EE5\u901A\u5E38\u4F7F\u7528\u534F\u7A0B\u90FD\u4F1A\u914D\u5408\u5FAA\u73AF\u521B\u5EFA\u591A\u4E2A\u534F\u7A0B\u3002</p><div class="language-golang ext-golang line-numbers-mode"><pre class="language-golang"><code>func main() {
  var names = []string{&quot;Alice&quot;, &quot;Bob&quot;, &quot;Charlie&quot;, &quot;Dave&quot;, &quot;Eve&quot;}
  for i := range names {
    go func() {
      fmt.Printf(&quot;Hello %s!\\n&quot;, names[i])
    } ()
  }
  time.Sleep(1 * time.Second)
}
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br></div></div><p>\u6267\u884C\u4E0A\u9762\u7684\u7A0B\u5E8F\u4F60\u53EF\u80FD\u4F1A\u6253\u5370\u51FA 5 \u4E2A\u76F8\u540C\u7684 Hello Eve!\u662F\u7684\uFF0C\u6211\u4EEC\u518D\u4E00\u6B21\u8E29\u5230\u4E86\u4F7F\u7528\u533F\u540D\u51FD\u6570\u7684\u5751\u3002\u56E0\u4E3A i \u4E5F\u662F\u4E3B\u8C03\u51FD\u6570\u4E2D\u7684\u53D8\u91CF\uFF0C\u6240\u4EE5\u5728\u534F\u7A0B\u4E2D\u6267\u884C\u6253\u5370\u7684\u65F6\u5019\uFF0Ci \u5176\u5B9E\u5DF2\u7ECF\u53D8\u5316\u4E86\uFF0C\u8FD9\u4E2A\u4F8B\u5B50\u4E2D\u521B\u5EFA\u7684\u534F\u7A0B\u6BD4\u8F83\u5C11\uFF0C\u5927\u6982\u7387\u5728\u6240\u6709\u534F\u7A0B\u6267\u884C\u6267\u884C\u7684\u65F6\u5019\uFF0Ci \u5DF2\u7ECF\u53D8\u6210\u6700\u7EC8\u7684\u503C 4 \u4E86\u3002\u90A3\u4E48\u5982\u4F55\u89E3\u51B3\u8FD9\u4E2A\u95EE\u9898\u5462\uFF1F\u6211\u4EEC\u53EF\u4EE5\u5728\u521B\u5EFA\u534F\u7A0B\u4E4B\u524D\u5C06\u5B83\u62F7\u8D1D\u4E00\u904D\uFF0C\u8FD9\u6837\u6BCF\u4E2A\u534F\u7A0B\u5C31\u53EF\u4EE5\u4F7F\u7528\u4E00\u4E2A\u7A33\u5B9A\u7684\u503C\u4E86\u3002</p><div class="language-golang ext-golang line-numbers-mode"><pre class="language-golang"><code>func main() {
  var names = []string{&quot;Alice&quot;, &quot;Bob&quot;, &quot;Charlie&quot;, &quot;Dave&quot;, &quot;Eve&quot;}
  for i := range names {
    index := i
    go func() {
      fmt.Printf(&quot;Hello %s!\\n&quot;, names[index])
    } ()
  }
  time.Sleep(1 * time.Second)
}
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br></div></div><p>\u5F53\u7136\uFF0C\u8FD9\u4E5F\u53EA\u662F names \u53D8\u91CF\u4E0D\u4F1A\u53D1\u751F\u53D8\u5316\u7684\u60C5\u51B5\u4E0B\u9002\u7528\uFF0C\u6700\u597D\u6211\u4EEC\u76F4\u63A5\u5C06\u8981\u4F7F\u7528\u7684\u91CF\u590D\u5236\u51FA\u6765\u3002</p><div class="language-golang ext-golang line-numbers-mode"><pre class="language-golang"><code>func main() {
  var names = []string{&quot;Alice&quot;, &quot;Bob&quot;, &quot;Charlie&quot;, &quot;Dave&quot;, &quot;Eve&quot;}
  for i := range names {
    name:= names[i]
    go func() {
      fmt.Printf(&quot;Hello %s!\\n&quot;, name)
    } ()
  }
  time.Sleep(1 * time.Second)
}
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br></div></div><p>\u5982\u679C\u4F60\u7684\u7ED3\u6784\u4F53\u6BD4\u8F83\u590D\u6742\uFF0C\u4F60\u62C5\u5FC3\u62F7\u8D1D\u4F1A\u5F71\u54CD\u6027\u80FD\uFF0C\u90A3\u4E48\u4F60\u53EA\u80FD\u901A\u8FC7\u5176\u4ED6\u529E\u6CD5\u4FDD\u8BC1\u534F\u7A0B\u6267\u884C\u5B8C\u6210\u524D names \u4E0D\u4F1A\u53D1\u751F\u53D8\u5316\uFF0C\u6BD4\u5982\u4F7F\u7528 sync.WaitGroup\u3002</p><p>\u516D. \u4F7F\u7528\u5FAA\u73AF\u8C03\u7528\u51FD\u6570\u521B\u5EFA\u534F\u7A0B</p><p>\u5728\u4E0A\u9762\u7684\u4F8B\u5B50\u4E2D\u6211\u4EEC\u9700\u8981\u4E3B\u52A8\u62F7\u8D1D\u53D8\u91CF\uFF0C\u907F\u514D\u534F\u7A0B\u5728\u4F7F\u7528\u53D8\u91CF\u524D\u53D8\u91CF\u53D1\u751F\u53D8\u5316\u5E26\u6765\u7684\u95EE\u9898\u3002\u90A3\u4E48\u4E3A\u4EC0\u4E48\u4E0D\u76F4\u63A5\u901A\u8FC7\u53C2\u6570\u4F20\u9012\u5462\uFF1F</p><div class="language-golang ext-golang line-numbers-mode"><pre class="language-golang"><code>func greet(name string) {
  fmt.Printf(&quot;Hello %s!\\n&quot;, name)
}
func main() {
  var names = []string{&quot;Alice&quot;, &quot;Bob&quot;, &quot;Charlie&quot;, &quot;Dave&quot;, &quot;Eve&quot;}
  for i := range names {
    go greet(names[i])
  }
  time.Sleep(1 * time.Second)
}
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br></div></div><p>\u5982\u679C\u4F60\u7684\u51FD\u6570\u9700\u8981\u590D\u7528\uFF0C\u6B63\u597D\u53EF\u4EE5\u4F7F\u7528\u8FD9\u79CD\u65B9\u5F0F\u3002</p><p>\u4E03. \u4F7F\u7528 Channel \u83B7\u53D6\u8FD4\u56DE\u503C</p><p>\u5982\u679C\u534F\u7A0B\u4E0D\u9700\u8981\u8FD4\u56DE\u7ED3\u679C\uFF0C\u6BD4\u5982\u6211\u4EEC\u4E0A\u9762\u7684\u4F8B\u5B50\uFF0C\u90A3\u4E48\u76F4\u63A5\u4F20\u9012\u53C2\u6570\u7ED9\u88AB\u8C03\u51FD\u6570\u5C31\u597D\u4E86\u3002\u5982\u679C\u6211\u4EEC\u7684\u4EFB\u52A1\u4E0D\u662F\u6253\u5370\uFF0C\u800C\u662F\u9700\u8981\u5C06\u7ED3\u679C\u8FD4\u56DE\u7ED9\u4E3B\u8C03\u51FD\u6570\uFF0C\u90A3\u4E48\u5C31\u9700\u8981\u501F\u52A9\u7BA1\u9053\u3002\u6211\u4EEC\u7ECF\u5E38\u7F16\u5199\u7684 web \u670D\u52A1\u5668\u90FD\u662F\u8FD9\u79CD\u9700\u6C42\u3002</p><div class="language-golang ext-golang line-numbers-mode"><pre class="language-golang"><code>func greet(name string, ch chan string) {
  ch &lt;- fmt.Sprintf(&quot;&lt;div&gt;Hello %s!&lt;/div&gt;&quot;, name)
}
func main() {
  var names = []string{&quot;Alice&quot;, &quot;Bob&quot;, &quot;Charlie&quot;, &quot;Dave&quot;, &quot;Eve&quot;}
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
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br></div></div><p>\u4E0A\u9762\u7684\u7A0B\u5E8F\u4E2D\uFF0C\u6211\u4EEC\u4F7F\u7528 time.Sleep \u7B49\u5F85\u534F\u7A0B\u5B8C\u6210\u662F\u975E\u5E38\u7C97\u7CD9\u4F4E\u6548\u7684\u65B9\u6CD5\uFF0C\u5728\u7F16\u5199\u771F\u6B63\u7684\u7A0B\u5E8F\u65F6\u5343\u4E07\u4E0D\u8981\u8FD9\u4E48\u505A\uFF0C\u6700\u597D\u8FD8\u662F\u4F7F\u7528 WaitGroup\u3002</p><div class="language-golang ext-golang line-numbers-mode"><pre class="language-golang"><code>func greet(name string, ch chan string, wg  *sync.WaitGroup) {
  defer wg.Done()
  ch &lt;- fmt.Sprintf(&quot;&lt;div&gt;Hello %s!&lt;/div&gt;&quot;, name)
}
func main() {
  var names = []string{&quot;Alice&quot;, &quot;Bob&quot;, &quot;Charlie&quot;, &quot;Dave&quot;, &quot;Eve&quot;}
  results := make(chan string, 5)
  wg := sync.WaitGroup{}
  wg.Add(len(names))
  for i := range names {
    go greet(names[i], results, &amp;wg)
  }
  wg.Wait()
  close(results)
  for greeting := range results {
    fmt.Println(greeting)
  }
}
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br></div></div><p>\u4F60\u6709\u6CA1\u6709\u89C9\u5F97\u5C06 wg \u901A\u8FC7\u4F20\u53C2\u7684\u65B9\u5F0F\u4F20\u5230 greet \u51FD\u6570\u5185\u90E8\u975E\u5E38\u7684\u4E0D\u4F18\u96C5\uFF1F\u8FD9\u6837\u9650\u5236\u4E86 greet \u51FD\u6570\u7684\u590D\u7528\u6027\uFF0C\u6240\u4EE5\u6211\u4EEC\u5E94\u8BE5\u628A WaitGroup \u4ECE\u8C03\u7528\u51FD\u6570\u7684\u8FC7\u7A0B\u4E2D\u62C6\u5206\u51FA\u6765\u3002</p><div class="language-golang ext-golang line-numbers-mode"><pre class="language-golang"><code>func greet(name string, ch chan string) {
  ch &lt;- fmt.Sprintf(&quot;&lt;div&gt;Hello %s!&lt;/div&gt;&quot;, name)
}
func main() {
  var names = []string{&quot;Alice&quot;, &quot;Bob&quot;, &quot;Charlie&quot;, &quot;Dave&quot;, &quot;Eve&quot;}
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
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br></div></div><p>\u4E0A\u9762\u7684\u4F8B\u5B50\u4E2D\uFF0C\u6211\u4EEC\u5176\u5B9E\u662F\u4F7F\u7528\u533F\u540D\u51FD\u6570\u521B\u5EFA\u7684\u534F\u7A0B\uFF0C\u7136\u540E\u5728\u534F\u7A0B\u4E2D\u8C03\u7528 greet \u51FD\u6570\uFF0C\u8FD9\u6837\u5C31\u53EF\u4EE5\u5C06\u534F\u7A0B\u63A7\u5236\u548C\u4E1A\u52A1\u903B\u8F91\u5206\u5F00\uFF0C\u534F\u7A0B\u63A7\u5236\u5728\u533F\u540D\u51FD\u6570\u4E2D\uFF0C\u4E1A\u52A1\u903B\u8F91\u5728\u88AB\u8C03\u51FD\u6570\u4E2D\u3002</p><p>\u65E2\u7136\u53EF\u4EE5\u5C06\u534F\u7A0B\u63A7\u5236\u548C\u4E1A\u52A1\u903B\u8F91\u5206\u5F00\u6765\u63D0\u9AD8\u88AB\u8C03\u51FD\u6570\u7684\u590D\u7528\u6027\uFF0C\u90A3\u4E48\u4E5F\u53EF\u4EE5\u5C06 Channel \u548C\u88AB\u8C03\u51FD\u6570\u5206\u5F00\u6765\u63D0\u9AD8\u51FD\u6570\u590D\u7528\u6027\u3002\u8FD9\u6837 greeting \u5C31\u662F\u4E00\u4E2A\u666E\u901A\u7684\u51FD\u6570\u4E86\uFF0C\u5373\u4F7F\u5728\u4E0D\u9700\u8981 Channel \u548C\u534F\u7A0B\u7684\u60C5\u51B5\u4E0B\u4E5F\u53EF\u4EE5\u590D\u7528\u3002</p><div class="language-golang ext-golang line-numbers-mode"><pre class="language-golang"><code>func greet(name string) (greeting string) {
   return fmt.Sprintf(&quot;&lt;div&gt;Hello %s!&lt;/div&gt;&quot;, name)
}
func main() {
  var names = []string{&quot;Alice&quot;, &quot;Bob&quot;, &quot;Charlie&quot;, &quot;Dave&quot;, &quot;Eve&quot;}
  results := make(chan string, 5)
  wg := sync.WaitGroup{}
  wg.Add(len(names))
  for i := range names {
    name := names[i]
    go func() {
      defer wg.Done()
      greeting := greet(name)
      results &lt;- greeting
    }()
  }
  wg.Wait()
  close(results)
  for greeting := range results {
    fmt.Println(greeting)
  }
}
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br></div></div><p>\u516B. \u4F7F\u7528 Channel \u4F20\u5165\u53C2\u6570</p><p>\u5728\u4E0A\u9762\u7684\u4F8B\u5B50\u4E2D\uFF0C\u6211\u4EEC\u4E3A\u6BCF\u4E2A\u9700\u8981\u5904\u7406\u7684 name \u521B\u5EFA\u4E86\u4E00\u4E2A\u534F\u7A0B\uFF0C\u56E0\u4E3A\u9700\u8981\u5904\u7406\u7684\u53C2\u6570\u5E76\u4E0D\u662F\u5F88\u591A\uFF0C\u8FD9\u6837\u6CA1\u6709\u4EC0\u4E48\u95EE\u9898\uFF0C\u4F46\u662F\u5982\u679C\u6709\u6210\u5343\u4E0A\u4E07\uFF0C\u751A\u81F3\u4E0D\u65AD\u7684\u6709\u53C2\u6570\u9700\u8981\u5904\u7406\uFF0C\u4E3A\u6BCF\u6B21\u8BF7\u6C42\u521B\u5EFA\u534F\u7A0B\u53EF\u80FD\u4F1A\u6D6A\u8D39\u5927\u91CF\u7684\u65F6\u95F4\u5728\u521B\u5EFA\u534F\u7A0B\u4E0A\uFF0C\u90A3\u4E48\u6211\u4EEC\u53EF\u4EE5\u53EA\u521B\u5EFA\u56FA\u5B9A\u6570\u91CF\u7684\u534F\u7A0B\uFF0C\u7136\u540E\u5C06\u9700\u8981\u5904\u7406\u7684\u53C2\u6570\u4F20\u9012\u7ED9\u534F\u7A0B\u3002</p><div class="language-golang ext-golang line-numbers-mode"><pre class="language-golang"><code>const routineNumber = 100

func greet(request chan string) () {
   for name := range request {
     fmt.Printf(&quot;&lt;div&gt;Hello %s!&lt;/div&gt;\\n&quot;, name)
  }
}

func main() {
  var names = []string{&quot;Alice&quot;, &quot;Bob&quot;, &quot;Charlie&quot;, &quot;Dave&quot;, &quot;Eve&quot;}
  request := make(chan string)
  wg := sync.WaitGroup{}

  wg.Add(routineNumber)
  for i := 0; i &lt; routineNumber; i++ {
    go func() {
      defer wg.Done()
      greet(request)
    }()
  }

  for i := range names {
    request &lt;- names[i]
  }
  close(request)
  wg.Wait()
}
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br></div></div><p>\u4E0A\u9762\u7684\u4F8B\u5B50\u4E2D\u6211\u4EEC\u7528 100 \u4E2A\u534F\u7A0B\u5904\u7406 5 \u4E2A\u8BF7\u6C42\u4F3C\u4E4E\u6709\u4E9B\u6D6A\u8D39\uFF0C\u4F46\u662F\u5F53\u8BF7\u6C42\u589E\u52A0\u5230\u51E0\u5343\u51E0\u4E07\u4E2A\u6216\u8005\u6E90\u6E90\u4E0D\u65AD\u4E4B\u540E\uFF0C\u8FD9\u6837\u505A\u5C31\u662F\u5F88\u5E38\u89C1\u7684\u505A\u6CD5\u4E86\u3002</p><p>\u4E5D. \u4E3B\u52A8\u7ED3\u675F\u534F\u7A0B</p><p>\u503C\u5F97\u6CE8\u610F\u7684\u662F\uFF0C\u5728\u4E0A\u9762\u4E00\u4E2A\u4F8B\u5B50\u4E2D\uFF0C\u534F\u7A0B\u4E2D\u7684 for \u5FAA\u73AF\u65F6\u56E0\u4E3A close(request)\u7684\u64CD\u4F5C\u800C\u8DF3\u51FA\u7684\u3002\u4E5F\u5C31\u662F\u8BF4\uFF0C\u6211\u4EEC\u53EF\u4EE5\u901A\u8FC7\u5173\u95ED\u7BA1\u9053\u6765\u505C\u6B62\u534F\u7A0B\uFF0C\u4F46\u662F\u5982\u679C\u534F\u7A0B\u6CA1\u6709\u4F20\u5165\u53C2\u6570\uFF0C\u5728\u5B9E\u9645\u5E94\u7528\u4E2D\u6709\u5F88\u591A\u8FD9\u6837\u7684\u60C5\u51B5\uFF0C\u6BD4\u5982\u534F\u7A0B\u63A5\u53D7 http \u8BF7\u6C42\uFF0C\u5904\u7406\u5E76\u8FD4\u56DE\uFF0C\u6216\u8005\u76D1\u542C\u6D88\u606F\u961F\u5217\uFF0C\u5904\u7406\u63A5\u53D7\u5230\u7684\u4FE1\u606F\u5E76\u8BB0\u5165\u6570\u636E\u5E93\u7B49\uFF0C \u6211\u4EEC\u5E94\u8BE5\u600E\u4E48\u5173\u95ED\u5FAA\u73AF\u7684\u534F\u7A0B\u5462\uFF1F\u6211\u4EEC\u53EF\u4EE5\u521B\u5EFA\u4E00\u4E2A\u65E0\u610F\u4E49\u7684\u7BA1\u9053\u6765\u63A7\u5236\uFF0C\u4E5F\u53EF\u4EE5\u4F7F\u7528 Context\u3002</p><p>\u4F7F\u7528\u7BA1\u9053\u7684\u65B9\u6CD5\u548C\u4E0A\u6587\u7684\u4F8B\u5B50\u7C7B\u4F3C\uFF0C\u53EA\u4E0D\u8FC7\u4F7F\u7528\u7684\u662F\u4E00\u4E2A\u7A7A\u7ED3\u6784\u4F53\u7BA1\u9053\u3002</p><div class="language-golang ext-golang line-numbers-mode"><pre class="language-golang"><code>func greet(stop chan struct{}) {
  for {
    select {
    case &lt;-stop:
      break
    default:
      time.Sleep(1 * time.Second)
      fmt.Println(&quot;Hello World!&quot;)
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
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br></div></div><p>\u4E0A\u9762\u7684\u7A0B\u5E8F\u4F1A\u6BCF\u79D2\u6253\u5370\u4E00\u4E2A Hello World! \u5F53\u8FD0\u884C\u5927\u7EA6\u5341\u79D2\u540E\u505C\u6B62\u6253\u5370\uFF0C\u518D\u8FC7\u5341\u79D2\u540E\u7A0B\u5E8F\u505C\u6B62\u3002select \u5173\u952E\u5B57\u4F1A\u968F\u673A\u6267\u884C\u4E00\u4E2A case \u540E\u7684\u547D\u4EE4\uFF0C\u5982\u679C\u6210\u529F\u5C31\u4F1A\u6267\u884C case \u4E0B\u9762\u7684\u7A0B\u5E8F\uFF0C\u8FD9\u6BB5\u7A0B\u5E8F\u4E2D\u53EA\u6709\u4E00\u4E2A case\uFF0C\u5F53\u6267\u884C&lt;- stop \u65F6\uFF0C\u56E0\u4E3A stop \u7BA1\u9053\u4E2D\u6CA1\u6709\u5185\u5BB9\uFF0C\u5C31\u4F1A\u963B\u585E\uFF0C\u4E0D\u80FD\u6267\u884C\uFF0C\u6240\u4EE5\u5728 stop \u7BA1\u9053\u5F00\u7740\u7684\u8FC7\u7A0B\u4E2D\u53EA\u80FD\u6267\u884C default \u4E2D\u7684\u7A0B\u5E8F\u3002\u5F53\u7BA1\u9053\u5173\u95ED\u65F6\uFF0C&lt;- stop \u5C31\u4E0D\u4F1A\u963B\u585E\u4E86\uFF0C\u8FDB\u5165 case \u4E0B\u9762\u7684\u7A0B\u5E8F\uFF0C\u968F\u5373\u8DF3\u51FA\u5FAA\u73AF\uFF0C\u534F\u7A0B\u5C31\u4F1A\u9000\u51FA\u3002</p><p>\u4E0A\u9762\u7684\u4F8B\u5B50\u4E2D\u6211\u4EEC\u4F7F\u7528\u7BA1\u9053\u63A7\u5236\u534F\u7A0B\u662F\u5426\u9000\u51FA\uFF0C\u90A3\u4E48\u53CD\u8FC7\u6765\u60F3\uFF0C\u5176\u5B9E\u6211\u4EEC\u4E5F\u53EF\u4EE5\u4F7F\u7528\u7BA1\u9053\u63A7\u5236\u4E3B\u8FDB\u7A0B\u662F\u5426\u9000\u51FA\uFF0C\u4E5F\u5C31\u662F\u5728\u534F\u7A0B\u4E2D\u5173\u95ED\u7BA1\u9053\uFF0C\u5E76\u9000\u51FA\u534F\u7A0B\uFF0C\u5F53\u4E3B\u8FDB\u7A0B\u53D1\u73B0\u7BA1\u9053\u5173\u95ED\u4E4B\u540E\u5C31\u77E5\u9053\u534F\u7A0B\u5DF2\u7ECF\u9000\u51FA\u4E86\uFF0C\u7136\u540E\u5C31\u53EF\u4EE5\u53D6\u6D88\u963B\u585E\u7EE7\u7EED\u6267\u884C\u4E86\u3002</p><p>context \u5305\u662F\u66F4\u9AD8\u7EA7\u7684\u89E3\u51B3\u65B9\u6848\uFF0Ccontext \u5305\u5B9A\u4E49\u4E86 Context \u63A5\u53E3\uFF0CContext \u5B9A\u4E49\u4E86 4 \u4E2A\u51FD\u6570\uFF0C\u5176\u4E2D Done() \u8FD4\u56DE\u7684\u662F\u4E00\u4E2A\u7A7A\u7ED3\u6784\u4F53\u7BA1\u9053\u3002\u53EF\u4EE5\u7528\u6765\u63A7\u5236\u534F\u7A0B\u9000\u51FA\u3002</p><div class="language-golang ext-golang line-numbers-mode"><pre class="language-golang"><code>func greet(ctx context.Context) {
  for {
    select {
    case &lt;- ctx.Done():
      break
    default:
      time.Sleep(1 * time.Second)
      fmt.Println(&quot;Hello World!&quot;)
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
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br></div></div><p>\u5F53\u7136 Context \u7684\u529F\u80FD\u8FDC\u4E0D\u6B62\u4E8E\u6B64\uFF0C\u5B83\u8FD8\u53EF\u4EE5\u7528\u6765\u63A7\u5236\u8D85\u65F6\u548C\u4FDD\u5B58\u6570\u636E\u7B49\u3002</p><p>\u5341. \u521B\u5EFA\u591A\u534F\u7A0B\u4EFB\u52A1</p><p>\u4ECE\u4E0A\u9762\u7684\u5404\u79CD\u4F8B\u5B50\u4E2D\u6211\u4EEC\u53EF\u4EE5\u770B\u5230\uFF0C\u672C\u6765\u88AB\u8C03\u51FD\u6570\u975E\u5E38\u7B80\u5355\uFF0C\u4F46\u662F\u4E3A\u4E86\u4F7F\u7528\u534F\u7A0B\u63D0\u9AD8\u5E76\u53D1\u6027\u80FD\uFF0C\u6211\u4EEC\u5199\u4E86\u5F88\u591A\u7684\u4EE3\u7801\u6765\u521B\u5EFA\u534F\u7A0B\u3002\u8BE5\u4E0D\u4F1A\u662F\u6BCF\u6B21\u9700\u8981\u521B\u5EFA\u534F\u7A0B\u90FD\u8981\u5199\u8FD9\u4E48\u591A\u4EE3\u7801\u5427\u3002\u5F53\u7136\u4E0D\u662F\uFF0C\u7A0B\u5E8F\u5458\u6700\u5927\u7684\u4F18\u70B9\u5C31\u662F\u4F1A\u628A\u91CD\u590D\u7684\u4E1C\u897F\u590D\u7528\u3002</p><div class="language-golang ext-golang line-numbers-mode"><pre class="language-golang"><code>func greet(name string){
   fmt.Printf(&quot;&lt;div&gt;Hello %s!&lt;/div&gt;\\n&quot;, name)
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
  var names = []string{&quot;Alice&quot;, &quot;Bob&quot;, &quot;Charlie&quot;, &quot;Dave&quot;, &quot;Eve&quot;}
  multiExec(greet, names)
}
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br></div></div><p>\u901A\u8FC7\u4E0A\u9762\u7684 multiExec \u51FD\u6570\u7684\u5C01\u88C5\uFF0C\u6211\u4EEC\u6BCF\u6B21\u9700\u8981\u4F7F\u7528\u591A\u534F\u7A0B\u6253\u5370 names \u7684\u65F6\u5019\u90FD\u53EA\u9700\u8981\u4E00\u6761\u8BED\u53E5\u5C31\u53EF\u4EE5\u4E86\u3002</p><p>\u4F46\u662F\u8FD9\u6837\u590D\u7528\u6027\u4F9D\u7136\u5F88\u5DEE\uFF0C\u56E0\u4E3A multiExec \u53EA\u63A5\u53D7 func(string)\u7C7B\u578B\u7684\u51FD\u6570\u3002\u5982\u679C\u60F3\u8981\u7528\u8FD9\u4E2A\u51FD\u6570\u521B\u5EFA\u591A\u4E2A\u534F\u7A0B\u5C31\u5F88\u9EBB\u70E6\u4E86\u3002\u6240\u4EE5\u6211\u4EEC\u521B\u5EFA\u534F\u7A0B\u65F6\u5E94\u8BE5\u4F20\u5165\u65E0\u5DEE\u522B\u7684\u51FD\u6570\u3002\u4F60\u8FD8\u8BB0\u5F97\u6211\u4EEC\u524D\u9762\u7528\u533F\u540D\u51FD\u6570\u8C03\u7528\u51FD\u6570\u521B\u5EFA\u534F\u7A0B\u5417\uFF1F</p><div class="language-golang ext-golang line-numbers-mode"><pre class="language-golang"><code>func greet(name string){
   fmt.Printf(&quot;&lt;div&gt;Hello %s!&lt;/div&gt;\\n&quot;, name)
}

func multiExec(f func(), count int) (wg *sync.WaitGroup) {
  wg = &amp;sync.WaitGroup{}
  wg.Add(count)
  for i:=0; i &lt; count; i++ {
    go func() {
      defer wg.Done()
      f()
    }()
  }
  return wg
}

func main() {
  count := 5
  var names = []string{&quot;Alice&quot;, &quot;Bob&quot;, &quot;Charlie&quot;, &quot;Dave&quot;, &quot;Eve&quot;}
  nameCh := make(chan string, 5)

  wg := multiExec(func (){
      for name := range nameCh{
        greet(name)
      }
    }, count)

  for i := range names {
    nameCh &lt;- names[i]
  }
  close(nameCh)

  wg.Wait()
}
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br></div></div><p>\u8FD9\u4E2A\u4F8B\u5B50\u770B\u8D77\u6765\u4F3C\u4E4E\u5E76\u6CA1\u6709\u7701\u591A\u5C11\u4EE3\u7801\uFF0C\u8FD9\u662F\u56E0\u4E3A\u6BD4\u8F83\u7684\u5BF9\u8C61\u4E0D\u540C\uFF0C\u5982\u679C\u4F60\u7684\u7A0B\u5E8F\u975E\u5E38\u590D\u6742\uFF0C\u901A\u8FC7\u8FD9\u79CD\u5F62\u5F0F\u7684\u5C01\u88C5\u8FD8\u662F\u53EF\u4EE5\u51CF\u5C11\u4E0D\u5C11\u5DE5\u4F5C\u91CF\u7684\u3002\u6216\u8005\uFF0C\u4F60\u4E5F\u53EF\u4EE5\u76F4\u63A5\u5C06 Channel \u6216\u8005 Context \u7B49\u5DE5\u5177\u5C01\u88C5\u5230 multiExec \u51FD\u6570\u4E2D\u6765\u5904\u7406\u66F4\u590D\u6742\u7684\u4EFB\u52A1\u3002</p><p>\u8FD9\u4E2A\u4F8B\u5B50\u770B\u8D77\u6765\u4F3C\u4E4E\u5E76\u6CA1\u6709\u7701\u591A\u5C11\u4EE3\u7801\uFF0C\u8FD9\u662F\u56E0\u4E3A\u6BD4\u8F83\u7684\u5BF9\u8C61\u4E0D\u540C\uFF0C\u5982\u679C\u4F60\u7684\u7A0B\u5E8F\u975E\u5E38\u590D\u6742\uFF0C\u901A\u8FC7\u8FD9\u79CD\u5F62\u5F0F\u7684\u5C01\u88C5\u8FD8\u662F\u53EF\u4EE5\u51CF\u5C11\u4E0D\u5C11\u5DE5\u4F5C\u91CF\u7684\u3002\u6216\u8005\uFF0C\u4F60\u4E5F\u53EF\u4EE5\u76F4\u63A5\u5C06 Channel \u6216\u8005 Context \u7B49\u5DE5\u5177\u5C01\u88C5\u5230 multiExec \u51FD\u6570\u4E2D\u6765\u5904\u7406\u66F4\u590D\u6742\u7684\u4EFB\u52A1\u3002</p><p>\u5341\u4E00. \u901A\u8FC7\u4F20\u9012\u51FD\u6570\u521B\u5EFA\u534F\u7A0B</p><p>\u9664\u4E86\u901A\u8FC7\u7BA1\u9053\u4F20\u9012\u53C2\u6570\uFF0C\u6211\u4EEC\u4E5F\u53EF\u4EE5\u7528\u7BA1\u9053\u4F20\u9012\u51FD\u6570\uFF0C\u76F4\u63A5\u628A\u53C2\u6570\u901A\u8FC7\u95ED\u5305\u7684\u5F62\u5F0F\u5C01\u88C5\u5728\u51FD\u6570\u4E2D\u4F20\u9012\u534F\u7A0B\u3002</p><div class="language-golang ext-golang line-numbers-mode"><pre class="language-golang"><code>func multiExec(count, len int) (tasks chan func(), wg *sync.WaitGroup) {
    wg = &amp;sync.WaitGroup{}
    tasks = make(chan func(), len)
    // \u521B\u5EFA\u4EFB\u52A1\u961F\u5217
    for i := 0; i &lt; count; i++ {
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
    var names = []string{&quot;Alice&quot;, &quot;Bob&quot;, &quot;Charlie&quot;, &quot;Dave&quot;, &quot;Eve&quot;}

    taskChan, wg := multiExec(4, 1)
    for i := range names {
        name := names[i]
        taskChan &lt;- func() {
            fmt.Println(name)
        }
    }
    close(taskChan)
    wg.Wait()
}
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br></div></div><p>\u5E76\u4E14\u8FD9\u6837\u6211\u4EEC\u53EF\u4EE5\u4E0D\u65AD\u7684\u5411\u961F\u5217\u4E2D\u6DFB\u52A0\u5404\u79CD\u5404\u6837\u7684\u4EFB\u52A1\uFF0C\u800C\u4E0D\u4EC5\u4EC5\u5C40\u9650\u4E8E\u4E00\u5F00\u59CB\u8BBE\u5B9A\u7684\u51FD\u6570\u3002</p>`,65);function l(r,p){return e}var b=s(a,[["render",l]]);export{b as default};
