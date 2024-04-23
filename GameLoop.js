class GameLoop {
    
    constructor(gameController) {
        this.isRunning = true; // Flag to control the animation loop
        this.animate = this.animate.bind(this); // Bind the animate method to the instance
        this.gameController = gameController;
    }

    start() {
        this.isRunning = true;
        this.animate();
    }

    stop() {
        this.isRunning = false;
    }

    animate() {
        if (!this.isRunning) {
            return; // Exit the animation loop if isRunning is false
        }

        window.requestAnimationFrame(this.animate);
        if (GameController.GameState===GAME_STATES.GAME_OVER) {
            this.stop();
        } else{
            this.gameController.draw();
        }
        
    }
}