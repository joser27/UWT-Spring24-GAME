

class Intro {
    constructor() {
        this.image = new Image();
        this.image.src = 'images/Celebration1.png'

        this.image2 = new Image();
        this.image2.src = 'images/Celebration2.png'
        
        this.image3 = new Image();
        this.image3.src = 'images/Celebration3.png'
        
        this.image4 = new Image();
        this.image4.src = 'images/VillagerProfile1.png'

        this.image5 = new Image();
        this.image5.src = 'images/VillagerProfile2.png'

        this.image6 = new Image();
        this.image6.src = 'images/WizardProfile.png'

        this.image7 = new Image();
        this.image7.src = 'images/Background.png'
        
    }

    draw() {
        if (introSceneArray[scenePointer]===1) {
            c.drawImage(this.image, 0, 0, 1024, 576);
        }
        if (introSceneArray[scenePointer]===2) {
            c.drawImage(this.image2, 0,0,1024, 576);
        }
        if (introSceneArray[scenePointer]===3) {
            c.drawImage(this.image3, 0,0,1024, 576);
        }
        if (introSceneArray[scenePointer]===4) {
            c.drawImage(this.image7, 0,0,1024, 576);
            c.fillStyle = 'rgba(100,100,100,0.5)'
            c.fillRect(0,GameController.gameHeight/1.5,GameController.gameWidth,GameController.gameHeight)
            c.drawImage(this.image4, GameController.gameWidth/2,GameController.gameHeight/2 - GameController.gameHeight/4,500,400);
        }
        if (introSceneArray[scenePointer]===5) {
            c.drawImage(this.image7, 0,0,1024, 576);
            c.fillStyle = 'rgba(100,100,100,0.5)'
            c.fillRect(0,GameController.gameHeight/1.5,GameController.gameWidth,GameController.gameHeight)
            c.drawImage(this.image5, GameController.gameWidth/2,GameController.gameHeight/2 - GameController.gameHeight/4,500,400);
        }
        if (introSceneArray[scenePointer]===6) {
            c.drawImage(this.image7, 0,0,1024, 576);
            c.fillStyle = 'rgba(100,100,100,0.5)'
            c.fillRect(0,GameController.gameHeight/1.5,GameController.gameWidth,GameController.gameHeight)
            c.drawImage(this.image6, GameController.gameWidth/2,GameController.gameHeight/2 - GameController.gameHeight/4,500,400);
        }
        
    }
}