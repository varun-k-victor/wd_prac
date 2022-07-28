const http=require('http');
const url=require('url');
const fs=require('fs');

const port=8000;
const localhoast='127.0.0.1';

const server=http.createServer(function(req,res){
	if(req.url=="/")
	{
		fs.readFile('home.html',null,function(error,data){
			if(error)
			{
				res.writeHead(404);
				res.write('404');
			}
			else
			{
				res.writeHead(200,{'Content-Type':'text/html'});
				res.write(data);
			}
			res.end();
		});
	}
	else if(req.url=="/about")
	{
		fs.readFile('about.html',null,function(error,data){
			if(error)
			{
				res.writeHead(404);
				res.write('404');
			}
			else
			{
				res.writeHead(200,{'Content-Type':'text/html'});
				res.write(data);
			}
			res.end();
		});
	}
	else if(req.url=="/contact")
	{
		fs.readFile('contact.html',null,function(error,data){
			if(error)
			{
				res.writeHead(404);
				res.write('404');
			}
			else
			{
				res.writeHead(200,{'Content-Type':'text/html'});
				res.write(data);
			}
			res.end();
		});
	}
	else
	{
		res.writeHead(404);
		res.write('404');
		res.end();
	}
});

server.listen(port,localhoast);