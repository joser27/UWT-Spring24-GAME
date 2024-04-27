class GameLoop {
    constructor(gameController) {
        this.gameController = gameController;
        this.desiredFPS = 60; // Set your desired frames per second
        this.previousFrameTime = 0;
        this.timeAccumulator = 0;
        this.frameTime = 1000 / this.desiredFPS;
        this.animationFrameId;
        this.updates = 0;
        this.frames = 0;
        this.previousFPSTime = performance.now(); // Initialize previous time for FPS calculation
    }

    startGameLoop() {
        this.animationFrameId = window.requestAnimationFrame(this.gameLoop.bind(this));
    }

    stopGameLoop() {
        window.cancelAnimationFrame(this.animationFrameId);
    }

    gameLoop(currentTime) {
        this.animationFrameId = window.requestAnimationFrame(this.gameLoop.bind(this));
    
        var deltaTime = currentTime - this.previousFrameTime;
        this.previousFrameTime = currentTime;
        this.timeAccumulator += deltaTime;
    
        // Cap the maximum accumulated time to prevent spiral of death
        if (this.timeAccumulator > 1000) {
            this.timeAccumulator = 1000;
        }
    
        while (this.timeAccumulator >= this.frameTime) {
            this.update(); // Update game logic
            this.timeAccumulator -= this.frameTime;
            this.updates++; // Increment updates counter
        }
    
        this.draw(); // Render the game
        this.frames++; // Increment frames counter
    
        // Log updates per second (UPS) and frames per second (FPS) every second
        if (currentTime - this.previousFPSTime >= 1000) {
            console.log("UPS:", this.updates);
            console.log("FPS:", this.frames);
            this.updates = 0;
            this.frames = 0;
            this.previousFPSTime = currentTime;
        }
    }
    

    update() {
        this.gameController.update();
    }

    draw() {
        this.gameController.draw();
    }
}
