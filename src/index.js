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
        myCanvas.width = 1149;
        myCanvas.height = 860;
        ctx.drawImage(background,0,0,background.width,background.height,0,0,1149,860);
        
        const letters1 = new Section (ctx, 150,50,500,300);
        const letters2 = new Section (ctx, 150,500,500,300);
        // const queryArea = new Section (ctx, 150,350,500,300);
        

        const lettersArr = [];
        const alphabet = 'abcde';
        // const alphabet = 'abcdefghijklmnopqrstuvwxyz';
        for (let i = 0; i < alphabet.length; i ++){            
            const letter = new Letter (ctx, 100 + i*120, 100, lettersArr, alphabet);
            console.log(lettersArr);
        }

    } 

})
    


    function animate() { 
        window.requestAnimationFrame(animate)
        console.log('am I animating')
        c.clearRect(0,0,myCanvas.width, myCanvas.height)
    }
