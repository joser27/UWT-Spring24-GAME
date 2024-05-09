

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
            c.drawImage(this.image7, 0, 0, 1024, 576);
            c.drawImage(this.image5, 0,0,1024, 576);
    }
}