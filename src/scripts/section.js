class Section {

    constructor(context, x, y, width, height) {
        this.context = context;
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;

        this.draw();
       
    }

    draw () {
        this.context.strokeRect(this.x, this.y, this.width, this.height);
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
        return (this.containsX(x) && this.containsY(y));
    }

}


export default Section;