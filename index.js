const canvas = document.querySelector('canvas');
canvas.width = 1024;
canvas.height = 576;
const c = canvas.getContext('2d');



const collisionsMap = [];
for (let i = 0; i < collisions.length; i += 70) {
    collisionsMap.push(collisions.slice(i,70+i));
    

}



const boundaries = [];


const offset = {
    x: -400,
    y: -3000
}


collisionsMap.forEach((row, i) => {
    row.forEach((symbol, j) => {
        if (symbol === 131) {
        boundaries.push(
            new Boundary({
                position: {
                    x:j*Boundary.width + offset.x,
                    y:i*Boundary.height + offset.y,
                }
            }))
        }
    })
})
console.log(boundaries)

const image = new Image();
image.src = 'mapZoomed.png';

const playerImage = new Image();
playerImage.src = 'Human-Worker-Cyan.png'

const columns = 24; // Number of columns in the sprite sheet
const rows = 8; // Number of rows in the sprite sheet
// Calculate width and height of each frame
const frameWidth = 768 / columns;
const frameHeight = 256 / rows;




const player = new Sprite({
    position: {
        x: canvas.width / 2 - 768 / columns / 2, //Placement in the canvas,
        y: canvas.height / 2, //Placement in the canvas
    },
    image: playerImage,
    frames: {
        maxWidth: 24,
        maxHeight: 8
    }
})

const background = new Sprite({
    position: {
        x: offset.x,
        y: offset.y
    },
    image: image
})

const keys = {
    w: {
        pressed: false
    },
    a: {
        pressed: false
    },
    s: {
        pressed: false
    },
    d: {
        pressed: false
    }
}
console.log(collisions)





const moveables = [background, ...boundaries]

function rectangularCollision({rectangle1, rectangle2}) {
    return(rectangle1.position.x + rectangle1.width >= rectangle2.position.x &&
        rectangle1.position.x <= rectangle2.position.x + rectangle2.width &&
        rectangle1.position.y <= rectangle2.position.y + rectangle2.height &&
        rectangle1.position.y + rectangle1.height >= rectangle2.position.y)
}

function animate() {
    window.requestAnimationFrame(animate);

    background.draw();
    boundaries.forEach(boundary => {
        boundary.draw();

        if (rectangularCollision({
            rectangle1: player,
            rectangle2: boundary
        })) {
            console.log('COLIDES')
        }

    })
    
    c.fillRect(player.position.x,player.position.y,player.width,player.height)
    player.draw();


        // Movement
        let moving = true;
        player.moving = false;
        if (keys.w.pressed && lastKey === 'w') {
            player.moving = true;
            for (let i = 0; i <boundaries.length; i++) {
                const boundary = boundaries[i];
                if (rectangularCollision({
                    rectangle1: player,
                    rectangle2: {
                        ...boundary,
                        position: {
                            x: boundary.position.x,
                            y: boundary.position.y + 3
                        }
                    }
                })) {
                    console.log('DOG')
                    moving=false;
                    break;
                }
            }
        
            if (moving) {
                moveables.forEach((moveable) => {
                    moveable.position.y += 3
                })
            }
        }
        else if (keys.a.pressed && lastKey === 'a') {
            player.moving = true;
            for (let i = 0; i <boundaries.length; i++) {
                const boundary = boundaries[i];
                if (rectangularCollision({
                    rectangle1: player,
                    rectangle2: {
                        ...boundary,
                        position: {
                            x: boundary.position.x + 3,
                            y: boundary.position.y
                        }
                    }
                })) {
                    console.log('DOG')
                    moving=false;
                    break;
                }
            }
        
            if (moving) {
            moveables.forEach((moveable) => {
                moveable.position.x += 3
            })
            }
    
        }
        else if (keys.s.pressed && lastKey === 's') {
            player.moving = true;
            for (let i = 0; i <boundaries.length; i++) {
                const boundary = boundaries[i];
                if (rectangularCollision({
                    rectangle1: player,
                    rectangle2: {
                        ...boundary,
                        position: {
                            x: boundary.position.x,
                            y: boundary.position.y - 3
                        }
                    }
                })) {
                    console.log('DOG')
                    moving=false;
                    break;
                }
            }
        
            if (moving) {
            moveables.forEach((moveable) => {
                moveable.position.y -= 3
            })
            }

        }
        else if (keys.d.pressed && lastKey === 'd') {
            player.moving = true;
            for (let i = 0; i <boundaries.length; i++) {
                const boundary = boundaries[i];
                if (rectangularCollision({
                    rectangle1: player,
                    rectangle2: {
                        ...boundary,
                        position: {
                            x: boundary.position.x -3,
                            y: boundary.position.y
                        }
                    }
                })) {
                    console.log('DOG')
                    moving=false;
                    break;
                }
            }
        
            if (moving) {
            moveables.forEach((moveable) => {
                moveable.position.x -= 3
            })
            }

        }

}
animate();

let lastKey = ''
window.addEventListener('keydown', (e) => {
    switch(e.key) {
        case 'w':
            keys.w.pressed = true;
            lastKey = 'w'
            break
        case 'a':
            keys.a.pressed = true;
            lastKey = 'a'
            break
        case 's':
            keys.s.pressed = true;
            lastKey = 's'
            break
        case 'd':
            keys.d.pressed = true;
            lastKey = 'd'
            break
    }
})

window.addEventListener('keyup', (e) => {
    switch(e.key) {
        case 'w':
            keys.w.pressed = false;
            break
    
        case 'a':
            keys.a.pressed = false;
            break

        case 's':
            keys.s.pressed = false;
            break
        case 'd':
            keys.d.pressed = false;
            break
    }
})















