class GameOver {
    constructor() {

    }

    draw() {
        c.fillStyle = 'rgba(0,0,0,0.7)'
        c.fillRect(0,0,1024,576);

        c.fillStyle = 'white'
        c.font = "40px 'Comic Sans MS', sans-serif";
        c.fillText("GAME OVER", 1024/2-100, 576/4, undefined);
    
    }
}