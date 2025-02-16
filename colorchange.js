const randomColor=function(){
    const hex='0123456789ABCDEF'
    let color='#';
    for(let i=0;i<6;i++){
        color+=hex[Math.floor(Math.random()*16)]
    }
    return color;
};
let stoped;

const startChange=function(){
    if(!stoped){
        stoped= setInterval(changeBg,50)
    }
function changeBg(){   
    document.body.style.backgroundColor=randomColor();

}
}
const stopChange=function(){
    clearInterval(stoped)
    stoped=null;
}
document.querySelector("#start").addEventListener('click',startChange);
document.querySelector("#stop").addEventListener('click',stopChange);



const customCursor = document.getElementById('custom-cursor');

let mouseX = 0, mouseY = 0;
let cursorX = 0, cursorY = 0;

document.addEventListener('mousemove', (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;
});

function moveCursor() {
    const dx = mouseX - cursorX;
    const dy = mouseY - cursorY;

    cursorX += dx * 0.3; 
    cursorY += dy * 0.3;

    customCursor.style.left = `${cursorX}px`;
    customCursor.style.top = `${cursorY}px`;

    requestAnimationFrame(moveCursor);
}

moveCursor();


