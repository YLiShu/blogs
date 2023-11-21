(window.webpackJsonp=window.webpackJsonp||[]).push([[63],{480:function(t,a,_){"use strict";_.r(a);var v=_(1),e=Object(v.a)({},(function(){var t=this,a=t._self._c;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"http缓存"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#http缓存"}},[t._v("#")]),t._v(" HTTP缓存")]),t._v(" "),a("h2",{attrs:{id:"http协议"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#http协议"}},[t._v("#")]),t._v(" HTTP协议")]),t._v(" "),a("h3",{attrs:{id:"概况"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#概况"}},[t._v("#")]),t._v(" 概况")]),t._v(" "),a("p",[t._v("HTTP是一种超文本传输协议，定义了客户端和服务器之间交换报文的格式和方式，默认使用80端口。使用TCP作为传输层协议，确保了数据传输的可靠性。")]),t._v(" "),a("p",[t._v("HTTP是无状态的，服务器不保存有关客户的信息。")]),t._v(" "),a("p",[t._v("HTTP有两种连接模式：持续性连接和非持续性连接。非持续性连接要求服务器为每个请求的对象建立和维护一个全新的连接，而持续性连接下，TCP连接默认不关闭，可以被多个请求复用。持续性连接的好处是避免了每次建立TCP连接的三次握手所花费的时间。在HTTP1.0之前通常采用非持续性连接，但可以通过添加 "),a("code",[t._v("Connection: keep-alive")]),t._v(" 来要求服务器保持TCP连接不关闭。在HTTP1.1之后，默认使用持续性连接。目前，大多数浏览器支持同时建立6个持续性连接。")]),t._v(" "),a("h3",{attrs:{id:"http报文"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#http报文"}},[t._v("#")]),t._v(" HTTP报文")]),t._v(" "),a("p",[t._v("HTTP报文分为请求报文和响应报文，具体如下。")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://gitee.com/yelishu/note/raw/master/noteImgs_2/202311201111904.png",alt:"image.png"}})]),t._v(" "),a("h4",{attrs:{id:"http请求报文"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#http请求报文"}},[t._v("#")]),t._v(" HTTP请求报文")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://gitee.com/yelishu/note/raw/master/noteImgs_2/202311201111836.png",alt:"image.png"}})]),t._v(" "),a("p",[t._v("HTTP请求报文的格式如下：")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("GET / HTTP/1.1\nUser-Agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_10_5)\nAccept: */*\n")])])]),a("p",[t._v("HTTP请求报文的第一行叫请求行，后面的行叫首部行，首部行后还可以跟一个实体主体。请求首部之后有一个空行，这个空行不能省略，它用来划分首部与实体。")]),t._v(" "),a("p",[t._v("请求行包含三个字段：方法字段、URL字段和HTTP版本字段。")]),t._v(" "),a("p",[t._v("方法字段可以取几种不同的值，一般有GET、POST、HEAD、PUT和DELETE。以下是对各个方法的简要说明：")]),t._v(" "),a("ul",[a("li",[a("strong",[t._v("GET:")]),t._v(" 用于请求指定资源。GET请求的参数会附在URL后面，可在浏览器地址栏中看到。")]),t._v(" "),a("li",[a("strong",[t._v("POST:")]),t._v(" 用于向服务器提交数据，常用于表单提交。与GET相比，POST请求的参数不会暴露在URL中，而是放在请求的实体主体中。")]),t._v(" "),a("li",[a("strong",[t._v("HEAD:")]),t._v(" 与GET方法类似，但在返回的响应中，不包含实体主体，仅包含于GET相同的首部信息。常用于检查资源的元数据，如检查文件是否已被修改。")]),t._v(" "),a("li",[a("strong",[t._v("PUT:")]),t._v(" 用于向服务器上传新的实体数据（如文件），或者修改已有的资源。看回放提供更新后的整个资源，而不仅仅是变更的部分。")]),t._v(" "),a("li",[a("strong",[t._v("DELETE:")]),t._v(" 请求服务器删除指定的资源。")])]),t._v(" "),a("h4",{attrs:{id:"http响应报文"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#http响应报文"}},[t._v("#")]),t._v(" HTTP响应报文")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://gitee.com/yelishu/note/raw/master/noteImgs_2/202311201115662.png",alt:"image.png"}})]),t._v(" "),a("p",[t._v("HTTP响应报文的格式如下：")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("HTTP/1.1 200 OK\nContent-Type: text/html; charset=UTF-8\nContent-Length: 1234\nDate: Fri, 19 Nov 2023 12:00:00 GMT\nServer: Apache/2.4.41 (Unix)\n\n<!DOCTYPE html>\n<html>\n<head>\n    <title>Example Page</title>\n</head>\n<body>\n    \x3c!-- 页面内容 --\x3e\n</body>\n</html>\n")])])]),a("ul",[a("li",[t._v("HTTP响应报文的第一行叫状态行，后面是首部行，最后是实体主体。")]),t._v(" "),a("li",[t._v("状态行包含了三个字段：协议版本字段、状态码和相应的状态信息。")]),t._v(" "),a("li",[t._v("实体部分是报文的主要部分，它包含了所请求的对象。")])]),t._v(" "),a("p",[t._v("常见状态码：")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",[t._v("状态码")]),t._v(" "),a("th",[t._v("描述")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[t._v("200")]),t._v(" "),a("td",[t._v("请求成功")])]),t._v(" "),a("tr",[a("td",[t._v("202")]),t._v(" "),a("td",[t._v("服务器已接收请求，但尚未进行处理")])]),t._v(" "),a("tr",[a("td",[t._v("301")]),t._v(" "),a("td",[t._v("永久移动，请求的资源已被分配新的 URI")])]),t._v(" "),a("tr",[a("td",[t._v("302")]),t._v(" "),a("td",[t._v("临时移动，请求的资源暂时位于不同的 URI")])]),t._v(" "),a("tr",[a("td",[t._v("304")]),t._v(" "),a("td",[t._v("请求的资源未修改")])]),t._v(" "),a("tr",[a("td",[t._v("400")]),t._v(" "),a("td",[t._v("客户端请求存在语法错误")])]),t._v(" "),a("tr",[a("td",[t._v("404")]),t._v(" "),a("td",[t._v("请求的资源不存在")])]),t._v(" "),a("tr",[a("td",[t._v("500")]),t._v(" "),a("td",[t._v("服务器内部发生错误")])])])]),t._v(" "),a("p",[t._v("一般 1XX 代表服务器接受到信息，但需要客户端继续操作或等待进一步的通知；2XX 代表成功；3XX 代表重定向；4XX 代表请求包含语法错误或无法完成请求；5XX 代表服务器错误。")]),t._v(" "),a("h4",{attrs:{id:"首部行"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#首部行"}},[t._v("#")]),t._v(" 首部行")]),t._v(" "),a("p",[t._v("首部可以分为四种首部，请求首部、响应首部、通用首部和实体首部。通用首部和实体首部在请求报文和响应报文中都可以设置，区别在于请求首部和响应首部。")]),t._v(" "),a("ul",[a("li",[t._v("常见的请求首部有 Accept-可接受媒体资源的类型、Accept-Charset-可接收的字符集、Host请求的主机名。")]),t._v(" "),a("li",[t._v("常见的响应首部有 ETag-资源的匹配信息、Location-客户端重定向的URI。")]),t._v(" "),a("li",[t._v("常见的通用首部有 Cache-Control-控制缓存策略、Connection-管理持久连接。")]),t._v(" "),a("li",[t._v("常见的实体首部有 Content-Length-实体主体的大小、Expires-实体主体的过期时间、Last-Modified-资源的最后修改时间。")])]),t._v(" "),a("p",[a("span",{staticStyle:{color:"#ff0000"}},[t._v("与缓存相关的规则信息，均包含在首部（Header）中")])]),t._v(" "),a("h2",{attrs:{id:"缓存"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#缓存"}},[t._v("#")]),t._v(" 缓存")]),t._v(" "),a("ul",[a("li",[t._v("memory cache是内存中的缓存，包含已下载的资源，如样式、脚本、图片。缓存在内存，访问速度快，但随着进程释放而清空，关闭Tab后释放。")]),t._v(" "),a("li",[t._v("disk cache存在磁盘上，读取慢，但资源全存。覆盖面最大，根据HTTP Header判断缓存需求，大文件和高频文件优先存磁盘。")])]),t._v(" "),a("h2",{attrs:{id:"缓存规则解析"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#缓存规则解析"}},[t._v("#")]),t._v(" 缓存规则解析")]),t._v(" "),a("p",[t._v("简单的说，可以理解为浏览器存在一个缓存数据库，用来缓存信息。在客户端第一次请求数据时，此时缓存数据库中没有对应的缓存数据，需要请求服务器，服务器返回后，将数据存储至缓存数据库中。")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://gitee.com/yelishu/note/raw/master/noteImgs_2/202311201146211.png",alt:"image.png"}})]),t._v(" "),a("p",[t._v("HTTP缓存有多种规则，根据是否需要重新向服务器发起请求来分类，分为"),a("span",{staticStyle:{color:"#ff0000"}},[t._v("强制缓存和协商缓存")])]),t._v(" "),a("p",[a("strong",[t._v("强制缓存流程")]),t._v(" "),a("img",{attrs:{src:"https://gitee.com/yelishu/note/raw/master/noteImgs_2/202311201638819.png",alt:"image.png"}})]),t._v(" "),a("p",[a("strong",[t._v("协商缓存流程")]),t._v(" "),a("img",{attrs:{src:"https://gitee.com/yelishu/note/raw/master/noteImgs_2/202311201658193.png",alt:"image.png"}})]),t._v(" "),a("p",[t._v("可以看到两类缓存规则的不同，"),a("span",{staticStyle:{color:"#ff0000"}},[t._v("强制缓存")]),t._v("如果生效，不需要再和服务器发生交互，而"),a("span",{staticStyle:{color:"#ff0000"}},[t._v("协商缓存")]),t._v("不管是否生效，都需要与服务器发生交互。两类缓存可以同时存在，"),a("span",{staticStyle:{color:"#ff0000"}},[t._v("强制缓存")]),t._v("优先级高于"),a("span",{staticStyle:{color:"#ff0000"}},[t._v("协商缓存")]),t._v("，也就是说，当执行"),a("span",{staticStyle:{color:"#ff0000"}},[t._v("强制缓存")]),t._v("的规则时，如果缓存生效，直接使用缓存，不再执行"),a("span",{staticStyle:{color:"#ff0000"}},[t._v("协商缓存")]),t._v("规则。")]),t._v(" "),a("h2",{attrs:{id:"强制缓存"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#强制缓存"}},[t._v("#")]),t._v(" 强制缓存")]),t._v(" "),a("p",[t._v("上面提到，强制缓存，在缓存数据未失效情况下，可以直接使用缓存数据，那浏览器是"),a("span",{staticStyle:{color:"#ff0000"}},[t._v("如何判断缓存数据是否失效呢？")]),t._v("\n在没有缓存数据的时候，浏览器向服务器请求数据时，服务器会将数据和缓存规则一并返回，"),a("span",{staticStyle:{color:"#ff0000"}},[t._v("缓存规则信息包含在响应Header中。")])]),t._v(" "),a("p",[t._v("对于强制缓存来说，响应Header中会有两个字段来表明失效规则(Expires/Cache-Control)，例如如下对于强制缓存生效时，网络请求的情况。\n"),a("img",{attrs:{src:"https://gitee.com/yelishu/note/raw/master/noteImgs_2/202311201735500.png",alt:"image.png"}})]),t._v(" "),a("p",[a("mark",{staticStyle:{background:"#FF5582A6"}},[t._v("Expires")]),t._v("\nExpires的值是服务端返回的到期时间，即下一次请求时，请求时间小于服务器返回的到期时间，直接使用缓存数据。不过Expires是HTTP1.0的东西，现在浏览器均默认使用HTTP1.1的版本，所以其作用基本忽略。另一个问题是，到期时间是由服务器端生成的，但是客户端时间可能跟服务器端有误差，这就会导致缓存命中的误差。所以"),a("span",{staticStyle:{color:"#ff0000"}},[t._v("HTTP1.1")]),t._v("的版本，使用"),a("span",{staticStyle:{color:"#ff0000"}},[t._v("Cache-Control")]),t._v("代替。")]),t._v(" "),a("p",[a("mark",{staticStyle:{background:"#ABF7F7A6"}},[t._v("Cache-Control")]),t._v("\nCache-Control 是最重要的规则。常见的取值有private、public、no-cache、max-age、no-store，默认为private。")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",[t._v("字段名")]),t._v(" "),a("th",[t._v("解释")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[t._v("public")]),t._v(" "),a("td",[t._v("客户端和代理服务器都可以缓存")])]),t._v(" "),a("tr",[a("td",[t._v("private")]),t._v(" "),a("td",[t._v("客户端可以缓存")])]),t._v(" "),a("tr",[a("td",[t._v("no-cache")]),t._v(" "),a("td",[t._v("需要使用"),a("span",{staticStyle:{color:"#ff0000"}},[t._v("协商缓存")]),t._v("来验证缓存数据")])]),t._v(" "),a("tr",[a("td",[t._v("no-store")]),t._v(" "),a("td",[t._v("所有内容都不会缓存，"),a("span",{staticStyle:{color:"#ff0000"}},[t._v("强制缓存、协商缓存")]),t._v("都不会触发")])]),t._v(" "),a("tr",[a("td",[t._v("no-transform")]),t._v(" "),a("td",[t._v("不允许代理/缓存服务器转换文件格式")])]),t._v(" "),a("tr",[a("td",[t._v("max-age=xxx")]),t._v(" "),a("td",[t._v("缓存到期时间（秒）")])]),t._v(" "),a("tr",[a("td",[t._v("s-maxage=xxx")]),t._v(" "),a("td",[t._v("代理服务器专用")])]),t._v(" "),a("tr",[a("td",[t._v("max-stale=xxx")]),t._v(" "),a("td",[t._v("指示客户机可以使用超出max-age时间的响应")])]),t._v(" "),a("tr",[a("td",[t._v("must-revalidate")]),t._v(" "),a("td",[t._v("设置了max-age的资源过期后必须到源服务器验证资源是否还可用")])]),t._v(" "),a("tr",[a("td",[t._v("proxy-revalidate")]),t._v(" "),a("td",[t._v("（缓存服务器用）设置了max-age的资源过期后必须到源服务器验证资源是否还可用")])])])]),t._v(" "),a("p",[a("mark",{staticStyle:{background:"#FFB8EBA6"}},[t._v("举个栗子")]),t._v(" "),a("img",{attrs:{src:"https://gitee.com/yelishu/note/raw/master/noteImgs_2/202311202029898.png",alt:"image.png"}})]),t._v(" "),a("p",[t._v("上图中，Cache-Control仅指定了max-age，所以默认为private，缓存时间为31536000秒（365天），即在365天内再次请求这条数据，都会直接获取缓存数据库中的数据，直接使用。")]),t._v(" "),a("h2",{attrs:{id:"协商缓存"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#协商缓存"}},[t._v("#")]),t._v(" 协商缓存")]),t._v(" "),a("p",[a("span",{staticStyle:{color:"#ff0000"}},[t._v("协商缓存")]),t._v("，顾名思义，是一在客户端（通常是浏览器）和服务器之间进行协商的缓存机制。它通过在HTTP请求和响应中使用一些头部信息来确定是否需要重新获取资源或者直接使用缓存的副本。")]),t._v(" "),a("ul",[a("li",[a("strong",[t._v("浏览器第一次请求数据:")]),t._v(" 当浏览器首次请求数据时，服务器会将资源和缓存标识（如ETag或Last-Modified）与实际数据一起返回给客户端。")]),t._v(" "),a("li",[a("strong",[t._v("客户端备份缓存标识:")]),t._v(" 客户端会将这个缓存标识备份至缓存数据库中，同时缓存实际的数据。")]),t._v(" "),a("li",[a("strong",[t._v("再次请求数据:")]),t._v(" 当客户端再次请求相同资源时，它会在请求头中包含之前备份的缓存标识，以便告知服务器它拥有的缓存信息。")]),t._v(" "),a("li",[a("strong",[t._v("服务器判断缓存标识:")]),t._v(" 服务器收到请求后，会根据请求头中的缓存标识与当前资源的状态进行比较。\n"),a("ul",[a("li",[t._v("如果资源没有变化，服务器可能返回HTTP 304状态码，通知客户端可以使用缓存的数据，从而避免了重新传输整个资源。")]),t._v(" "),a("li",[t._v("如果资源发生了变化，服务器会返回新的资源和更新后的缓存标识，客户端会更新缓存并用新的标识备份。")])])])]),t._v(" "),a("p",[a("mark",{staticStyle:{background:"#FF5582A6"}},[t._v("第一次访问")]),t._v(" "),a("img",{attrs:{src:"https://gitee.com/yelishu/note/raw/master/noteImgs_2/202311202130469.png",alt:"image.png"}})]),t._v(" "),a("p",[a("mark",{staticStyle:{background:"#FFB8EBA6"}},[t._v("再次访问")]),t._v(" "),a("img",{attrs:{src:"https://gitee.com/yelishu/note/raw/master/noteImgs_2/202311202131143.png",alt:"image.png"}})]),t._v(" "),a("p",[t._v("通过两图的对比，可以很清楚的发现，在"),a("span",{staticStyle:{color:"#ff0000"}},[t._v("协商缓存")]),t._v("生效时，状态码为304，并且报文大小和请求时间大大减少。")]),t._v(" "),a("p",[t._v("对于"),a("span",{staticStyle:{color:"#ff0000"}},[t._v("协商缓存")]),t._v("来说，缓存标识在请求Header和响应Header间进行传递时，共分为两种标识传递，下面分开介绍。")]),t._v(" "),a("p",[a("mark",{staticStyle:{background:"#FF5582A6"}},[t._v("Last-Modified/If-Modified-Since")])]),t._v(" "),a("p",[a("strong",[t._v("Last-Modified")]),t._v("\n服务器在响应请求时，告诉浏览器资源的最后修改时间。\n"),a("img",{attrs:{src:"https://gitee.com/yelishu/note/raw/master/noteImgs_2/202311202209410.png",alt:"image.png"}})]),t._v(" "),a("p",[a("strong",[t._v("If-Modified-Since")])]),t._v(" "),a("ul",[a("li",[t._v("再次请求服务器时，通过此字段通知服务器上次请求时，服务器返回的资源最后修改时间。")]),t._v(" "),a("li",[t._v("服务器收到请求后发现有头If-Modified-Since则与被请求资源的最后修改时间进行对比。")]),t._v(" "),a("li",[t._v("若资源的最后修改时间大于If-Modified-Since，则说明资源被改动过，则响应整片资源内容，返回状态码200。")]),t._v(" "),a("li",[t._v("若资源的最后修改时间小于等于If-Modified-Since，说明资源无新修改，则响应HTTP 304，告诉浏览器继续使用所保存的cache、")])]),t._v(" "),a("p",[a("img",{attrs:{src:"https://gitee.com/yelishu/note/raw/master/noteImgs_2/202311202214555.png",alt:"image.png"}})]),t._v(" "),a("p",[a("mark",{staticStyle:{background:"#FF5582A6"}},[t._v("ETag/If-None-Match(优先级高于Last-Modified/If-Modified-Since)")])]),t._v(" "),a("p",[a("strong",[t._v("Etag")])]),t._v(" "),a("blockquote",[a("p",[a("code",[t._v("Etag")]),t._v("：即用来进行对比缓存，Etag是服务端资源的一个标识码\n服务器响应请求时，告诉浏览器当前资源的唯一标识码（生成规则由服务器决定）")])]),t._v(" "),a("p",[a("img",{attrs:{src:"https://gitee.com/yelishu/note/raw/master/noteImgs_2/202311202216647.png",alt:"image.png"}})]),t._v(" "),a("p",[a("strong",[t._v("If-None-Match")])]),t._v(" "),a("ul",[a("li",[t._v("再次请求服务器时，通过此字段告知服务器客户端缓存数据的唯一标识")]),t._v(" "),a("li",[t._v("服务器收到请求后发现有头If-None-Math则与被请求资源的唯一标识进行对比。")]),t._v(" "),a("li",[t._v("不同，说明资源被修改过，则响应整片资源内容，返回状态码200")]),t._v(" "),a("li",[t._v("相同，说明资源无新修改，则响应HTTP 304，告知浏览器继续使用所保存的cache")])]),t._v(" "),a("p",[a("img",{attrs:{src:"https://gitee.com/yelishu/note/raw/master/noteImgs_2/202311211712081.png",alt:"image.png"}})]),t._v(" "),a("h2",{attrs:{id:"总结"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#总结"}},[t._v("#")]),t._v(" 总结")]),t._v(" "),a("ul",[a("li",[a("strong",[t._v("对于强制缓存，服务器通知浏览器一个缓存时间，在缓存时间内，下次请求，直接用缓存，不在时间内，执行比较缓存策略。")])]),t._v(" "),a("li",[a("strong",[t._v("对于协商缓存，将缓存信息中的Etag和Last-Modified通过请求发送给服务器，由服务器校验，返回304状态码时，浏览器直接使用缓存。")])])]),t._v(" "),a("p",[a("mark",{staticStyle:{background:"#FF5582A6"}},[t._v("浏览器第一次请求时")]),t._v(" "),a("img",{attrs:{src:"https://gitee.com/yelishu/note/raw/master/noteImgs_2/202311211730149.png",alt:"image.png"}})]),t._v(" "),a("p",[a("mark",{staticStyle:{background:"#ABF7F7A6"}},[t._v("浏览器再次请求时")]),t._v(" "),a("img",{attrs:{src:"https://gitee.com/yelishu/note/raw/master/noteImgs_2/202311211731496.png",alt:"image.png"}})])])}),[],!1,null,null,null);a.default=e.exports}}]);