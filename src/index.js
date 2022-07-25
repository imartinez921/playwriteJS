// import Example from './scripts/example';



// ctx.fillStyle = '#800080'
// ctx.fillRect(0,0,900,500);

document.addEventListener('DOMContentLoaded', () => {
    console.log("hello world")

    const myCanvas = document.getElementById('mycanvas');
    myCanvas.width = 100;
    myCanvas.height = 571006;
    
    const ctx = myCanvas.getContext('2d')

    const background = new Image(); // 1149x860
    background.src = "../assets/images/top-fridge-door.png";
    background.onload = function(){     // Make sure the image is loaded first otherwise nothing will draw.
        myCanvas.width = 1024;
        myCanvas.height = 700;
        ctx.drawImage(background,0,0,background.width,background.height,0,0,1024,700);
    }


})