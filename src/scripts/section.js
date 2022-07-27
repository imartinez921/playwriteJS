class Section {

    constructor(ctx, x, y, width, height) {
        this.ctx = ctx;
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;

        // this.draw();
       
    }

    // draw () {
    //     this.ctx.save();
    //     this.ctx.lineWidth = "1"
    //     this.ctx.strokeStyle = "#C6CACD"
    //     this.ctx.strokeRect(this.x, this.y, this.width, this.height);
    //     this.ctx.restore();
    // }
    
    
    containsX (x) {
        return (x >= this.x && 
            x <= this.x + this.width);
    }

    containsY (y) {
        return (y >= this.y &&
            y <= this.y + this.height);
        }

        
    contains (x, y) {
        return (this.containsX(x) && this.containsY(y));
    }

}


export default Section;