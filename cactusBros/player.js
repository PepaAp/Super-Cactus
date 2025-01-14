
class Player {
    constructor(){
        this.x = 0
        this.lastX = 0
        this.y = 200
        this.scale = 70
        this.width = 40
        this.height = 70
        this.speed = 8
        this.jumpPower = -10
        this.climbPower = -3
        this.gravity = 0.5
        this.yVelocity = 0
        this.playerInitialPosition = 200
        this.checkPoint = 0
        this.moveRight = false
        this.moveLeft = false
        this.climb = false
        this.audio = new Audio('./sounds/music.mp3')
        this.jumpS = new Audio('./sounds/jump.mp3')

    }

    update() {
        this.move()
        this.applyGravity()
        this.moveDetect()
        this.lastX = this.x
    }
    
    move() {
        //basic movement of the player
        if (gameOverFlag) {
            return this.draw();
        }
        if (keyInputs["KeyD"] || keyInputs["ArrowRight"]) {
            if (this.x < 0) {
                this.x = 0
            } else {
                this.x += this.speed;
                this.drawRightSideLook()
            }
        } else if (keyInputs["KeyA"] || keyInputs["ArrowLeft"]) {
            if (this.x > 0) {
                this.x -= this.speed;
            }
            this.drawLeftSideLook();
        } else if (ladder.hitbox()){ 
            this.drawRightSideLook()
        } else {
            this.draw();
        }
    }

    moveDetect () {
        //finds out wich way is player moving 
        if (this.lastX < this.x ) {
            this.moveRight = true
            this.moveLeft = false
            return
        } else if (this.lastX > this.x ) {
            this.moveLeft = true
            this.moveRight = false
            return
        } else {
            this.moveLeft = false
            this.moveRight = false
            return
        }
    }

    applyGravity() {
        //gives player gravity
        this.yVelocity += this.gravity

        if(this.y >= canvas.height -5 - this.height) {
            //makes sure the player cant fall through the floor
            this.y = canvas.height -5 - this.height
            //if player is on floor his yVelocity is set to 0
            this.yVelocity = 0

            //checks for jump inputs and applyes jump power
            if(keyInputs["KeyW"] || keyInputs["Space"] || keyInputs["ArrowUp"]) {
                if (gameOverFlag) return
                this.yVelocity = this.jumpPower 
                jumpSound()
            }
        }
        //if player is on the ladder the ladder will act as a ground so he can climb up and also stay on the ladder
        if(ladder.hitbox()) {
            this.y = this.y
            this.yVelocity = 0
            //if player "jumps" on the ladder it moves him up my the climb power and also playes the laddersound otherwise if player presses S or arrowDown he slowly climbs down
            if(keyInputs["KeyW"] || keyInputs["Space"] || keyInputs["ArrowUp"]) {
                if (gameOverFlag) return 
                this.yVelocity = this.climbPower
                if (!this.climb) {
                    this.jumpS.pause()
                    this.jumpS.currentTime = 0;
                    this.climb = true
                    ladderSound()
                } 
            } else if (keyInputs["KeyS"]  || keyInputs["ArrowDown"]) {
                this.yVelocity -= this.climbPower
            }
            
        }
        
        this.y += this.yVelocity
        
    }

    //functions for drawing the player images
    
    draw() {
        c.drawImage(img, this.playerInitialPosition, this.y, this.width , this.height)
    }

    drawRightSideLook() {
        c.drawImage(rightLook, this.playerInitialPosition, this.y, this.width , this.height)
    }
    
    drawLeftSideLook() {
        c.drawImage(leftLook, this.playerInitialPosition, this.y, this.width , this.height)
    }
    
    backGroundMusic(){
        //function for playing BG music
        this.audio.volume = 0.1
        this.audio.loop = true
        this.audio.play()
    }

    backGroundMusicStop(){
        //stops BG music
        this.audio.pause()
        this.audio.currentTime = 0
    }
}

function jumpSound(){
    //function for jump sound. If there was a jump sound playing already it stops it and resets the time
    player.jumpS.pause();
    player.jumpS.currentTime = 0; 
    player.jumpS.volume = 0.1;
    player.jumpS.play();
}

