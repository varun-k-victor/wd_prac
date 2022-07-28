const mongoose=require('mongoose');

mongoose.connect('mongodb://127.0.0.1:27017/newdb').then(function(){
	console.log('connected');
}).catch(function(err){
	console.log(err);
})

const infoSchema=new mongoose.Schema({
	name:String,
	age:Number
});

const infoColl=new mongoose.model("infoColl",infoSchema);

async function insert(){
	try
	{
		const result=await infoColl.insertMany([{name:"anon1",age:7878},{name:"anon2",age:7474}]);
		// console.log(result);
	}
	catch(err)
	{
		console.log(err);
	}
}

// insert();

async function read(){
	try
	{
		const result=await infoColl.find();
		console.log(result);
	}
	catch(err)
	{
		console.log(err);
	}
}

read();

async function del(){
	try
	{
		const result=await infoColl.deleteOne({name:'anon1'});
		// console.log(result);
	}
	catch(err)
	{
		console.log(err);
	}
}

// del()

async function update(){
	try
	{
		const result=await infoColl.updateOne({name:'anon2'},{name:'anon3'});
		// console.log(result);
	}
	catch(err)
	{
		console.log(err);
	}
}

// update();