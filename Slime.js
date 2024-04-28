

class Slime {
    constructor(x,y, Player, lineOfSight){
        this.image = new Image();
        this.image.src = 'Slime.png';
        this.hitBox = new Rectangle(x*104,y*104,80,40)
        this.player = Player;
        this.speed = 1;
        this.lineOfSight = lineOfSight;
        this.health = 1;
        this.isDead = false;
        this.isRemoved = false;
        this.deathTick=0;
        this.deathAni=9;
        this.playedDeathSound = false;

        this.deathSound = new Audio('splat-sound.mp3');
        this.playedSound = false;
        this.aniTick=0;
        this.aniIndex=0;
        this.aniSpeed = 10;
    }

    playDeathSound() {
        if (!this.playedDeathSound) {
            this.deathSound.play();
            this.playedDeathSound=true;
        }
    }

    update() {
        if (this.health <= 0) {
            this.isDead = true;
        }
        if (this.hitBox.intersects(this.player.attackHitBox)) {
            if (this.health>0) {
                this.health--;
            }
        }
        if (this.isDead) {
            this.playDeathSound();
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
        }
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
            this.aniTick++;
            if (this.aniTick > this.aniSpeed) {
                this.aniTick=0;
                this.aniIndex++;
                
                if (this.aniIndex > 5) {
                    this.aniIndex = 0;
                }
            }
        } else {
            this.aniIndex=0;
        }


        if (!this.isDead) {
            if (this.hitBox.intersects(this.player.hitBox)) {
                this.player.health--;
            }
        }

    }
    draw() {
        c.fillStyle='red'
        c.fillRect(this.hitBox.x-15-BoarderOffset.xLvlOffset,this.hitBox.y-70-BoarderOffset.yLvlOffset,this.health,30)

        if (this.isDead) {

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
        } else {
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
        }

        if (GameController.showHitBoxes) {
            c.fillStyle = 'rgba(0,0,255,0.5)';
            c.fillRect(this.hitBox.x-BoarderOffset.xLvlOffset, this.hitBox.y-BoarderOffset.yLvlOffset,this.hitBox.width,this.hitBox.height)
        }
    }
    

}

function adjustSlimePositions(slimes) {
    for (let i = 0; i < slimes.length; i++) {
        for (let j = i + 1; j < slimes.length; j++) {
            const slime1 = slimes[i];
            const slime2 = slimes[j];

            if (slime1.hitBox.intersects(slime2.hitBox)) {
                const dx = slime1.hitBox.centerX() - slime2.hitBox.centerX();
                const dy = slime1.hitBox.centerY() - slime2.hitBox.centerY();

                // Move slimes away from each other along the direction of overlap
                if (Math.abs(dx) > Math.abs(dy)) {
                    const overlapX = (slime1.hitBox.width + slime2.hitBox.width) / 2 - Math.abs(dx);
                    const moveX = overlapX / 2;

                    if (dx < 0) {
                        slime1.hitBox.x -= moveX;
                        slime2.hitBox.x += moveX;
                    } else {
                        slime1.hitBox.x += moveX;
                        slime2.hitBox.x -= moveX;
                    }
                } else {

                    const overlapY = (slime1.hitBox.height + slime2.hitBox.height) / 2 - Math.abs(dy);
                    const moveY = overlapY / 2;

                    if (dy < 0) {
                        slime1.hitBox.y -= moveY;
                        slime2.hitBox.y += moveY;
                    } else {
                        slime1.hitBox.y += moveY;
                        slime2.hitBox.y -= moveY;
                    }
                }
            }
        }
    }
}