window.addEventListener("load",() => {
const sounds = document.querySelectorAll(".sound");
const pads = document.querySelectorAll(".pads div");
const visual = document.querySelector('.visual');
const colors = [
    "#60d914",
    "#569dc7",
    "#c738a8",
    "#5d4edd",
    "#d0e941",
    "#df3434"
];


//Playing sounds

pads.forEach((pad, index) => {
    pad.addEventListener('click',function(){
        sounds[index].currentTime = 0;
        sounds[index].play(); 
        createCircle(index);

        });
    });

    //To make a circle animations

    const createCircle = (index) =>
    {
        const circle = document.createElement("div");
        visual.appendChild(circle);
        circle.style.backgroundColor = colors[index];
        circle.style.animation = 'jump 1s';
        circle.addEventListener("animationend",function(){
            visual.removeChild(this);
        });
    };
});