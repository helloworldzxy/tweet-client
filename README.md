# tweet-client
《了不起的Node.js》chap-7 HTTP example: a Twitter Client

1. initial commit

使用`http`模块的`request`方法创建一个新的http Client Request对象。

服务器会返回不同的数据块`chunk`。

设置响应对象编码为UTF-8，因为接收的都是文字。如果接收图片，就不能用UTF-8了（那用什么？）。
