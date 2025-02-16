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
    stoped= setInterval(changeBg,50)
function changeBg(){   document.body.style.backgroundColor=randomColor();

}
}
const stopChange=function(){
    clearInterval(stoped)
}
document.querySelector("#start").addEventListener('click',startChange);
document.querySelector("#stop").addEventListener('click',stopChange);