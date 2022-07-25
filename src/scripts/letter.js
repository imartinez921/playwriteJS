class Letter {

    constructor(context, x, y, lettersArr, alphabet) {
        this.context = context;
        this.x = x;
        this.y = y;
        this.width = 70;
        this.height = this.width;
        this.lettersArr = lettersArr;
        this.alphabet = alphabet;

        this.draw()
    }
    
    draw () {
        this.context.strokeRect(this.x, this.y, this.width, this.height);
        
        const text = this.pickLetter();
        this.lettersArr.push(text);
        this.context.font = this.style(this.width/50);
        this.context.textAlign = "center";
        this.context.fillText(text, this.x + this.width/2, this.y + this.height - this.height/5);
    }

    style (factor) {
        const pxDefault = 48; // Calibrated to a box of 50 x 50
        const fonts = ["arial", "serif", "times new roman"]
        const selectedFont = fonts[Math.floor(Math.random() * fonts.length)];
        return pxDefault*factor + 'px ' + selectedFont;
    }

    pickLetter () {
        const alphabet = this.alphabet.split('');
        const selectedLetter = alphabet[Math.floor(Math.random() * alphabet.length)];
        if (this.lettersArr.includes(selectedLetter)) {
            return this.pickLetter();
        } else {
            return selectedLetter;
        }
    }



    
}

export default Letter;