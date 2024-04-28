
const collisionsMap = [];
for (let i = 0; i < collisions.length; i += 70) {
    collisionsMap.push(collisions.slice(i,70+i));
    

}
const boundaries = [];

for (let i = 0; i < 70; i++) {
    for (let j = 0; j < 40; j++) {
        const cellValue = collisionsMap[j][i];
        if (cellValue === 131 || cellValue === 2228) {
            const borderRectangle = new Rectangle(i * 104 , j * 104 , 104, 104);
            borderRectangle.isSolid = true; 
            boundaries.push(borderRectangle);
        }
        if (cellValue === 158) {
            const entranceRectangle = new Rectangle(i * 104 , j * 104 , 104, 104);
            entranceRectangle.isEntrance = true; 
            entranceRectangle.isSolid = false; 
            console.log("1")
            boundaries.push(entranceRectangle);
        }
        if (cellValue === 130) {
            const DialogRectangle = new Rectangle(i * 104 , j * 104 , 104, 104);
            DialogRectangle.isDialog = true; 
            DialogRectangle.isSolid = false; 
            boundaries.push(DialogRectangle);
        }
        if (cellValue === 2254) {
            const CaveEntrance = new Rectangle(i * 104 , j * 104 , 104, 104);
            CaveEntrance.isCaveEntrance = true;
            CaveEntrance.isSolid = false; 
            boundaries.push(CaveEntrance);
        }
        if (cellValue === 3254) {
            console.log("Exit here")
            const CaveExit = new Rectangle(i * 104 , j * 104 , 104, 104);
            CaveExit.isCaveExit = true; 
            CaveExit.isSolid = false; 
            boundaries.push(CaveExit);
        }
    }
}

function addCollisionBlock(k, l) {
    const block = new Rectangle(k * 104, l * 104, 104, 104);
    block.isSolid = true;
    boundaries.push(block);
}
function addBossRoomLock() {
    const block0 = new Rectangle(42 * 104, 4 * 104, 104, 104);
    const block1 = new Rectangle(42 * 104, 5 * 104, 104, 104);
    const block2 = new Rectangle(42 * 104, 6 * 104, 104, 104);
    block0.isSolid = true;
    block1.isSolid = true;
    block2.isSolid = true;
    boundaries.push(block0);
    boundaries.push(block1);
    boundaries.push(block2);
}
function removeBossRoomLock() {
    boundaries.pop(); 
    boundaries.pop(); 
    boundaries.pop(); 
}




console.log("Boundaries array:", boundaries);
console.log(boundaries.length);


const interior = [
    1, 1, 0, 0, 0, 1, 
    0, 0, 0, 0, 0, 0, 
    0, 0, 0, 0, 0, 0, 
    0, 0, 0, 0, 0, 0, 
    0, 0, 0, 0, 0, 0, 
    1, 0, 0, 0, 0, 1, 
];
class LevelLoader {

        constructor() {
            this.width = 1024;
            this.height = 576;

            this.image = new Image();
            this.image.src = 'mapZoomedv12.png';

            this.overHangImage = new Image();
            this.overHangImage.src = 'Overhang.png';
            //console.log(collisionsMap)
        }

        drawInterior() {
            // c.fillStyle = 'red'
            // c.fillRect(100,100,200,200)
                            

        }
        drawOverhang() {
            c.drawImage(this.overHangImage,0 - BoarderOffset.xLvlOffset,0 - BoarderOffset.yLvlOffset)

        }
        draw() {
            c.drawImage(this.image,0 - BoarderOffset.xLvlOffset,0 - BoarderOffset.yLvlOffset)

            if (GameController.showHitBoxes) {
                
                // for (let i = 0; i < 70; i++) {
                //     for (let j = 0; j < 40; j++) {
                //         const cellValue = collisionsMap[j][i];
                //         if (cellValue && !cellValue.isSolid) {
                //             c.fillStyle = 'rgba(255,0,0,0.3)'
                //             c.fillRect(i * 104 - BoarderOffset.xLvlOffset, j * 104 - BoarderOffset.yLvlOffset, 104, 104);
                //         }
                //     }
                // }
                // Draw all rectangles from the boundaries array
                boundaries.forEach(rectangle => {
                    c.fillStyle = 'rgba(0,0,255,0.3)';
                    c.fillRect(rectangle.x - BoarderOffset.xLvlOffset, rectangle.y - BoarderOffset.yLvlOffset, rectangle.width, rectangle.height);
                });
                
            }


            
            
        }
}