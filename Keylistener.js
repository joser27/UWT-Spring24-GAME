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

    
    window.addEventListener('keydown', (e) => {
            switch(e.key) {
                case 'w':
                    keys.w.pressed = true;
                    
                    break
                case 'a':
                    keys.a.pressed = true;
                    
                    break
                case 's':
                    keys.s.pressed = true;
                    
                    break
                case 'd':
                    keys.d.pressed = true;
                    lastKey = 'd'
                    break
                case 'l':
                    Player.isAttacking = true;
                    break
                case 'p':
                    GameController.GameState = GAME_STATES.PLAYING;
                    break
                case 'i':
                    sceneIntroPointer++;
                    wizardPointerIncrease();
                    break
                case 'e':
                    Player.UsedInteractKey = true;
                    break 
                case 'm':
                    
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
            case 'l':
                Player.isAttacking = false;
                break
            case 'e':
                keys.d.pressed = false;
                Player.UsedInteractKey = false;
                break
        }
    })
    


    
// Create a new checkbox element
const checkbox = document.createElement('input');
checkbox.type = 'checkbox';
checkbox.id = 'myCheckbox'; // Set an ID for the checkbox

// Create a label for the checkbox
const label = document.createElement('label');
label.textContent = 'Hixboxes';

// Add the checkbox and label to the body
document.body.appendChild(checkbox);
document.body.appendChild(label);

// Add event listener to the checkbox
checkbox.addEventListener('change', function() {
    if (this.checked) {
        GameController.showHitBoxes = true;
    } else {
        GameController.showHitBoxes = false;
    }
});






