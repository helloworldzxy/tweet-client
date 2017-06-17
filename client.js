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
			process.stdout.write('\n  your name: ');
		});
	}).end(qs.stringify({name: theName}));
}

process.stdout.write('\n  your name: ');
process.stdin.resume();
process.stdin.setEncoding('utf-8');
process.stdin.on('data', function(name){
	send(name.replace('\n', ''));
});