import Section from './scripts/section';
import Letter from './scripts/letter';

let background = null;
const alphabet = 'abcdefghijklmnopqrstuvwxyz';
const myLetters = [];
let queryArr = [];
const lettersCount = {};
let selectedLetter = null;
let currentLetterIdx = null;
let isDragging = false;

let queryString = '';
let letters1;
let letters2;
let queryArea;

let ctx;
let myCanvas;
let startX;
let startY;
let mouseX;
let mouseY;
let offsetX;
let offsetY;



document.addEventListener('DOMContentLoaded', () => {

    console.log("hello world")

    myCanvas = document.getElementById('mycanvas');
    myCanvas.width = 1000;
    myCanvas.height = 1000;
    
    ctx = myCanvas.getContext('2d')
   
    initialize ();
    addCanvasEventListeners(myCanvas);
})


function initialize () {
    background = new Image(); 
    background.src = "./assets/images/fridge_door.png"; // 1149x860
    background.onload = function() {  // Make sure the image is loaded first otherwise nothing will draw.
        myCanvas.width = 1149;
        myCanvas.height = 860;
        ctx.drawImage(background,0,0,background.width,background.height,0,0,1149,860);
        
        get_offset();
        spawn(ctx);
    }
}

function backgroundOnly () {
    ctx.drawImage(background,0,0,background.width,background.height,0,0,1149,860);
}

function createSections (ctx) {
    // Set regions of frige doors
    letters1 = new Section (ctx, 200,100,800,150); // rendered for testing
    letters2 = new Section (ctx, 200,550,800,150); // rendered for testing
    queryArea = new Section (ctx, 200,350,800,100);
}
function spawn(ctx) {
    createSections(ctx);
    createLetters(ctx);
}

function get_offset() {
    let canvas_offsets = myCanvas.getBoundingClientRect();
    offsetX = canvas_offsets.left;
    offsetY = canvas_offsets.top;
}

function createLetters (ctx){
    for (let i = 0; i < alphabet.length; i++){ 
        let char = alphabet[i];

        let spawnArea = (Math.round(Math.random()) === 0) ? letters1 : letters2;

        const x = randomX(spawnArea)-(100 * Math.random());          
        const y = randomY(spawnArea)-(100 * Math.random()); 
        const letter = new Letter (ctx, x, y, char);
        // let pos = randomPosition(); // returns [x,y] pair
        // const letter = new Letter (ctx, pos[0], pos[1], char);
        
        myLetters.push(letter);
    }
}

// function randomPosition() {
//     let spawnArea = (Math.round(Math.random()) === 0) ? letters1 : letters2;

//     let x = randomX(spawnArea)-(100 * Math.random());          

    // Trying not to have letters overlap but there wasn't enough area available  for this;
    // Need to refactor to be close but not on top of each other
    // let uniqueX = false;
    // while (!uniqueX) {
    //     uniqueX = true;
    //     for (let letterX of myLetters) {
    //         if (letterX.containsX) {
    //             x = randomX(spawnArea)-(100 * Math.random());
    //             uniqueX = false;
    //         }
    //     }
    // }

    // let y = randomY(spawnArea)-(100 * Math.random()); 
    // let uniqueY = false;
    // while (!uniqueY) {
    //     uniqueY = true;
    //     for (let letterY of myLetters) {
    //         if (letterY.containsY) {
    //             y = randomY(spawnArea)-(100 * Math.random());
    //             uniqueY = false;
    //         }
    //     }
    // }
//     return [x,y];
// }

function createSingle(ctx, char) {
    let spawnArea = (Math.round(Math.random()) === 0) ? letters1 : letters2;
            
    const x = randomX(spawnArea)-(100 * Math.random());          
    const y = randomY(spawnArea)-(100 * Math.random()); 
    const letter = new Letter (ctx, x, y, char);

    myLetters.push(letter);
    console.log('I printed', letter);
}


function addCanvasEventListeners(canvas) {
    canvas.onmousedown = mouseDown;
    canvas.onmouseup = mouseUp;
    canvas.onmouseout = mouseOut;
    canvas.onmousemove = mouseMove;
}
function randomX (sect) {
    let x = 0;
    while (!sect.containsX(x)){
        x = sect.x + (Math.random() * sect.width);
    }
    return x;
}

function randomY (sect) {
    let y = 0;
    while (!sect.containsY(y)){
        y = sect.y + (Math.random() * sect.height); // slight offset for more randomization
    }
    return y;
}

function mouseDown (event) {
    event.preventDefault();
    console.log(event);
    
    startX = parseInt(event.offsetX);
    startY = parseInt(event.offsetY);
    selectLetter(startX, startY);
   
isDragging = true;
            
    console.log(selectedLetter.char);
}

function selectLetter (x,y) {
    startX = x;
    startY = y;

    for (let i = 0; i < myLetters.length; i++) {
        let letterObj = myLetters[i];
        if (letterObj.contains(startX, startY)) {
            selectedLetter = letterObj;
            myLetters.splice(i, 1);
            myLetters.push(selectedLetter);
        }
    }
}

function mouseUp (event) {
    if (!isDragging) { // No action if we are not currently dragging
        return;
    } else {
        event.preventDefault();
        isDragging = false; // Else, we exit dragging mode
    }
}

function respawnLetters() {

    // case 1: start out, end in => spawn
    // case 3: start out, end out => nothing
    // case 4: start in, end out => delete
    // case 2: start in, end in => nothing
    const startedIn = selectedLetter.queried;
    const endedIn = insideQuery(selectedLetter.x, selectedLetter.y);
    if (startedIn === false && endedIn === true) {
        createSingle(ctx, selectedLetter.char);
    } 
    if (startedIn === true && endedIn === false) {
        for (let i = 0; i < myLetters.length; i++) {
            let currentLetter = myLetters[i];
            if ( currentLetter.char === selectedLetter.char && currentLetter !== selectedLetter) {
                myLetters.splice(i,1);
            }
        }
    }
    selectedLetter.queried = endedIn;
    drawLetters();
}

function mouseOut (event) {
    if (!isDragging) { // No action if we are not currently dragging
        return;
    } else {
        event.preventDefault();
        isDragging = false; // Else, we exit dragging mode
    }

    for (let letter of myLetters) {
        if (queryArea.contains(letter.x, letter.y)) {
            letter.queried = true;
        } else {
            letter.queried = false;
        }
    }    
}

function mouseMove (event) {
    mouseX = parseInt(event.offsetX)
    mouseY = parseInt(event.offsetY)

    if (isDragging) {
        event.preventDefault();

        let dx = mouseX - startX;
        let dy = mouseY - startY;
        
        selectedLetter.x += dx;
        selectedLetter.y += dy;

        startX = mouseX;
        startY = mouseY;

        respawnLetters();
    }
    drawLetters();
}

function insideQuery () {
    if (queryArea.contains(mouseX,mouseY)) return true;
    return false;
}

function hoverQuery() {

    ctx.save();

    ctx.shadowBlur = 10;
    ctx.shadowColor = "yellow";
    ctx.strokeStyle= "#C6CACD";
    ctx.lineWidth = "1"
    ctx.strokeRect(queryArea.x, queryArea.y, queryArea.width, queryArea.height);

    ctx.restore();
}


function drawLetters() {
    if (isDragging) {
        backgroundOnly();
    }

    if (insideQuery()) {
        hoverQuery();
    } else {
        backgroundOnly();
    }

    for (let letter of myLetters) {
        letter.draw();
    }
}


// function animate() {
//     ctx.clearRect(0,0,myCanvas.width, myCanvas.height);
//     drawLetters();
//     window.requestAnimationFrame(animate);
// }
