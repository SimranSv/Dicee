var num = Math.floor(Math.random() * 6) + 1;
var ranImage="images/dice"+num+".png";
var val=document.querySelectorAll("img")[0];
val.setAttribute("src",ranImage);

var num1 = Math.floor(Math.random() * 6) + 1;
var ranImage1="images/dice"+num1+".png";
var val1=document.querySelectorAll("img")[1];
val1.setAttribute("src",ranImage1);
if(num>num1){
    document.querySelector("h1").innerHTML="Player1 Wins\n";
}else if(num<num1){
    document.querySelector("h1").innerHTML="Player2 Wins\n";
}else 
{
    document.querySelector("h1").innerHTML="Refresh Me!\n";
}
