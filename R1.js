function parseJwt(token){
	var base64Url=token.split('.')[1];
	var base64 = decodeURIComponent(atob(base64Url).split('').map((c)=>{
		return '%'+('00'+c.charCodeAt(0).toString(16)).slice(-2);
	}).join(''));
	return JSON.parse(base64);
};

const decoded=parseJwt("eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c");

let jsObject="";
for(let key in decoded){
	jsObject+=(`${key} : ${decoded[key]}`)+"<br>"
};
document.getElementById("demo").innerHTML=jsObject;

var iat=new Date(decoded.iat * 1000);
document.getElementById("demo1").innerHTML=iat;
var date = new Date();

document.getElementById("demo2").innerHTML=date;

if(iat>date){
	document.getElementById("demo4").innerHTML="True";
}else{
	document.getElementById("demo4").innerHTML="False"
}

	