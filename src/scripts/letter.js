let context;

class Letter {

    constructor (ctx, x, y, char) {
        this.ctx = ctx;
        context = ctx;
        this.x = x;
        this.y = y;
        this.width = 110;
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

        // Draw letter shadow
        this.ctx.shadowOffsetX = 3;
        this.ctx.shadowOffsetY = 3;
        this.ctx.shadowColor = "dark"+this.color;
        this.ctx.shadowOffsetX = 7;
        this.ctx.shadowOffsetY = 1;
        this.ctx.shadowColor = "dark"+this.color;
        
        // Draw letter text
        this.ctx.textAlign = "center";
        this.ctx.fillStyle = this.color;
        this.ctx.fillText(this.char, this.x + this.width/2, this.y + this.height - this.height/5);

        // To use magnet image letters
        // let text = this.char
        // const magLetter = new Image();
        // magLetter.src = "/Users/EtaCarinaeDua/Dropbox/aabootcamp/theCoolerDictionary_JS/assets/images/" + text + ".png"
        // // let drawBind = this.ctx.drawImage.bind(this.ctx);
        // let letterLoad = function() { 
        //     this.ctx.drawImage(magLetter,this.x,this.y,50,50);
        // }
        // let loadBind = letterLoad.bind(this);
        // magLetter.onload = loadBind;
        // this.ctx.restore();
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
        let colors = ["blue", "cyan", "red", "orange", 
            "green", "magenta", "orchid", "green", "turquoise",
            "slateblue", "khaki", "violet"
        ];
        return colors[Math.floor((Math.random() * colors.length))];
    }


    containsX (x) {
        return (x >= this.x && 
            x <= this.x + this.width);
    }

    containsY (y) {
        return (y >= this.y &&
            y <= this.y + this.height);
        }

    contains (x, y) {
        return (x >= this.x && 
            x <= this.x + this.width &&
            y >= this.y &&
            y <= this.y + this.height);
    }


    
}

export default Letter;