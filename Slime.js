
const SlimeAnimation = {
    aniTick: 0, aniIndex: 0, aniSpeed: 10,
}
class Slime {
    constructor(x,y, Player, moveSpeed, lineOfSight){
        this.image = new Image();
        this.image.src = 'Slime.png';
        this.hitBox = new Rectangle(x*104,y*104,80,40)
        // this.imageWidth = this.image.width
        // this.imageHeight = this.image.height
        this.player = Player;
        this.speed = 1;
        this.lineOfSight = 400;
        this.health = 100;
        this.isDead = false;
    }

    draw() {

        c.fillStyle='red'
        c.fillRect(this.hitBox.x-15-BoarderOffset.xLvlOffset,this.hitBox.y-70-BoarderOffset.yLvlOffset,this.health,30)
// Calculate the distance between the hitbox and the player
const dx = this.player.hitBox.x - this.hitBox.x;
const dy = this.player.hitBox.y - this.hitBox.y;
const distance = Math.sqrt(dx * dx + dy * dy);

if (distance <= this.lineOfSight) {
    if (Math.abs(dx) > this.speed) {
        this.hitBox.x += this.speed * Math.sign(dx);
    } else {
        this.hitBox.x = this.player.hitBox.x;
    }

    if (Math.abs(dy) > this.speed) {
        this.hitBox.y += this.speed * Math.sign(dy);
    } else {
        this.hitBox.y = this.player.hitBox.y;
    }
}

        


        if (this.hitBox.intersects(this.player.hitBox)) {
            this.player.health--;
        }

        if (!this.isDead) {
            c.drawImage(
                this.image,  
                0,          
                0,          
                this.image.width/15,      
                this.image.height,           
                this.hitBox.x-95 - BoarderOffset.xLvlOffset,      
                this.hitBox.y-120 - BoarderOffset.yLvlOffset,
                this.image.width/15,
                this.image.height     
            );
        } else {
            c.drawImage(
                this.image,  
                this.image.width/15*10,          
                0,          
                this.image.width/15,      
                this.image.height,           
                this.hitBox.x-95 - BoarderOffset.xLvlOffset,      
                this.hitBox.y-120 - BoarderOffset.yLvlOffset,
                this.image.width/15,
                this.image.height     
            );
        }



        if (GameController.showHitBoxes) {
            c.fillStyle = 'rgba(0,0,255,0.5)';
            c.fillRect(this.hitBox.x-BoarderOffset.xLvlOffset, this.hitBox.y-BoarderOffset.yLvlOffset,this.hitBox.width,this.hitBox.height)
        }

        SlimeAnimation.aniTick++;
        if (SlimeAnimation.aniTick > SlimeAnimation.aniSpeed) {
            SlimeAnimation.aniTick=0;
            SlimeAnimation.aniIndex++;
            
            if (SlimeAnimation.aniIndex > 8) {
                SlimeAnimation.aniIndex = 0;
            }
        }
    }
}