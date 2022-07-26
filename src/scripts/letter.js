class Letter {

    constructor(ctx, x, y, lettersArr, alphabet) {
        this.ctx = ctx;
        this.x = x;
        this.y = y;
        this.width = 55;
        this.height = this.width;
        this.lettersArr = lettersArr;
        this.alphabet = alphabet;
        this.letter = this.pickLetter();
        this.font = this.style(this.width/50)
        this.rotation = null;

        this.draw();
    }
    
    draw () {
        // Get a remaining letter in a random font
        if (this.lettersArr.length < this.alphabet.length){
            this.ctx.font = this.font; // I had originally calibrated a 48px font size to a box of 50 x 50

        // Get random rotation around center of letter
            this.rotation = this.rotate();
            this.ctx.rotate(this.rotation);

        // Draw magnet shadow first
            this.ctx.fillStyle = "grey";
            this.ctx.fillRect(this.x, this.y, this.width+8, this.height+8);

        // Optional letter shadow if letter blocks
        //     this.ctx.shadowBlur = 20;
        //     this.ctx.shadowOffsetX = 6;
        //     this.ctx.shadowOffsetY = 6;
        //     this.ctx.shadowColor = "grey";

        // Draw letter square
            this.ctx.fillStyle = "white";
            this.ctx.lineWidth = 8;
            this.ctx.strokeRect(this.x, this.y, this.width, this.height);
            this.ctx.fillRect(this.x, this.y, this.width, this.height);

        // Draw letter text
            this.ctx.fillStyle = "black";
            this.ctx.textAlign = "center";
            this.ctx.fillText(this.letter, this.x + this.width/2, this.y + this.height - this.height/5);
            this.ctx.restore();
            // console.log('THE LETTER IS POSTED HERE', this.x, this.y)
        }
    }

    rotate () {
        this.ctx.save();
        this.ctx.translate(15, -75); // keeps most letters within range
        const dir = (Math.round(Math.random()) === 0) ? -1 : 1
        return ((Math.PI / 180) * (Math.random() * 8) * dir);
        }

    style (factor) { // This fn returns a random font for ctx.font, eg. ctx.font = "30px Arial";
        const pxDefault = 48; // I had originally calibrated a 48px font size to a box of 50 x 50
        const fonts = [
            "helvetica", "century gothic", "Courier", "perpetua",
            "consolas", "comic sans", "baskerville", "calibri", "calisto",
            "cambria", "candara", "trebuchet ms", "segoe script",
            "lucida handwriting", "Script MT", 
        ]
        const selectedFont = fonts[Math.floor(Math.random() * fonts.length)];
        return pxDefault*factor + 'px ' + selectedFont;
    }

    pickLetter () {
        const alphabet = this.alphabet.split('');
        const selectedLetter = alphabet[Math.floor(Math.random() * alphabet.length)];
        if (this.lettersArr.includes(selectedLetter)) {
            return this.pickLetter();
        } else {
            this.lettersArr.push(selectedLetter);
            return selectedLetter;
        }
    }

    contains (x, y) {
        return (x >= this.x && 
            x <= this.x + this.width &&
            y >= this.y &&
            y <= this.y + this.height);
    }


    
}

export default Letter;