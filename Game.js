class Game {
    constructor() {
        this.levelLoader = new LevelLoader();
        this.player = new Player();
        this.villager = new Character('Human-Worker-Red.png', 13*104, 30*104)
        this.slime1 = new Slime(51,7,this.player, 1, 400);
        this.slime2 = new Slime(51,5,this.player, 1.5, 400);
        this.slime3 = new Slime(14,5,this.player, 1, 300);
        this.slime4 = new Slime(22,5,this.player, 1, 300);

        this.slimes = [this.slime1, this.slime2, this.slime3, this.slime4,];

    }

    draw() {

        this.levelLoader.draw()
        this.player.draw();
        // this.slime1.draw();
        // this.slime2.draw();
        // this.slime3.draw();
        // this.slime4.draw();
        this.adjustSlimePositions();
        if (this.player.health<0) {
            GameController.GameState = GAME_STATES.GAME_OVER; 
        }

        this.slimes.forEach(slime => {
            slime.draw();
            
            // Check for player attack collision
            if (slime.hitBox.intersects(this.player.attackHitBox)) {
                slime.health--;
            }
        
            // Check if slime is dead
            if (slime.health < 0) {
                slime.isDead = true;
            }
        });
        
        // Remove dead slimes from the array
        this.slimes = this.slimes.filter(slime => !slime.isDead);
        

        this.levelLoader.drawOverhang()
    }



    adjustSlimePositions() {
        const slimes = [this.slime1, this.slime2, this.slime3, this.slime4, this.player];

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
}