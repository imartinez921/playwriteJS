let context;

class Letter {

    constructor (ctx, x, y, char) {
        this.ctx = ctx;
        context = ctx;
        this.x = x;
        this.y = y;
        this.width = 100;
        this.height = this.width;
        this.char = char;
        this.font = this.style(this.width/50)
        this.color = this.color(); 
        this.queried = false;
        // this.rotation = null;

        this.draw();
    }
    
    draw () {
        // Get a remaining letter in a random font
        this.ctx.font = this.font; 
        this.ctx.shadowOffsetX = 4;
        this.ctx.shadowOffsetY = 4;
        this.ctx.shadowColor = "grey";
        
        // Draw letter text
        
        this.ctx.textAlign = "center";
        this.ctx.fillStyle = this.color;
        this.ctx.fillText(this.char, this.x + this.width/2, this.y + this.height - this.height/5);

        // let text = this.char
        // const magLetter = new Image();
        // magLetter.src = "/Users/EtaCarinaeDua/Dropbox/aabootcamp/theCoolerDictionary_JS/assets/images/" + text + ".png"
        // // let drawBind = this.ctx.drawImage.bind(this.ctx);
        // let letterLoad = function() { 
        //     this.ctx.drawImage(magLetter,this.x,this.y,50,50);
        // }
        // let loadBind = letterLoad.bind(this);
        // magLetter.onload = loadBind;
        this.ctx.restore();
    }

    style (factor) { // This fn returns a random font for ctx.font, eg. ctx.font = "30px Arial";
        const pxDefault = 48; // I had originally calibrated a 48px font size to a box of 50 x 50
        const fonts = [
            "helvetica", "century gothic", "Courier", "perpetua",
            "consolas", "comic sans", "baskerville", "calibri", "calisto",
            "cambria", "candara", "trebuchet ms", "segoe script",
            "lucida handwriting", "Script MT", 
        ]
        // const selectedFont = fonts[Math.floor(Math.random() * fonts.length)];
        const selectedFont = "comic sans ms";
        return 'bold ' +pxDefault*factor + 'px ' + selectedFont;
    }

    color () {
        let colors = ["red", "yellow", "orange", "blue", "green", "purple", "black"];
        return colors[Math.floor((Math.random() * colors.length))];
    }

    contains (x, y) {
        return (x >= this.x && 
            x <= this.x + this.width &&
            y >= this.y &&
            y <= this.y + this.height);
    }


    
}

export default Letter;