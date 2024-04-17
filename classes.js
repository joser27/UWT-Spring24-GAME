class Boundary {
    static width = 104;
    static height = 104;
    constructor({position}) {
        this.position = position;
        this.width = 104; // 16 x zoom (%650)
        this.height = 104;
    }

    draw() {
        c.fillStyle = 'rgba(255,0,0,0.2)';
        c.fillRect(this.position.x, this.position.y, this.width, this.height);
    }
}


class Sprite {
    constructor({position,velocity,image,frames = {maxWidth:1, maxHeight:1}}) {
        this.position = position;
        this.image = image;
        this.frames = {...frames, val:0, elapsed: 0};
        
        this.image.onload = () => {
            this.width = this.image.width / this.frames.maxWidth;
            this.height = this.image.height / this.frames.maxHeight;
        }
        this.moving = false;
    }

    draw() {
        c.drawImage(
            this.image, 
            this.frames.val * this.width, //X Crop from top left (top left corner start) https://youtu.be/yP5DKzriqXA?feature=shared&t=6055
            0, //Y Crop from top left (top left corner start)
            this.image.width / this.frames.maxWidth, //Crop Width, columns in width
            this.image.height / this.frames.maxHeight, //Crop height, rows.
            this.position.x,
            this.position.y,
            this.image.width / this.frames.maxWidth, //Actual width
            this.image.height / this.frames.maxHeight) //Actual height


            if (this.moving) {
                if (this.frames.maxWidth > 1) {
                    this.frames.elapsed++;
                }
                if (this.frames.elapsed % 10 === 0) {
                    if (this.frames.val < this.frames.maxWidth - 1) this.frames.val++
                    else this.frames.val = 0;
                }
            }

            

    }
}