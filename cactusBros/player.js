class Player {
    constructor(){
        this.x = 0
        this.y = 400
        this.scale = 150
        this.speed = 8
        this.jumpPower = -10
        this.gravity = 0.5
        this.yVelocity = 0
        this.moveRight = false
        this.moveLeft = false
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
    
        if (keyInputs["KeyD"] || keyInputs["ArrowRight"]) {
            if (this.x < 0) {
                this.x = 0
            } else {
                this.x += this.speed;
                this.drawRightSideLook()
                this.moveRight = true
                this.moveLeft = false
            }
        } else if (keyInputs["KeyA"] || keyInputs["ArrowLeft"]) {
            if (this.x > 0) {
                this.x -= this.speed;
            }
            this.drawLeftSideLook();
            this.moveLeft = true
            this.moveRight = false
        } else {
            this.draw();
            this.moveRight = false
            this.moveLeft = false
        }
    }

    applyGravity() {
        this.yVelocity += this.gravity

        if(this.y >= canvas.height -5 - this.scale) {
            this.y = canvas.height -5 - this.scale
            this.yVelocity = 0

            if(keyInputs["KeyW"] || keyInputs["Space"] || keyInputs["ArrowUp"]) {
                if (gameOverFlag) return
                jumpSound()
                this.yVelocity = this.jumpPower
            }
        }

        this.y += this.yVelocity
    }
    
    draw() {
        c.drawImage(img, 100, this.y, this.scale, this.scale)
    }

    drawRightSideLook() {
        c.drawImage(rightLook, 100, this.y, this.scale, this.scale)
    }
    
    drawLeftSideLook() {
        c.drawImage(leftLook, 100, this.y, this.scale, this.scale)
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