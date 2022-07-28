const express=require('express');
const bodyParser=require('body-parser');

const app=express();

const port=3000;

app.use(bodyParser.urlencoded({extended:true}))

app.get('/',function(req,res){
	res.sendFile(__dirname+'/home.html');
});

app.get('/about',function(req,res){
	res.sendFile(__dirname+'/about.html');
});

app.get('/contact',function(req,res){
	res.sendFile(__dirname+'/contact.html');
});

app.get('/form',function(req,res){
	res.sendFile(__dirname+'/form.html');
});

app.post('/form',function(req,res){
	var name=req.body.name;
	res.send(name);
});

app.listen(port);