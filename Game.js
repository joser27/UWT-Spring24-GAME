class Game {
    constructor() {
        this.levelLoader = new LevelLoader();
        this.player = new Player();
        this.slimeBoss = new SlimeBoss(this.player);
        this.villager = new Character('images/Human-Worker-Red.png', 13*104, 30*104)
        this.slime1 = new Slime(51,7,this.player,400);
        this.slime2 = new Slime(51,5,this.player,400);
        this.slime3 = new Slime(14,5,this.player,400);
        this.slime4 = new Slime(22,5,this.player,400);
        this.gameSound = new Audio('audio/Forest.wav');
        this.gameSound.volume = 0.5; // Set volume to 50%
        this.caveSound = new Audio('audio/enter-the-cave.mp3');
        this.bossMusic = new Audio('audio/level-boss.wav');
        this.bossLaughter = new Audio('audio/boss-laughter.mp3');
  
        this.slayedAllSlimes = false;
        this.addedFinalStageBlocker=false;
        this.isPlayingGameMusic = false;
        this.bossTick=0;
        this.bossFrames=0;
        this.wandHitBox = new Rectangle(0,0,10,10);

        this.wandImage = new Image();
        this.wandImage.src = 'images/wood earth wand.png'


        // this.slimes = [this.slime1, this.slime2, this.slime4];
        this.entities = [this.slime1, this.slime2, this.slime3, this.slime4,this.player];
        this.slimes = [this.slime1, this.slime2, this.slime3, this.slime4,];

    }

    playGameMusic() {
        if (this.player.hasMoved) {
            if (this.isPlayingGameMusic===false) {
                this.isPlayingGameMusic=true;
                
                this.gameSound.loop = true;
                this.gameSound.play();
            }
        }
    }
    update() {

        // Check for audio
        if (this.player.isInCave && !this.player.isFightingBoss) {
            this.caveSound.play();
            this.gameSound.pause();
        } else if (this.player.isFightingBoss) {
            this.caveSound.pause();
        } else {
            this.caveSound.pause();
            this.gameSound.play();
        }


        // Check if dead
        if (this.player.isDead) {
            GameController.GameState = GAME_STATES.GAME_OVER;
        }
        // Player update
        this.player.update();
        
        //Slimes update
        if (!this.slayedAllSlimes) {
            this.slimes.forEach(slime => {
                slime.update();
                adjustSlimePositions(this.entities);
                this.slimes = this.slimes.filter(slime => !slime.isRemoved);
                
            });
            
            if (this.slimes.length<=0) {
                this.slayedAllSlimes=true;
            }
        }


        //slime boss
        if (!this.slimeBoss.bossEscapeMode && !this.slimeBoss.isRemoved) {
            if (this.slayedAllSlimes && this.player.hitBox.x/104 > 43) {
                if (!this.addedFinalStageBlocker) {
                    addBossRoomLock();
                    this.addedFinalStageBlocker=true;
                    this.bossLaughter.play();   
                }
                this.bossTick++;
                this.slimeBoss.update();
                if (this.bossTick>300 && !this.slimeBoss.isDead) {    
                        this.bossMusic.play();
                }
                
            }
        } else if (!this.slimeBoss.isRemoved) {
                
                this.wandHitBox.x = this.slimeBoss.hitBox.x;
                this.wandHitBox.y = this.slimeBoss.hitBox.y;
                this.slimeBoss.update();
        }
        

        if (this.player.hitBox.intersects(this.wandHitBox)) {
            this.player.hasWizardsWand=true;
            this.wandHitBox.x =0;
            this.wandHitBox.y =0;
        }

        if (this.player.gaveWizardWand) {
            GameController.GameState = GAME_STATES.GAME_VICTORY;
        }


        
    }

    draw() {
        this.levelLoader.draw();
        if (GameController.showHitBoxes) {
            c.fillStyle='blue'
            c.fillRect(this.wandHitBox.x-BoarderOffset.xLvlOffset,this.wandHitBox.y-BoarderOffset.yLvlOffset,this.wandHitBox.width,this.wandHitBox.height)
            
        }

        // draw wand
        if (this.slimeBoss.isRemoved) {
            c.drawImage(
                this.wandImage,
                this.wandHitBox.x-BoarderOffset.xLvlOffset,
                this.wandHitBox.y-BoarderOffset.yLvlOffset,
                this.wandImage.width*2,
                this.wandImage.height*2)
        }
        this.player.draw();
        if (this.addedFinalStageBlocker) {
            if (!this.slimeBoss.isRemoved) {
                this.slimeBoss.draw();
            }
            
        }


        //c.drawImage(this.wandImage, this.wandCoord.x-BoarderOffset.xLvlOffset,this.wandCoord.y-BoarderOffset.yLvlOffset)
        this.slimes.forEach(slime => {
            slime.draw();
        });

        this.levelLoader.drawOverhang();

        if (this.player.isInCave && this.player.hasWizardsWand) {
            c.fillStyle = 'rgba(100,100,100,0.5)'
            c.fillRect(0,GameController.gameHeight/1.5,GameController.gameWidth,GameController.gameHeight)
            c.drawImage(this.player.playerImage, GameController.gameWidth/2+100,GameController.gameHeight/2,400,300);
            c.fillStyle = 'black'
            c.font = "30px 'Comic Sans MS', sans-serif";
            c.fillText("I've found the Wizard's Wand!", 30,450,undefined);
            c.fillText("I should give it back to him!", 30,480,undefined);
        }

        if (this.slimeBoss.enterFinalMode && !this.slimeBoss.isDead) {
            c.fillStyle = 'rgba(100,100,100,0.5)'
            c.fillRect(0,GameController.gameHeight/1.5,GameController.gameWidth,GameController.gameHeight)
            c.drawImage(this.player.playerImage, GameController.gameWidth/2+100,GameController.gameHeight/2,400,300);

            c.fillStyle = 'black'
            c.font = "30px 'Comic Sans MS', sans-serif";
            c.fillText("The Slime Goblin is making a run for it!", 30,450,undefined);
        }


    }

}