const button = document.querySelector('.btn');
const lampadina = document.getElementById('white');
button.addEventListener('click', 
                         
 function onOff () {
    if (lampadina.src.includes("white_lamp.png")) {
        lampadina.src = "img/yellow_lamp.png"; }
    else {
        lampadina.src = "img/white_lamp.png"};
}
)



