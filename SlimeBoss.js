
bulletConstants = {
    
}

bulletsVariables = {
    hasReachedLeft:false,
    hasReachedRight:false,
}
class SlimeBoss {
    constructor(player) {
        this.player = player;
        this.image = new Image();
        this.image.onload = () => {
            this.width = this.image.width / 24 / 2;
            this.height = this.image.height / 8 / 2;
            //this.hitBox = new Rectangle(55 * 104, 5 * 104, this.width / 2, this.height / 2);
        };
        this.bossMusic = new Audio('level-boss.wav');
        this.bossLaughter = new Audio('boss-laughter.mp3');
        this.bossDeadSound = new Audio('death-sound-boss.wav');
        this.image.src = 'Orc-Peon-Cyan(1).png';
        this.aniIndex=0;
        this.aniSpeed=10;
        this.aniTick=0;
        this.aniCol=21;
        this.greenBulletImage = new Image();
        this.greenBulletImage.src = 'projectiles/bolt1_strip.png'
        this.hitBox = new Rectangle(0,0,60,60);
        this.isDead=false;
        this.isRemoved=false;
        this.movespeed = 3;

        this.bullet0 = new Rectangle(55 * 104, 4 * 104, 104/2, 104/2);
        this.bullet1 = new Rectangle(55 * 104, 6 * 104, 104/2, 104/2);
        this.bullet2 = new Rectangle(55 * 104, 8 * 104, 104/2, 104/2);
        this.bullet3 = new Rectangle(55 * 104, 10 * 104, 104/2, 104/2);

        this.bullet4 = new Rectangle(59 * 104, 4 * 104, 104/2, 104/2);
        this.bullet5 = new Rectangle(59 * 104, 6 * 104, 104/2, 104/2);
        this.bullet6 = new Rectangle(59 * 104, 8 * 104, 104/2, 104/2);
        this.bullet7 = new Rectangle(59 * 104, 10 * 104, 104/2, 104/2);

        this.bullet8 = new Rectangle(63 * 104, 4 * 104, 104/2, 104/2);
        this.bullet9 = new Rectangle(63 * 104, 6 * 104, 104/2, 104/2);
        this.bullet10 = new Rectangle(63 * 104, 8 * 104, 104/2, 104/2);
        this.bullet11 = new Rectangle(63 * 104, 10 * 104, 104/2, 104/2);
        this.enterFinalMode=false;
        this.bossEscapeMode=false;
        this.bullets = [this.bullet0,this.bullet1,this.bullet2,this.bullet3,this.bullet4,this.bullet5,this.bullet6,this.bullet7,this.bullet8,this.bullet9,this.bullet10,this.bullet11];

        this.facingDir=0;//0,1,2,3, Up down left right

        this.currFightPhase = 0;
        this.fightPhaseTick=0;
        this.phaseTwoStart=1000;
        this.phaseThreeStart=2000;

        this.slime0 = new Slime(44,5,this.player,900);
        this.slime1 = new Slime(54,7,this.player,900);
        this.slime2 = new Slime(54,9,this.player,900);

        this.slimes = [this.slime0,this.slime1]
        this.entities = [this.slime0,this.slime1,this.slime2, this.player]
        this.bossCollision = [this,this.player]
    }

    update() {
        
            this.bullets.forEach(bullet => {
                if (this.player.hitBox.intersects(bullet)) {
                    this.player.health--;
                }
            })
            
            this.fightPhaseTick++;
            if (this.fightPhaseTick < 1300 && this.fightPhaseTick > 300) {
                this.player.isFightingBoss=true;
                console.log("PHASE 1")
                this.introductionPhase();
            } else if (this.fightPhaseTick > 1300) {
                this.secondFightPhase();
            }
            if (this.slimes.length>0) {
                this.slimes = this.slimes.filter(slime => !slime.isRemoved);
            }
            if (this.slimes.length<=0) {
                
                this.finalFightPhase();
            }

            if (this.bossEscapeMode) {
                if (this.hitBox.x<7*104) {
                    GameController.GameState=GAME_STATES.GAME_OVER;
                }
                if (this.hitBox.intersects(this.player.attackHitBox)) {
                    this.isDead=true;
                    this.aniTick=0;
                    this.aniCol=20;
                }


                if (this.hitBox.x!=6*104) {
                    this.hitBox.x-=this.movespeed;
                }

                

                this.aniTick++;
                if (this.aniTick > this.aniSpeed) {
                    this.aniTick=0;
                    this.aniIndex++;
                    if (this.aniIndex > 3) {
                        this.aniIndex = 0;
                    }
                }
            }
            if (this.isDead) {
                this.player.isFightingBoss=false;
                this.bossDeadSound.play();
                this.bossEscapeMode=false;
                this.aniTick++;
                if (this.aniTick > 10) {
                    this.aniTick=0;
                    this.aniIndex++;
                    if (this.aniIndex > 4) {
                        this.aniIndex = 0;
                        this.isRemoved=true;
                    }
                }
            }

    }

    draw() {

        if (GameController.showHitBoxes) {
            c.fillStyle = 'blue'
            c.fillRect(this.hitBox.x-BoarderOffset.xLvlOffset,this.hitBox.y-BoarderOffset.yLvlOffset,this.hitBox.width,this.hitBox.height);
            
        }
        if (this.fightPhaseTick > 1300) {
            this.slimes.forEach(slimes => {
                slimes.draw();
            })
        }
        if (GameController.showHitBoxes) {
            this.bullets.forEach(bullet => {
                c.fillStyle = 'black'
                c.fillRect(bullet.x-BoarderOffset.xLvlOffset,bullet.y-BoarderOffset.yLvlOffset,bullet.width,bullet.height);
            })
        }

        if (this.fightPhaseTick < 300) {
            c.drawImage(
                this.image,  
                this.image.width/24*(this.aniCol + this.aniIndex),          
                this.image.height/8* this.facingDir,          
                this.image.width/24,      
                this.image.height/8,           
                600,      
                200,
                this.image.width/20,
                this.image.height/7     
            );
        }

        if (this.slimes.length<=0) {
            c.drawImage(
                this.image,  
                this.image.width/24*(this.aniCol + this.aniIndex),          
                this.image.height/8* 6,          
                this.image.width/24,      
                this.image.height/8,           
                this.hitBox.x-90-BoarderOffset.xLvlOffset,      
                this.hitBox.y-100-BoarderOffset.yLvlOffset,
                this.image.width/20,
                this.image.height/7     
            );
        }



        this.bullets.forEach(bullet => {
            c.fillStyle ='black'
            //c.fillRect(bullet.x-BoarderOffset.xLvlOffset,bullet.y-BoarderOffset.yLvlOffset,bullet.width,bullet.height);
            c.drawImage(
                this.greenBulletImage,
                0,             // sx: x-coordinate of the top-left corner of the sub-rectangle
                0,             // sy: y-coordinate of the top-left corner of the sub-rectangle
                this.greenBulletImage.width / 2,   // sWidth: width of the sub-rectangle (assuming image is split into 2 columns)
                this.greenBulletImage.height,       // sHeight: height of the sub-rectangle (assuming image is 1 row)
                bullet.x-14 - BoarderOffset.xLvlOffset,
                bullet.y - BoarderOffset.yLvlOffset,
                this.greenBulletImage.width/1.2,   // dWidth: width to draw the image on the canvas
                this.greenBulletImage.height       // dHeight: height to draw the image on the canvas
            );
            
            
        });
    }

    introductionPhase() {
        this.bullets.forEach(bullet => {
            if (bullet.x<42*104) {
                bulletsVariables.hasReachedLeft=true;
            }
            if (!bulletsVariables.hasReachedLeft) {
                let amplitude = 2; // Adjust this to make the wave higher or lower
                let frequency = 0.01; // Adjust this to make the wave more or less compact
                
                bullet.x -= 4;
                bullet.y += amplitude * Math.sin(frequency * bullet.x);
            } else {
                let amplitude = 10; // Adjust this to make the wave higher or lower
                let frequency = 0.05; // Adjust this to make the wave more or less compact
                
                bullet.x += 4;
                bullet.y -= amplitude * Math.sin(frequency * bullet.x);
                if (bullet.x > 57*104) {
                    bulletsVariables.hasReachedLeft=false;
                }
            }

        });
    }

    secondFightPhase() {
        this.slimes.forEach(slimes => {
            slimes.update();
            adjustSlimePositions(this.entities)
        })
        this.bullets.forEach(bullet => {
            if (bullet.x<42*104) {
                bulletsVariables.hasReachedLeft=true;
            }
            if (!bulletsVariables.hasReachedLeft) {
                let amplitude = 2; // Adjust this to make the wave higher or lower
                let frequency = 0.01; // Adjust this to make the wave more or less compact
                
                bullet.x -= 1;
                bullet.y += amplitude * Math.sin(frequency * bullet.x);
            } else {
                let amplitude = 4; // Adjust this to make the wave higher or lower
                let frequency = 0.05; // Adjust this to make the wave more or less compact
                
                bullet.x += 1;
                bullet.y -= amplitude * Math.sin(frequency * bullet.x);
                if (bullet.x > 57*104) {
                    bulletsVariables.hasReachedLeft=false;
                }
            }
        });
        
        
        
    }

    finalFightPhase() {
        if (!this.enterFinalMode) {
            removeBossRoomLock();
            this.enterFinalMode=true;
            this.bullets.splice(0, this.bullets.length);
            this.hitBox.x=55*104;
            this.hitBox.y=4*104;
            this.bossEscapeMode=true;
            this.aniCol=0;
            this.facingDir=0;


        }
    }
}