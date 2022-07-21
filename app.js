const ourText=document.getElementById("text");
var stringText=ourText.textContent;
const splitText=stringText.split("");
ourText.textContent=" ";
for(let i=0;i<splitText.length;i++){
    ourText.innerHTML +="<span>"+splitText[i]+"</span>";
}
let char=0;
let timer=setInterval(makeSpan,50);

function makeSpan(){
    const span=ourText.querySelectorAll("span")[char];
    span.classList.add("fade");
    char++;
    if(char===splitText.length){
        complete();
        return
    }
}
function complete(){
    clearInterval(timer);
    timer=null
}