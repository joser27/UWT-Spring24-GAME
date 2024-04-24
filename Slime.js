

class Slime {
    constructor(x,y, Player){
        this.image = new Image();
        this.image.src = 'Slime.png';
        this.hitBox = new Rectangle(x*104,y*104,80,40)
        // this.imageWidth = this.image.width
        // this.imageHeight = this.image.height
        this.player = Player;
        this.speed = 1;
        this.lineOfSight = 300;
        this.health = 100;
        this.isDead = false;
        this.isRemoved = false;
        this.deathTick=0;
        this.deathAni=9;

        this.deathSound = new Audio('splat-sound.mp3');
        this.playedSound = false;
        this.aniTick=0;
        this.aniIndex=0;
        this.aniSpeed = 10;
    }

    draw() {
        c.fillStyle='red'
        c.fillRect(this.hitBox.x-15-BoarderOffset.xLvlOffset,this.hitBox.y-70-BoarderOffset.yLvlOffset,this.health,30)

        // the distance between the slime and the player
        const dx = this.player.hitBox.x - this.hitBox.x;
        const dy = this.player.hitBox.y - this.hitBox.y;
        const distance = Math.sqrt(dx * dx + dy * dy);

        if (distance <= this.lineOfSight && !this.isDead) {
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

            c.drawImage(
                this.image,  
                this.image.width/15*this.aniIndex,          
                0,          
                this.image.width/15,      
                this.image.height,           
                this.hitBox.x-95 - BoarderOffset.xLvlOffset,      
                this.hitBox.y-120 - BoarderOffset.yLvlOffset,
                this.image.width/15,
                this.image.height     
            );
            this.aniTick++;
            if (this.aniTick > this.aniSpeed) {
                this.aniTick=0;
                this.aniIndex++;
                
                if (this.aniIndex > 5) {
                    this.aniIndex = 0;
                }
            }
        } else if (distance <= 600 && !this.isDead){
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
        } else if (distance <= 400 && this.isDead) {
            if (this.playedSound===false) {
                this.playedSound=true;
                this.deathSound.play();
            }
            this.deathTick++;
            if (this.deathTick>10) {
                this.deathTick=0;
                this.deathAni++;
                if (this.deathAni>=14) {// REMOVE ME AFTER DEATH ANIMATION.
                    
                    this.hitBox.x = 0,
                    this.hitBox.y = 0;
                    this.isRemoved=true;
                    this.deathAni=0;
                }
            }

            c.drawImage(
                this.image,  
                this.image.width/15*this.deathAni,          
                0,          
                this.image.width/15,      
                this.image.height,           
                this.hitBox.x-95 - BoarderOffset.xLvlOffset,      
                this.hitBox.y-120 - BoarderOffset.yLvlOffset,
                this.image.width/15,
                this.image.height     
            );
        }


        


        if (!this.isDead) {
            if (this.hitBox.intersects(this.player.hitBox)) {
                this.player.health--;
            }
        }


        // if (!this.isRemoved) {

        // } 
        // if (this.isDead) {
        //     console.log('death ani')
        //     c.drawImage(
        //         this.image,  
        //         this.image.width/15*10,          
        //         0,          
        //         this.image.width/15,      
        //         this.image.height,           
        //         this.hitBox.x-95 - BoarderOffset.xLvlOffset,      
        //         this.hitBox.y-120 - BoarderOffset.yLvlOffset,
        //         this.image.width/15,
        //         this.image.height     
        //     );
        // }
        // else {
        //     c.drawImage(
        //         this.image,  
        //         this.image.width/15*10,          
        //         0,          
        //         this.image.width/15,      
        //         this.image.height,           
        //         this.hitBox.x-95 - BoarderOffset.xLvlOffset,      
        //         this.hitBox.y-120 - BoarderOffset.yLvlOffset,
        //         this.image.width/15,
        //         this.image.height     
        //     );
        // }



        if (GameController.showHitBoxes) {
            c.fillStyle = 'rgba(0,0,255,0.5)';
            c.fillRect(this.hitBox.x-BoarderOffset.xLvlOffset, this.hitBox.y-BoarderOffset.yLvlOffset,this.hitBox.width,this.hitBox.height)
        }


    }
}