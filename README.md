# tweet-client
《了不起的Node.js》chap-7 HTTP example: a Twitter Client

1. initial commit

本章的服务器端为serverTest.js

使用`http`模块的`request`方法创建一个新的http Client Request对象。

服务器会返回不同的数据块`chunk`。

设置响应对象编码为UTF-8，因为接收的都是文字。如果接收图片，就不能用UTF-8了（那用什么？`'image/png'`?`base64`?）。

2. querystring

client.js: `qs.stringfy()`将对象转化为url编码过的数据。

3. twitter api

翻墙了仍然连接超时?

4. superagent

npm

通过superagent可以将发送请求和处理请求的流程自动处理：发送请求-获取的JSON-自动解析；
GET请求的查询字符串也会自动编码作为URL的一部分。

superagent也可以处理POST, PUT, HEAD, DELETE等请求。



