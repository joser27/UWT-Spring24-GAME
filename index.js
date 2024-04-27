const canvas = document.querySelector('canvas');

const c = canvas.getContext('2d');



canvas.width = 1024;
canvas.height = 576;

// Usage
const gameController = new GameController();
const gameLoop = new GameLoop(gameController);

gameController.setGameLoop(gameLoop);
gameLoop.startGameLoop();