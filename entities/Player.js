
let isCheating = false;

const PlayerConstants = {
    RUNNING_UP: 4,
    RUNNING_DOWN: 0,
    RUNNING_LEFT: 6,
    RUNNING_RIGHT: 2,
    IDLE: 4,
    ATTACK: 5,
    HIT: 6,
};

const Directions = {
    UP: 0,
    DOWN: 1,
    LEFT: 2,
    RIGHT: 3,
}

let Animations = {
    aniTick: 0, aniIndex: 0, aniSpeed: 10, aniCol: 0, aniRow: 0,
    playerAction: PlayerConstants.IDLE,
    playerDir: 2,
    offset: 0,
    facingDir: 0,
}

const BoarderOffset = { //1024x576
    // xLvlOffset
    xLvlOffset: 0,
    leftBorder: (0.5 * 1024),
    rightBorder: (0.5 * 1024),

    // yLvlOffset
    yLvlOffset: 0,
    topBorder: (0.5 * 576),
    bottomBorder: (0.5 * 576),
}



const PLAYER_DIALOG = {
    INNIT_DIALOG: 0,
    OUTSIDE: false,
    OUTSIDE: false,
    OUTSIDE: false,
}

let introSceneArray = [1,2,3,4,5,6]
let sceneIntroPointer = 0;

let WizardSceneArray = [0,1,2,3,4,5,6,7,8,9,10]
let WizardScenePointer = 0;

class Player {
    static isOutside = false;
    static UsedInteractKey = false;
    static isAttacking = false;
    constructor() {
        this.image = new Image();
        this.image.onload = () => {
            this.width = this.image.width / 24 / 2;
            this.height = this.image.height / 8 / 2;
            this.hitBox = new Rectangle(67 * 104, 3 * 104, this.width / 2, this.height / 2);
            this.attackHitBox = new Rectangle(this.hitBox.x, this.hitBox.y, 50, 50);
        };
        this.image.src = 'images/Human-Worker-Cyan.png';
        this.moveSpeed = 4;
        this.isDead=false;
        this.moving = false;
        this.isInCave = false;
        this.readyToGoOut = false;
        this.canMove = true;
        this.hasMoved = false;
        this.spokeWithWizard = false;
        this.hasWizardsWand = false;
        
        this.gaveWizardWand = false;
        this.isFightingBoss=false;
        this.playerImage = new Image();
        this.playerImage.src = 'images/VillagerProfile2.png'
        this.villagerImage = new Image();
        this.villagerImage.src = 'images/VillagerProfile1.png';

        this.wizardImage = new Image();
        this.wizardImage.src = 'images/WizardProfile.png';

        this.health = 100;
        this.swordSFX = new Audio('audio/swing-sword.mp3');
    }

    update() {
        if (this.hitBox.y<1200 && this.hitBox.x<6000) {
            this.isInCave=true;
        } else {
            this.isInCave=false;
        }
        isCheating=GameController.enableCheats;
        
        
        if (this.health<=0) {
            this.isDead=true;
        }
        if (Player.isAttacking) {
            this.swordSFX.play();
            switch(Animations.facingDir) {
                case 0:
                    
                    this.attackHitBox.x = this.hitBox.x;
                    this.attackHitBox.y = this.hitBox.y-25;
                    break;
                case 1:
                    
                    this.attackHitBox.x = this.hitBox.x;
                    this.attackHitBox.y = this.hitBox.y+15;
                    break;
                case 2:
                    
                    this.attackHitBox.x = this.hitBox.x-25;
                    this.attackHitBox.y = this.hitBox.y;
                    break;
                case 3:
                    
                    this.attackHitBox.x = this.hitBox.x+25;
                    this.attackHitBox.y = this.hitBox.y;
                    break;
                default:
                    
                    break;
            }
            Animations.aniCol=5
        } else {
            
            this.attackHitBox.x = 0
            this.attackHitBox.y = 0
            Animations.aniCol=0
        }
        if (!Player.isAttacking && !this.moving) {
            Animations.aniIndex=0
        } 
        this.checkCloseToBorder();
        if (this.canMove) {
            this.updatePlayerMovement();
        }
    }

    /*
    * Drawing function
    *
    *
    */
    draw() {



        if (this.isInCave) {
            c.fillStyle = 'red';
            c.strokeRect(this.hitBox.x-20-BoarderOffset.xLvlOffset,this.hitBox.y-80-BoarderOffset.yLvlOffset,100,30)
            c.fillRect(this.hitBox.x-20-BoarderOffset.xLvlOffset,this.hitBox.y-80-BoarderOffset.yLvlOffset,this.health,30)
        }
        
        this.introDialog();
        this.wizardDialog();

        if (GameController.showHitBoxes) {
            c.fillStyle = 'black'
            c.font = "40px 'Comic Sans MS', sans-serif";
            c.fillText("Player X: " + Math.floor(this.hitBox.x/104) + " Y: " + Math.floor(this.hitBox.y/104), 100, 100, 200);
        }

        boundaries.forEach(boundary => {
            if (boundary.isEntrance) {
                if (this.hitBox.intersects(boundary)) {
                    c.fillStyle = 'black'
                    c.font = "40px 'Comic Sans MS', sans-serif";
                    c.fillText("'E' to exit ", GameController.gameWidth/2-60, GameController.gameHeight/2/2, 200);
                    this.readyToGoOut = true;
                    if (this.readyToGoOut && Player.UsedInteractKey) {
                        this.hitBox.x = 45*104;
                        this.hitBox.y = 26*104;
                        this.readyToGoOut = false;
                        Player.InputToGoOut = false;
                        Player.isOutside = true;
                        PLAYER_DIALOG.INNIT_DIALOG++;
                        
                    }
                } else{
                    this.readyToGoOut = false;
                }
            }

            
            if (boundary.isDialog) {
                if (this.hitBox.intersects(boundary)) {
                    c.fillStyle = 'black'
                    c.font = "40px 'Comic Sans MS', sans-serif";
                    c.fillText("'E' to Speak ", GameController.gameWidth/2-60, GameController.gameHeight/2/2, 200);
                    if (Player.UsedInteractKey) {
                        this.spokeWithWizard=true;
                        if (this.hasWizardsWand===false) {
                            WizardScenePointer = 1;
                        } else {
                            WizardScenePointer = 7;
                        }
                    }
                }
            }
            if (this.spokeWithWizard) {
                if (boundary.isCaveEntrance) {
                    if (this.hitBox.intersects(boundary)) {
                        c.fillStyle = 'black'
                        c.font = "40px 'Comic Sans MS', sans-serif";
                        c.fillText("'E' to Enter Cave", GameController.gameWidth/2-60, GameController.gameHeight/2/2, 200);
                        if (Player.UsedInteractKey) {
                            this.hitBox.x = 7*104;
                            this.hitBox.y = 4*104;
                        }
                        
                    }
                }
            }


            if (boundary.isCaveExit) {
                if (this.hitBox.intersects(boundary)) {
                    c.fillStyle = 'black'
                    c.font = "40px 'Comic Sans MS', sans-serif";
                    c.fillText("'E' to Exit Cave ", GameController.gameWidth/2-60, GameController.gameHeight/2/2, 200);
                    if (Player.UsedInteractKey) {
                        this.hitBox.x = 6*104;
                        this.hitBox.y = 16*104;
                    }
                    
                }
            }
            

        })
        
        
        c.fillStyle = 'red';
        //c.fillRect(0,0,100,100)
        if (GameController.showHitBoxes) {
                        
            c.fillStyle = 'black'
            
            c.fillRect(this.attackHitBox.x-BoarderOffset.xLvlOffset,this.attackHitBox.y-BoarderOffset.yLvlOffset,this.attackHitBox.width,this.attackHitBox.height)

            c.strokeRect(this.hitBox.x - BoarderOffset.xLvlOffset,this.hitBox.y - BoarderOffset.yLvlOffset,this.hitBox.width,this.hitBox.height)
        }


        c.drawImage(
            this.image,  
            this.image.width/24 * (Animations.aniCol + Animations.aniIndex),          
            this.image.height/8 * Animations.playerDir,          
            this.image.width/24,      
            this.image.height/8,           
            this.hitBox.x-78 - BoarderOffset.xLvlOffset,      
            this.hitBox.y-80 - BoarderOffset.yLvlOffset,
            this.image.width/24,
            this.image.height/8     
        );

        

    }


    
    updatePlayerMovement() {
        if (isCheating) {
            this.moveSpeed=14
            this.health=100
        } 
        this.moving = false;    
        let tempHitBox = new Rectangle(this.hitBox.x, this.hitBox.y, this.hitBox.width, this.hitBox.height);    
        if (keys.w.pressed) {
            this.moving = true;
            Animations.facingDir = 0;
            Animations.playerDir = PlayerConstants.RUNNING_UP;
            tempHitBox.y = tempHitBox.y - this.moveSpeed;
            boundaries.forEach(boundary => {
                if (tempHitBox.intersects(boundary) && boundary.isSolid) {
                    if (!isCheating) {
                        this.moving = false;
                    }
                }
            });
            

            if (this.moving) {
                this.hitBox.y -= this.moveSpeed;
            }
        }
        if (keys.a.pressed) {
            this.moving = true;
            Animations.playerDir = PlayerConstants.RUNNING_LEFT;
            Animations.facingDir = 2;
            tempHitBox.x = tempHitBox.x - this.moveSpeed;
            boundaries.forEach(boundary => {
                if (tempHitBox.intersects(boundary) && boundary.isSolid) {
                    if (!isCheating) {
                        this.moving = false;
                    }
                }
            }) 
            if (this.moving) {
                this.hitBox.x-=this.moveSpeed;
            }
            
        }
        if (keys.s.pressed) {
            this.moving = true;
            Animations.playerDir = PlayerConstants.RUNNING_DOWN;
            Animations.facingDir = 1;
            tempHitBox.y = tempHitBox.y + this.moveSpeed;
            boundaries.forEach(boundary => {
                if (tempHitBox.intersects(boundary) && boundary.isSolid) {
                    if (!isCheating) {
                        this.moving = false;
                    }
                }
            }) 

            if (this.moving) {
                this.hitBox.y+= this.moveSpeed;
            }
        }
        if (keys.d.pressed) {
            this.moving = true;
            Animations.playerDir = PlayerConstants.RUNNING_RIGHT;
            Animations.facingDir = 3;
            tempHitBox.x = tempHitBox.x + this.moveSpeed;
            boundaries.forEach(boundary => {
                if (tempHitBox.intersects(boundary) && boundary.isSolid) {
                    if (!isCheating) {
                        this.moving = false;
                    }
                    
                }
            }) 

            if (this.moving) {
                this.hitBox.x+= this.moveSpeed;
            }
        }
        
        if (this.moving || Player.isAttacking) {
            this.hasMoved=true;
        
            Animations.aniTick++;
            if (Animations.aniTick > Animations.aniSpeed) {
                Animations.aniTick=0;
                Animations.aniIndex++;
                
                if (Animations.aniIndex > 3) {
                    Animations.aniIndex = 0;
                }
            }
        } 
    }


	checkCloseToBorder() {
		let playerX = this.hitBox.x;
		let diff = playerX - BoarderOffset.xLvlOffset;

		if (diff > BoarderOffset.rightBorder)
        BoarderOffset.xLvlOffset += diff - BoarderOffset.rightBorder;
		else if (diff < BoarderOffset.leftBorder)
        BoarderOffset.xLvlOffset += diff - BoarderOffset.leftBorder;


        //yLvlOffset
        let playerY = this.hitBox.y;
		let diffY = playerY - BoarderOffset.yLvlOffset;

		if (diffY > BoarderOffset.topBorder)
        BoarderOffset.yLvlOffset += diffY - BoarderOffset.topBorder;
		else if (diffY < BoarderOffset.bottomBorder)
        BoarderOffset.yLvlOffset += diffY - BoarderOffset.bottomBorder;

	}


    introDialog() {
        if (PLAYER_DIALOG.INNIT_DIALOG > 0) {
            this.canMove = false;
            c.fillStyle = 'rgba(100,100,100,0.5)'
            c.fillRect(0,GameController.gameHeight/1.5,GameController.gameWidth,GameController.gameHeight)
            c.drawImage(this.villagerImage, GameController.gameWidth/2,GameController.gameHeight/2 - GameController.gameHeight/4,500,400);

            if (introSceneArray[sceneIntroPointer]===1) {
                c.fillStyle = 'black'
                c.font = "22px 'Comic Sans MS', sans-serif";
                c.fillText("Mr. Willow: Oh, hello there! Yes, we're missing the Spring", 30,420,undefined)
                c.fillText("Bloom Orchid. It's a rare flower that blooms only once a year,", 30,450,undefined)
                c.fillText("and it's essential for the festival's centerpiece.", 30,480,undefined)
                c.fillText("Without it, the festival just won't be the same. ", 30,510,undefined)
                c.fillStyle = 'black'
                c.font = "20px 'Comic Sans MS', sans-serif";
                c.fillText("Press 'i' for next dialog", 120,560,undefined)
            }
            if (introSceneArray[sceneIntroPointer]===2) {
                c.fillStyle = 'black'
                c.font = "22px 'Comic Sans MS', sans-serif";
                c.fillText("Me: Oh no, that sounds important! Where can ", 30,420,undefined)
                c.fillText("we find this Spring Bloom Orchid?", 30,450,undefined)
                c.fillText("Press 'i' for next dialog", 120,560,undefined)
            }
            if (introSceneArray[sceneIntroPointer]===3) {
                c.fillStyle = 'black'
                c.font = "22px 'Comic Sans MS', sans-serif";
                c.fillText("MW: You should seek out the Wizard who lives in the far", 30,420,undefined)
                c.fillText("west of the forest. He might have the knowledge and magic  ", 30,450,undefined)
                c.fillText("to help you find the Spring Bloom Orchid. ", 30,480,undefined)
                c.fillText("Press 'i' for next dialog", 120,560,undefined)
            }
            if (introSceneArray[sceneIntroPointer]===4) {
                c.fillStyle = 'black'
                c.font = "22px 'Comic Sans MS', sans-serif";
                c.fillText("Me: The Wizard? Alright, I'll go talk to him and see if he  ", 30,420,undefined)
                c.fillText("can help. The festival won't be complete without that flower!  ", 30,450,undefined)
                c.fillText("Press 'i' for next dialog", 120,560,undefined)
            }
            if (introSceneArray[sceneIntroPointer]>4) {
                PLAYER_DIALOG.INNIT_DIALOG = -1
                this.canMove = true;
            }
        }
    }

    wizardDialog() {
        if (WizardScenePointer>0 && WizardScenePointer<7) {
            this.canMove = false;
            c.fillStyle = 'rgba(100,100,100,0.5)'
            c.fillRect(0,GameController.gameHeight/1.5,GameController.gameWidth,GameController.gameHeight)
            c.drawImage(this.wizardImage, GameController.gameWidth/2 +100,GameController.gameHeight/2 - GameController.gameHeight/8,400,300);

            if (WizardSceneArray[WizardScenePointer] === 1) {
                c.fillStyle = 'black'
                c.font = "22px 'Comic Sans MS', sans-serif";
                c.fillText("Me: Hello, Mr. Wizard! Mr. Willow sent me to ask about", 30,420,undefined)
                c.fillText("the Spring Bloom Orchid for the Spring Festival.", 30,450,undefined)
                c.fillText("and it's essential for the festival's centerpiece.", 30,480,undefined)
                c.fillText("Without it, the festival just won't be the same. ", 30,510,undefined)
                c.fillStyle = 'black'
                c.font = "20px 'Comic Sans MS', sans-serif";
                c.fillText("Press 'i' for next dialog", 120,560,undefined)  
            }
            
            if (WizardSceneArray[WizardScenePointer] === 2) {
                c.fillStyle = 'black'
                c.font = "22px 'Comic Sans MS', sans-serif";
                c.fillText("Wizard: Hmph, Mr. Willow and his festivals...", 30,420,undefined)
                c.fillText("What's in it for me?", 30,450,undefined)
                c.fillText("Press 'i' for next dialog", 120,560,undefined)  
            }
            if (WizardSceneArray[WizardScenePointer] === 3) {
                c.fillStyle = 'black'
                c.font = "22px 'Comic Sans MS', sans-serif";
                c.fillText("Me: Well, if we find the Spring Bloom Orchid, ", 30,420,undefined)
                c.fillText("the festival will be a success, and everyone will have a great time!", 30,450,undefined)
                c.fillText("Press 'i' for next dialog", 120,560,undefined)  
            }
            if (WizardSceneArray[WizardScenePointer] === 4) {
                c.fillStyle = 'black'
                c.font = "22px 'Comic Sans MS', sans-serif";
                c.fillText("Wizard: Pah! Forget the orchid. I have more pressing matters.", 30,420,undefined)
                c.fillText("One of those pesky cave-dwelling slimes took my wand!  ", 30,450,undefined)
                c.fillText("Retrieve it for me, and then we'll talk about your precious flower. ", 30,480,undefined)
                c.fillText("Press 'i' for next dialog", 120,560,undefined)  
            }
            if (WizardSceneArray[WizardScenePointer] === 5) {
                c.fillStyle = 'black'
                c.font = "22px 'Comic Sans MS', sans-serif";
                c.fillText("Wizard: Look in the north cave. That's where those pesky slimes", 30,420,undefined)
                c.fillText("seem to come from. Just be careful, they're trickier than they look.", 30,450,undefined)
                c.fillText("Press 'i' for next dialog", 120,560,undefined)  
            }
            if ((WizardSceneArray[WizardScenePointer] === 6)) {
                this.canMove = true;
                WizardScenePointer=0;
            }
        } 
        if (WizardScenePointer>=7 && WizardScenePointer < 9) {
            this.canMove = false;
            c.fillStyle = 'rgba(100,100,100,0.5)'
            c.fillRect(0,GameController.gameHeight/1.5,GameController.gameWidth,GameController.gameHeight)
            c.drawImage(this.wizardImage, GameController.gameWidth/2 +100,GameController.gameHeight/2 - GameController.gameHeight/8,400,300);

            if (WizardSceneArray[WizardScenePointer] === 7) {
                c.fillStyle = 'black';
                c.font = "22px 'Comic Sans MS', sans-serif";
                c.fillText("Wizard: By the stars! You've returned with my wand!", 30, 420, undefined);
                c.fillText("I've been trying to reclaim it for ages! You have my deepest", 30, 450, undefined);
                c.fillText("gratitude.", 30, 480, undefined);
                c.fillStyle = 'black';
                c.font = "20px 'Comic Sans MS', sans-serif";
                c.fillText("Press 'i' for next dialog", 120, 560, undefined);
            }
            
            if (WizardSceneArray[WizardScenePointer] === 8) {
                c.fillStyle = 'black';
                c.font = "22px 'Comic Sans MS', sans-serif";
                c.fillText("Wizard: Now, let me fulfill my promise. With the power ", 30, 420, undefined);
                c.fillText("of my magic, I shall summon forth the Spring Bloom", 30, 450, undefined);
                c.fillText("Orchid for the festival!", 30, 480, undefined);
                c.fillStyle = 'black';
                c.font = "20px 'Comic Sans MS', sans-serif";
                c.fillText("Press 'i' for next dialog", 120, 560, undefined);
            }
        }
        if (WizardSceneArray[WizardScenePointer] === 9) {
            this.canMove=true;
            this.gaveWizardWand=true;
        }

    }

}

function introScenePointerIncrease() {
    if (sceneIntroPointer>0) {
        sceneIntroPointer++;
    }
}
function wizardPointerIncrease() {
    if (WizardScenePointer>0) {
        WizardScenePointer++;
    }
}