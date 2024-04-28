class Game {
    constructor() {
        this.levelLoader = new LevelLoader();
        this.player = new Player();
        this.slimeBoss = new SlimeBoss(this.player);
        this.villager = new Character('Human-Worker-Red.png', 13*104, 30*104)
        this.slime1 = new Slime(51,7,this.player,400);
        this.slime2 = new Slime(51,5,this.player,400);
        this.slime3 = new Slime(14,5,this.player,400);
        this.slime4 = new Slime(22,5,this.player,400);
        this.gameSound = new Audio('Forest.wav');
        this.caveSound = new Audio('enter-the-cave.mp3');
        this.bossMusic = new Audio('level-boss.wav');
        this.bossLaughter = new Audio('boss-laughter.mp3');
        this.playerIsInCave = false;
        this.playerImage = new Image();
        this.playerImage.src = 'images/VillagerProfile2.png'
        this.slayedAllSlimes = false;
        this.addedFinalStageBlocker=false;
        this.isPlayingGameMusic = false;
        this.bossTick=0;
        this.bossFrames=0;


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

        if (!this.slimeBoss.bossDeathMode) {
            if (this.slayedAllSlimes && this.player.hitBox.x/104 > 43) {
                if (!this.addedFinalStageBlocker) {
                    addBossRoomLock();
                    this.addedFinalStageBlocker=true;
                    this.bossLaughter.play();   
                }
                this.bossTick++;
                this.slimeBoss.update();
                if (this.bossTick>300) {    
                        this.bossMusic.play();
                }
                
            }
        } else {
            this.slimeBoss.update();
        }

        

        
    }

    draw() {
        this.levelLoader.draw();
        this.player.draw();
        if (this.addedFinalStageBlocker) {
            this.slimeBoss.draw();
        }
        
        this.slimes.forEach(slime => {
            slime.draw();
        });

        this.levelLoader.drawOverhang();


    }

}