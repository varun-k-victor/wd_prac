function text(){
	document.getElementById("paragraph").innerHTML="hello";
}

function add(){
	var a=prompt("enter a","");
	var b=prompt("enter b","");
	var c=parseInt(a)+parseInt(b);
	document.getElementById("paragraph").innerHTML=c;
}

function conditional(){
	var a=prompt("enter value");
	if(a>50){
		document.getElementById("paragraph").innerHTML="greater than 50";
	}
	else{
		document.getElementById("paragraph").innerHTML="lesser than 50";
	}
}

function loop(){
	for(var a=0;a<5;a++){
		document.write("hello<br>");
	}
}

function arr(){
	var a=new Array(1,2,3,4,5);
	document.getElementById("paragraph").innerHTML=a[3];
}

function validation(){
	var name=document.getElementById("name").value;
	var password=document.getElementById("password").value;
	if(name==""){
		document.getElementById("nametext").innerHTML="**please enter name";
		//alert("fill name");
		return false;
	}
	if(password==""){
		document.getElementById("passwordtext").innerHTML="**please enter password";
		//alert("fill password");
		return false;
	}
}