



class Character {
    constructor(imageSrc, x, y) {

        this.image = new Image();
        this.image.src = imageSrc;
        this.width = this.image.width/24/2;
        this.height = this.image.height/8/2;
        this.hitBox = new Rectangle(x,y,this.width,this.height);
        this.moving = false;
        this.tick = 0;
        this.second = 0;
    }

    draw() {
        c.drawImage(
            this.image,  
            0,          
            0,          
            this.image.width/24,      
            this.image.height/8,           
            this.hitBox.x-60 - BoarderOffset.xLvlOffset,      
            this.hitBox.y-75 - BoarderOffset.yLvlOffset,
            this.image.width/24,
            this.image.height/8     
        );
    }

}