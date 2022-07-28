const express=require('express');
const bodyParser=require('body-parser');


const app=express();

app.use(bodyParser.urlencoded({extended:true}));

app.post('/form',function(req,res){
	console.log(req.body);
	console.log(req.body.fname);
	console.log(req.body.lname);
	res.redirect('/');
});

app.listen(8080);