import './Cth.css';



var a=prompt("enter first number","");
var b=prompt("enter second number","");
var greatest;
if(a>b){
	greatest=a;
}
else{
	greatest=b;
}


function Cth(){
	return(<>
			<h1 className="result">{greatest} is the bigger number</h1>
			</>
		);
}

export default Cth;