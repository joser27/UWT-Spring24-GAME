

class Intro {
    constructor() {
        // this.image = new Image();
        // this.image.src = 'images/Celebration1.png'

        // this.image2 = new Image();
        // this.image2.src = 'images/Celebration2.png'
        
        // this.image3 = new Image();
        // this.image3.src = 'images/Celebration3.png'
        
        // this.image4 = new Image();
        // this.image4.src = 'images/VillagerProfile1.png'

        this.image5 = new Image();
        this.image5.src = 'images/VillagerProfile2.png'

        // this.image6 = new Image();
        // this.image6.src = 'images/WizardProfile.png'

        this.image7 = new Image();
        this.image7.src = 'images/Background.png'
        
    }

    draw() {
        c.drawImage(this.image7,0,0);
        c.fillStyle = 'rgba(255,255,255,0.3 )'
        c.fillRect(0,0,GameController.gameWidth,GameController.gameHeight)
        c.fillStyle = 'black'
        c.font = "40px 'Comic Sans MS', sans-serif";
        c.fillText("Press 'p' to play", 1024/2-160,576/2-100,undefined)
        c.fillText("WASD to move, 'L' to attack", 1024/2-300,576/2+200,undefined)
    }
}