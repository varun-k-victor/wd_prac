const http=require('http');
const url=require('url');


const server=http.createServer(function(req,res){
	if(req.url=="/")
	{
		res.writeHead(200,{'Content-Type':'text/plain'});
		res.end("home");
	}
	else if(req.url=="/about")
	{
		res.writeHead(200,{'Content-Type':'text/plain'});
		res.end("about");
	}
	else if(req.url=="/contact")
	{
		res.writeHead(200,{'Content-Type':'text/plain'});
		res.end("contact");
	}
	else if(req.ur=="/content")
	{
		res.writeHead(200,{'Content-Type':'text/plain'});
		res.end("content");
	}
	else
	{
		res.writeHead(404);
		res.end("404");
	}
});

server.listen(8000,"127.0.0.1");