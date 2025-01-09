class Player {
    constructor(){
        this.x = 0
        this.y = 400
        this.scale = 70
        this.width = 40
        this.height = 70
        this.speed = 8
        this.jumpPower = -10
        this.climbPower = -3
        this.gravity = 0.5
        this.yVelocity = 0
        this.playerInitialPosition = 100
        this.moveRight = false
        this.moveLeft = false
        this.climb = false
        this.audio = new Audio('./sounds/music.mp3')
    }

    update() {
        this.move()
        this.applyGravity()
    }
    
    move() {
        if (gameOverFlag) {
            return this.draw();
        }
        this.moveDetect()
    
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
        if (this.x > this.x) {
            this.moveRight = true
            this.moveLeft = false
        } else if (this.x < this.x ) {
            this.moveLeft = true
            this.moveRight = false
        } else {
            this.moveLeft = false
            this.moveRight = false
        }
    }

    applyGravity() {
        this.yVelocity += this.gravity

        if(this.y >= canvas.height -5 - this.height) {
            this.y = canvas.height -5 - this.height
            this.yVelocity = 0

            if(keyInputs["KeyW"] || keyInputs["Space"] || keyInputs["ArrowUp"]) {
                if (gameOverFlag) return
                this.yVelocity = this.jumpPower 
            }
        }
        if(ladder.hitbox()) {
            this.y = this.y
            this.yVelocity = 0

            if(keyInputs["KeyW"] || keyInputs["Space"] || keyInputs["ArrowUp"]) {
                if (gameOverFlag) return 
                this.yVelocity = this.climbPower
                if (!this.climb) {
                    this.climb = true
                    ladderSound()
                } 
            } else if (keyInputs["KeyS"]  || keyInputs["ArrowDown"]) {
                this.yVelocity -= this.climbPower
            }
            
        }
        
        this.y += this.yVelocity
        
    }
    
    draw() {
        c.drawImage(img, this.playerInitialPosition, this.y, this.width+ 30 , this.height)
    }

    drawRightSideLook() {
        c.drawImage(rightLook, this.playerInitialPosition, this.y, this.width , this.height)
    }
    
    drawLeftSideLook() {
        c.drawImage(leftLook, this.playerInitialPosition, this.y, this.width , this.height)
    }
    
    backGroundMusic(){
        this.audio.volume = 0.1
        this.audio.loop = true
        this.audio.play()
    }

    backGroundMusicStop(){
        this.audio.pause()
        this.audio.currentTime = 0
    }
}

function jumpSound(){
    let audio = new Audio('./sounds/jump.mp3')
    audio.volume = 0.1
    audio.play()
}

