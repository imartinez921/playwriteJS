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



}


export default Section;