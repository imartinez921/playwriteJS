class Section {

    constructor(context,x,y, width, height) {
        this.context = context;
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        // requestAnimationFrame(this.draw.bind(this));
       this.draw();
       
    }

    draw () {
        console.log('I am a rectangle', this.x, this.y, this.width, this.height)
        this.context.strokeRect(this.x, this.y, this.width, this.height);
    }



}


export default Section;