var i=0;
while(i<document.querySelectorAll(".but").length)
{
  document.querySelectorAll(".but")[i].addEventListener("click",function (){
    makeSound(this.innerHTML);
  });
  
  i++;
}
document.addEventListener("keypress",function (event){
 makeSound(event.key);
});


function makeSound(key){

 switch(key){
   case "m":var snd = new Audio("./sounds/snare.mp3");
             snd.play();
             break;
   case "a":var snd = new Audio("./sounds/kick-bass.mp3");
             snd.play();
             break;
   case "n":var snd = new Audio("./sounds/crash.mp3");
             snd.play();
             break;
   case "i":var snd = new Audio("./sounds/tom-1.mp3");
             snd.play();
             break;
   case "s":var snd = new Audio("./sounds/tom-2.mp3");
             snd.play();
             break;
   case "h":var snd = new Audio("./sounds/tom-3.mp3");
             snd.play();
             break;
   case "e":var snd = new Audio("./sounds/tom-4.mp3");
             snd.play();
             break;
  default:console.log(charOnClick);
 }

}


