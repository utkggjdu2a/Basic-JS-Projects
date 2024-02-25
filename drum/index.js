var add=["sounds\\tom-1.mp3","sounds\\tom-2.mp3","sounds\\tom-3.mp3","sounds\\tom-4.mp3","sounds\\kick-bass.mp3","sounds\\crash.mp3","sounds\\snare.mp3"];
for (var i=0;i<document.querySelectorAll("button").length;i++){
    let index=i;
    document.querySelectorAll("button")[i].addEventListener("click",function(){
        var audio=new Audio(add[index]);
        audio.play();
        var currentKey=this.innerHTML;
        makeBlur(currentKey);
});}
document.addEventListener("keydown",function(event){
    var name =event.key;
    switch (name){
        case "w":
            var w=new Audio("sounds\\tom-1.mp3");
            w.play()
            makeBlur(name);
            break;
        case "a":
            var a=new Audio("sounds\\tom-2.mp3");
            a.play();
            makeBlur(name);
            break;
        case "s":
            var s=new Audio("sounds\\tom-3.mp3");
            s.play();
            makeBlur(name);
            break;
        case "d":
            var d=new Audio("sounds\\tom-4.mp3");
            d.play();
            makeBlur(name);
            break;
        case "j":
            var j=new Audio("sounds\\kick-bass.mp3");
            j.play();
            makeBlur(name);
            break;
        case "k":
            var k=new Audio("sounds\\crash.mp3");
            k.play();
            makeBlur(name);
            break;
        case "l":
            var l=new Audio("sounds\\snare.mp3");
            l.play();
            makeBlur(name);
            break;
        default:
            console.log("Fuck you");
    }
})
function makeBlur(key){
    var clickedButton=document.querySelector("."+key);
    clickedButton.classList.add("pressed");
    setTimeout(function() {
        clickedButton.classList.remove("pressed");
      }, 100);

}