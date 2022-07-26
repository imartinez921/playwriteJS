import Section from './scripts/section';
import Letter from './scripts/letter';  


const myLetters = [];
let selectedLetter = null;
let currentLetterIdx = null;
let isDragging = false;

let startX;
let startY;
let offsetX;
let offsetY;


document.addEventListener('DOMContentLoaded', () => {

    console.log("hello world")

    const myCanvas = document.getElementById('mycanvas');
    myCanvas.width = 1000;
    myCanvas.height = 1000;
    
    const ctx = myCanvas.getContext('2d')

    const background = new Image(); 
    background.src = "/Users/EtaCarinaeDua/Dropbox/aabootcamp/theCoolerDictionary_JS/assets/images/top-fridge-door.png"; // 1149x860
    background.onload = function(){  // Make sure the image is loaded first otherwise nothing will draw.
        myCanvas.width = 1149;
        myCanvas.height = 860;
        ctx.drawImage(background,0,0,background.width,background.height,0,0,1149,860);
        spawn(ctx);
    }
    get_offset();
    addCanvasEventListeners(myCanvas);
})

async function spawn(ctx) {
    // Set regions of frige doors
    const letters1 = new Section (ctx, 200,100,700,150); // rendered for testing
    const letters2 = new Section (ctx, 200,550,700,150); // rendered for testing
    const queryArea = new Section (ctx, 200,350,700,100);

    // Spawn original letters
    const lettersArr = [];
    const alphabet = 'abcdefghijklmnopqrstuvwxyz';
    for (let i = 0; i < alphabet.length/2; i++){ 
        const x = randomX(letters1)+(50 * Math.random());          
        const y = randomY(letters1)+(50 * Math.random());          

        const letter = new Letter (ctx, x, y, lettersArr, alphabet);
        myLetters.push(letter);
    }
    for (let i = 0; i < alphabet.length/2; i++){ 
        const x = randomX(letters2)+(50 * Math.random());    // offset for fridge graphic       
        const y = randomY(letters2)+(50 * Math.random());          

        const letter = new Letter (ctx, x, y, lettersArr, alphabet);
        myLetters.push(letter);
    }
    console.log(myLetters.sort(letter => letter.letter));
}

function get_offset() {
    let canvas_offsets = canvas.getBoundingClientRect();
    offsetX = canvas_offsets.left;
    offsetY = canvas_offsets.top;
}

function addCanvasEventListeners(canvas) {
    canvas.onmousedown = mouseDown;
    // myCanvas.onmouseup = mouseUp;
    // myCanvas.onmouseout = mouseOut;
    // myCanvas.onmousemove = mouseMove;
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
        y = sect.y + (Math.random() * sect.height); // slight offset
    }
    return y;
}


function drawLetters() {
    ctx.clearRect(0,0,myCanvas.width, myCanvas.height)
    for (let letter of myLetters) {
        letter.draw();
    }
}

let mouseDown = function (event) {
    event.preventDefault();
    
    startX = parseInt(event.offsetX);
    startY = parseInt(event.offsetY);
    console.log(event);

    for (let i = 0; i < myLetters.length; i++) {
        let letterObj = myLetters[i];
        if (letterObj.contains(startX, startY)) {
            console.log('yes');
            currentLetterIdx = i;
            isDragging = true;
            console.log(isDragging);
            console.log(currentLetterIdx);
        }
    }
}




