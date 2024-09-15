class Player {
    constructor(){
        this.x = 0
        this.y = 400
        this.scale = 150
        this.speed = 2
        this.jumpPower = -8
        this.gravity = 0.2
        this.yVelocity = 0
    }

    update() {
        this.move()
        this.applyGravity()
    }
    
    move() {

        if (keyInputs["KeyD"] || keyInputs["ArrowRight"]) {
            this.x += this.speed
            this.drawRightSideLook()
        } else if (keyInputs["KeyA"] || keyInputs["ArrowLeft"]) {
            this.x -= this.speed
            this.drawLeftSideLook()
        } else {
            this.draw()
        }
    }

    applyGravity() {
        this.yVelocity += this.gravity

        if(this.y >= canvas.height -5 - this.scale) {
            this.y = canvas.height -5 - this.scale
            this.yVelocity = 0

               if(keyInputs["KeyW"] || keyInputs["Space"] || keyInputs["ArrowUp"]) {
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
    

}

function jumpSound(){
    let audio = new Audio('./sounds/jump.mp3')
    audio.volume = 0.1
    audio.play()
}

function backGroundMusic(){
    let audio = new Audio('./sounds/music.mp3')
    audio.volume = 0.1
    audio.loop = true
    audio.play()
}

