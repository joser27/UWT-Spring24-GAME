
const GAME_STATES = {
    PLAYING: 'PLAYING',
    MENU: 'MENU',
    GAME_OVER: 'GAME_OVER',
    GAME_VICTORY: 'GAME_VICTORY'
};



class GameController {
    static gameWidth = 1024;
    static gameHeight = 576;
    static showHitBoxes = false;
    static GameState = GAME_STATES.PLAYING;
    constructor() {
        this.game = new Game();
        //this.gameState = GAME_STATES.MENU;
        this.playing = new Playing(this.game);
        this.menu = new Menu();
        this.intro = new Intro();
        this.gameOver = new GameOver();
        this.celebration = new Celebration();
    }


    draw() {
        //console.log(GameController.GameState)
        c.fillStyle = 'white'
        c.fillRect(0,0,GameController.gameWidth,GameController.gameHeight);
        
        //Game states

        if (GameController.GameState === GAME_STATES.MENU) {
            this.intro.draw();
        }
        if (GameController.GameState === GAME_STATES.PLAYING) {
            this.game.draw();
        }
        if (GameController.GameState === GAME_STATES.GAME_OVER) {
            this.gameOver.draw();
        }
        if (GameController.GameState === GAME_STATES.GAME_VICTORY) {
            this.celebration.draw();
        }
    }

    setGameLoop(gameLoop) {
        this.gameLoop = gameLoop;
    }

}


