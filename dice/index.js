function change(){
var ran=Math.random();
var chec=Math.floor(ran*6);
var arr=["images\\dice1.png","images\\dice2.png","images\\dice3.png","images\\dice4.png","images\\dice5.png","images\\dice6.png"];
var ran2=Math.random();
var chec2=Math.floor(ran2*6);
document.querySelector(".img1").setAttribute("src",arr[chec]);
document.querySelector(".img2").setAttribute("src",arr[chec2]);
if(chec>chec2){
    document.querySelector("h1").innerHTML="Player 1 wins.";
}
else if(chec==chec2){
    document.querySelector("h1").innerHTML="Draw";
}
else{
    document.querySelector("h1").innerHTML="Player 2 wins.";
}
}    