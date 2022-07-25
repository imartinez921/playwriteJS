import Section from './scripts/section';
import Letter from './scripts/letter';  



document.addEventListener('DOMContentLoaded', () => {

    console.log("hello world")

    const myCanvas = document.getElementById('mycanvas');
    myCanvas.width = 1000;
    myCanvas.height = 1000;
    
    const ctx = myCanvas.getContext('2d')

    const background = new Image(); // 1149x860
    background.src = "../assets/images/top-fridge-door.png";
    background.onload = function(){     // Make sure the image is loaded first otherwise nothing will draw.
        myCanvas.width = 1024;
        myCanvas.height = 700;
        ctx.drawImage(background,0,0,background.width,background.height,0,0,1024,700);
        console.log('I am the image')
        
        const letters1 = new Section (ctx, 100,0,300,500);
        const letters2 = new Section (ctx, 0,0,300,500);
    } 

})
    


    function animate() { 
        window.requestAnimationFrame(animate)
        console.log('am I animating')
        c.clearRect(0,0,myCanvas.width, myCanvas.height)
    }
