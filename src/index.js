import Section from './scripts/section';
import Letter from './scripts/letter';  


const myLetters = [];
let selectedLetter = null;


document.addEventListener('DOMContentLoaded', () => {

    console.log("hello world")

    const myCanvas = document.getElementById('mycanvas');
    myCanvas.width = 1000;
    myCanvas.height = 1000;
    
    const ctx = myCanvas.getContext('2d')

    // animate();

    const background = new Image(); 
    background.src = "/Users/EtaCarinaeDua/Dropbox/aabootcamp/theCoolerDictionary_JS/assets/images/top-fridge-door.png"; // 1149x860
    background.onload = function(){  // Make sure the image is loaded first otherwise nothing will draw.
        myCanvas.width = 1149;
        myCanvas.height = 860;
        ctx.drawImage(background,0,0,background.width,background.height,0,0,1149,860);
        spawn(ctx);
        // addCanvasEventListeners();
    }
})

async function spawn(ctx) {
    const letters1 = new Section (ctx, 200,100,700,150); // rendered for testing
    const letters2 = new Section (ctx, 200,550,700,150); // rendered for testing
    const queryArea = new Section (ctx, 200,350,700,150);

    // Spawn original letters
    const lettersArr = [];
    const alphabet = 'abcdefghijklmnopqrstuvwxyz';
    for (let i = 0; i < alphabet.length/2; i++){ 
        const x = randomX(letters1);          
        const y = randomY(letters1);          

        const letter = new Letter (ctx, x, y, lettersArr, alphabet);
        myLetters.push(letter);
    }
    for (let i = 0; i < alphabet.length/2; i++){ 
        const x = randomX(letters2)+50;          
        const y = randomY(letters2)+50;          

        const letter = new Letter (ctx, x, y, lettersArr, alphabet);
        myLetters.push(letter);
    }
    console.log(myLetters);
}


function randomX (sect) {
    let x = 0;
    while (!sect.containsX(x)){// && queryArea.containsY(y)) {
        x = sect.x + (Math.random() * sect.width);
    }
    return x;
}

function randomY (sect) {
    let y = 0;
    while (!sect.containsY(y)){// && queryArea.containsY(y)) {
        y = sect.y + (Math.random() * sect.height) + 100; // slight offset
    }
    return y;
}

// function animate() { 
//     ctx.save();
//     c.clearRect(0,0,myCanvas.width, myCanvas.height)
//     ctx.restore();
// }



// function addCanvasEventListeners() {
//     myCanvas.addEventListeners("mousedown", onMouseDown);
//     myCanvas.addEventListeners("mousemove", onMouseMove);
// //     myCanvas.addEventListeners("mouseup", onMouseUp);
// }


// function onMouseDown (evt) {
//     selectedLetter = getPressedLetter(evt);
//     if (selectedLetter !== null) {
//         const idx = myLetters.indexOf(selectedLetter);
//         if (idx > -1) {
//             myLetters.splice(idx,1);
//             myLetters.push(selectedLetter);
//         }
//         selectedLetter.offset = {
//             x:evt.x-selectedLetter.x,
//             y:evt.y-selectedLetter.y,
//         }
//     }
// }

// function onMouseMove (evt) {
//     selectedLetter = getPressedLetter(evt);
//     if (selectedLetter !== null) {
//         selectedLetter.offset = {
//             x:evt.x-selectedLetter.x,
//             y:evt.y-selectedLetter.y,
//         }
//     }
// } 


// function getPressedLetter(pos) {
//     for (let i = 0; i < myLetters.length; i++) {
//         const letterObj = myLetters[i];
//         if (letterObj.contains(pos[0],pos[1])) return letterObj;
//     }
//     return null;
// }
