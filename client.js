var qs = require('querystring');

function send(theName){
	require('http').request({
		host: '127.0.0.1',
		port: 3000,
		url: '/',
		method: 'POST',
	}, function(res){
		var body = '';
		res.setEncoding('utf-8');
		res.on('data', function(chunk){
			body += chunk;
		});
		res.on('end', function(){
			console.log('\n  \033[90m  request completed!\033[39m');
			process.stdout.write('\n  your name: '); //请求完毕后，打印出提示语，再次提示和等待用户发送数据
		});
	}).end(qs.stringify({name: theName})); //在end处发送数据
}

process.stdout.write('\n  your name: ');
process.stdin.resume();
process.stdin.setEncoding('utf-8');

//获取用户的输入，并去除回车，作为要发送的内容，调用send函数发送HTTP request请求
process.stdin.on('data', function(name){
	send(name.replace('\n', '')); 
});