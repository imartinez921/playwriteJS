let context;

class Letter {

    constructor (ctx, x, y, char) {
        this.ctx = ctx;
        context = ctx;
        this.x = x;
        this.y = y;
        this.width = 55;
        this.height = this.width;
        this.char = char;
        this.font = this.style(this.width/50)
        this.queried = false;
        // this.rotation = null;

        this.draw();
    }
    
    draw () {
    // Get a remaining letter in a random font
        this.ctx.font = this.font; // I had originally calibrated a 48px font size to a box of 50 x 50

    // Get random rotation around center of letter
        // this.rotate();
        // this.ctx.translate(
        //     this.offsetX + this.x + this.width/2, 
        //     this.offsetY + this.y + this.height/2);
        // this.ctx.rotate(this.rotation);
        // this.ctx.translate(
        //     -(this.width/2 + this.offsetX), 
        //     -(this.height/2 + this.offsetY) );
        
        // Draw magnet shadow first
        this.ctx.fillStyle = "grey";
        this.ctx.fillRect(this.x, this.y, this.width+8, this.height+8);
        
        // Optional letter shadow if letter blocks
        // this.ctx.shadowBlur = 20;
        // this.ctx.shadowOffsetX = 6;
        // this.ctx.shadowOffsetY = 6;
        // this.ctx.shadowColor = "grey";
        
        // Draw letter square
        this.ctx.fillStyle = "white";
        this.ctx.lineWidth = 8;
        this.ctx.strokeRect(this.x, this.y, this.width, this.height);
        this.ctx.fillRect(this.x, this.y, this.width, this.height);
        
        // Draw letter text
        // this.ctx.fillStyle = "black";
        // this.ctx.textAlign = "center";
        // this.ctx.fillText(this.char, this.x + this.width/2, this.y + this.height - this.height/5);

        let text = this.char
        const magLetter = new Image();
        magLetter.src = "/Users/EtaCarinaeDua/Dropbox/aabootcamp/theCoolerDictionary_JS/assets/images/" + text + ".png"
        // let drawBind = this.ctx.drawImage.bind(this.ctx);
        let letterLoad = function() { 
            this.ctx.drawImage(magLetter,this.x,this.y,50,50);
        }
        let loadBind = letterLoad.bind(this);
        magLetter.onload = loadBind;
    }

    // rotate () {
    //     const dir = (Math.round(Math.random()) === 0) ? -1 : 1
    //     this.rotation = ((Math.PI / 180) * (Math.random() * 8) * dir);
    // }

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

    contains (x, y) {
        return (x >= this.x && 
            x <= this.x + this.width &&
            y >= this.y &&
            y <= this.y + this.height);
    }


    
}

export default Letter;