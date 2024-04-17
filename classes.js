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
    constructor({position,velocity,direction,image, frames = {maxWidth:1, maxHeight:1}}) {
        this.position = position;
        this.image = image;
        this.frames = {...frames, valCol:0, elapsed: 0, valRow: 0};
        
        // this.image.onload = () => {
 
        // }
        
        this.imageWidth = this.image.width / this.frames.maxWidth;
        this.imageHeight = this.image.height / this.frames.maxHeight;
        this.width = this.imageWidth/2/2;
        this.height = this.imageHeight/2/2;
        this.moving = false;
        this.direction = direction;
        
    }

    draw() {
        c.drawImage(
            this.image, 
            this.frames.valCol * this.imageWidth, //X Crop from top left (top left corner start) https://youtu.be/yP5DKzriqXA?feature=shared&t=6055
            this.frames.valRow * this.imageHeight, //Y Crop from top left (top left corner start)
            this.image.width / this.frames.maxWidth, //Crop Width, columns in width
            this.image.height / this.frames.maxHeight, //Crop height, rows.
            this.position.x + this.position.xOffset,
            this.position.y + this.position.yOffset,
            this.image.width / this.frames.maxWidth, //Actual width
            this.image.height / this.frames.maxHeight) //Actual height


            if (this.moving) {
                switch(this.direction) {
                    case 0:
                        this.frames.valRow = 4;
                        break;
                    case 1:
                        this.frames.valRow = 0;
                        break;
                    case 2:
                        this.frames.valRow = 6;
                        break;
                    case 3:
                        this.frames.valRow = 2;
                        break;     
                }
                if (this.frames.maxWidth > 1) {
                    this.frames.elapsed++;
                }
                if (this.frames.elapsed % 10 === 0) {
                    if (this.frames.valCol < 4) this.frames.valCol++
                    else this.frames.valCol = 0;
                }
            } else {
                this.frames.valCol=0;
            }

            

    }
}