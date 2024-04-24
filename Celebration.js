class Celebration {
    constructor() {
        this.image = new Image();
        this.image.src = 'images/Celebration1.png'

        this.image2 = new Image();
        this.image2.src = 'images/Celebration2.png'
        
        this.image3 = new Image();
        this.image3.src = 'images/Celebration3.png'

        this.image7 = new Image();
        this.image7.src = 'images/Background.png'
    }

    draw() {
        c.drawImage(this.image3, 0, 0, 1024, 576);
        // if (introSceneArray[scenePointer]===1) {
        //     c.drawImage(this.image, 0, 0, 1024, 576);
        // }
        // if (introSceneArray[scenePointer]===2) {
        //     c.drawImage(this.image2, 0,0,1024, 576);
        // }
        // if (introSceneArray[scenePointer]===3) {
        //     c.drawImage(this.image3, 0,0,1024, 576);
        // }
    }
}