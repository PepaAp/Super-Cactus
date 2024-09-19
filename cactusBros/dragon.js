const canvas2 = document.getElementById("canvas2")
const c2 = canvas2.getContext("2d")

let dragon1 = new Image()
let dragon2 = new Image()
let dragon3 = new Image()
dragon1.src = "./img/dragon1.png"
dragon2.src = "./img/dragon2.png"
dragon3.src = "./img/dragon3.png"

class Dragon {
    constructor(){
        this.x = canvas2.width + 200
        this.speed = 8
        this.y = player.y
        this.dragHi = 60
        this.dragWi = 59
        this.dragonAni = [dragon1, dragon2, dragon3]
        this.currentFrame = 0

        setInterval(() => {
            this.currentFrame = (this.currentFrame + 1) % this.dragonAni.length
        }, 200)
    }

    draw() {
        c2.fillStyle = "skyblue"
        c2.fillRect(0, 0, canvas.width, canvas.height)
        c2.drawImage(this.dragonAni[this.currentFrame], this.x, this.y, this.dragWi, this.dragHi)
    }

    hitbox() {
        const dragonRight = this.x + this.dragWi;
        const dragonBottom = this.y + this.dragHi;
        const playerRight = player.x + player.scale;
        const playerBottom = player.y + player.scale;
    
        if (this.x < playerRight &&
            dragonRight > player.x &&
            this.y < playerBottom &&
            dragonBottom > player.y) {
            gameOver()
        }
    }

    update() {
        this.draw()
        this.hitbox()
        if (player.moveRight) {
            this.x -= player.speed + this.speed
        } else if (player.moveLeft) {
            this.x += player.speed - this.speed
        } else {
            this.x -= this.speed
        }
    }
}