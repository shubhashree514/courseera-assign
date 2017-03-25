
(function () {

var names = ["Shubha", "shree","Sandeshsharma", "Sheshadri", "Rathna", "Divya", "Naveen", "Jayalakshmi", "Jayanth", "pushpa" , "Satheesh"];

for(var i=0;i < names.length;i++){
if(names[i].charAt(0) == "J" || names[i].charAt(0) == "j"){
	console.log("Hello "+names[i]);
}else{
	console.log("Good Bye "+names[i]);
}
}

})();