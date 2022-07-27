import Section from './scripts/section';
import Letter from './scripts/letter';  

let background = null;
const alphabet = 'abcdefghijklmnopqrstuvwxyz';
const myLetters = [];
let lettersArr = [];
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
    background.src = "/Users/EtaCarinaeDua/Dropbox/aabootcamp/theCoolerDictionary_JS/assets/images/fridge_door.png"; // 1149x860
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
    for (let i = 0; i < alphabet.length/2; i++){ 
        const x = randomX(letters1)+(50 * Math.random());          
        const y = randomY(letters1)+(50 * Math.random());          

        const letter = new Letter (ctx, x, y, offsetX, offsetY, lettersArr, alphabet);
        myLetters.push(letter);
    }
    for (let i = 0; i < alphabet.length/2; i++){ 
        const x = randomX(letters2)+(50 * Math.random());    // offset for better placement       
        const y = randomY(letters2)+(50 * Math.random());          

        const letter = new Letter (ctx, x, y, offsetX, offsetY, lettersArr, alphabet);
        myLetters.push(letter);
    }
    console.log(myLetters);
    console.log(lettersArr);
}

function respawnLetter (ctx) {
    console.log('RESPAWN', myLetters)
    queryString = '';
    for (let square of myLetters) {
        if (queryArea.contains(square.x, square.y)) {
            queryString += square.char;

            const currentIdx = lettersArr.indexOf(square.char);
            if (currentIdx !== -1) {
                let removed = lettersArr.splice(currentIdx,1);
                console.log('I spliced', removed);
            }
        }
    }
    console.log(queryString);

     // Print any missing letters
    console.log('lettersArr before', lettersArr);
    while (lettersArr.length < 26) {
        createSingle(ctx);
    }
    console.log('myLetters', myLetters.sort());
    console.log('lettersArr after', lettersArr.sort());
   
}

function createSingle(ctx) {
    let spawnArea = (Math.round(Math.random()) === 0) ? letters1 : letters2;
            
    const x = randomX(spawnArea)+(50 * Math.random());          
    const y = randomY(spawnArea)+(50 * Math.random()); 
    const letter = new Letter (ctx, x, y, offsetX, offsetY, lettersArr, alphabet);

    myLetters.push(letter);
    console.log('I printed', letter);
}


function removeMultiples(ctx) {
// Ensure only one of each letter outside Query Area
    const lettersCount = {};
    for (let square of myLetters) {
        if (!queryArea.contains(square.x, square.y)) {
            if (lettersCount[square.char]) {
                lettersCount[square.char] += 1;
                console.log('MULTIPLE THIS', square.char);
                
                for (let i = 0; i < myLetters.length; i++) {
                    if (myLetters[i].char === square.char) {
                        myLetters.splice(i, 1);
                    }
                }
            } else {
                lettersCount[square.char] = 1;
            }
        }
    }
    console.log(lettersCount);
    // console.log('SELECTED LETTER', selectedLetter);

    // let countValues = Object.values(lettersCount);
    // let multiples = [];
    // while (countValues.some(value => value > 1 ) ) {
    //     for (let key in lettersCount) {
    //         if (lettersCount[key] > 1) {
    //             console.log('I need to splice!!!');
    //             multiples.push(key);
    //         }
    //     }
    // }
    // console.log('I NEED TO SPLICE THESE', multiples);
    // for (let i = 0; i < myLetters.length; i++) {
    //     let currentLetter = myLetters[i];
    //     if (currentLetter.char === key) {
    //         let removed = myLetters.splice(i, 1);
    //         console.log('I spliced this Letter Obj:', removed);
    //         break;
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

    for (let i = 0; i < myLetters.length; i++) {
        let letterObj = myLetters[i];
        if (letterObj.contains(startX, startY)) {
            currentLetterIdx = i;
            isDragging = true;
            bringToFront();
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
    respawnLetter(ctx, lettersArr);
    removeMultiples(ctx);
}

function mouseOut (event) {
    if (!isDragging) {
        return;
    } else {
        event.preventDefault();
        isDragging = false;
    }
}

function mouseMove (event) {
    mouseX = parseInt(event.offsetX)
    mouseY = parseInt(event.offsetY)

    if (!isDragging) {
    } else {
        event.preventDefault();

        let dx = mouseX - startX;
        let dy = mouseY - startY;
        
        selectedLetter = myLetters[currentLetterIdx];
        selectedLetter.x += dx;
        selectedLetter.y += dy;

        startX = mouseX;
        startY = mouseY;
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

function bringToFront() {
    let temp = myLetters[currentLetterIdx];
    selectedLetter = temp;
    myLetters.splice(currentLetterIdx, 1);
    myLetters.push(temp);
}