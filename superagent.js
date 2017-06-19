var request = require('superagent');

request.get('http://twitter.com/search.json')
// send和set均为渐进式API，可以链式调用，通过end()结束
	.send({ q: 'justin bieber '})
	.set('Date', new Date) //设置请求头信息
	.end(function(res){
		console.log(res.body);
	});

request.post('http://example.com/')
	.send({ json: 'encoded' })
	.end();