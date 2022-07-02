function button(number){
	document.getElementById("dis").value+=number;
}

function eq(){
	var x=document.getElementById("dis").value;
	var y=eval(x);
	document.getElementById("dis").value=y;
}

function cl(){
	document.getElementById("dis").value="";
}