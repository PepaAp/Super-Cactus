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
        c2.clearRect(0, 0, canvas2.width, canvas2.height)
        c2.drawImage(this.dragonAni[this.currentFrame], this.x, this.y, this.dragWi, this.dragHi)
    }

    hitbox() {
        const dragonRight = this.x + this.dragWi
        const dragonBottom = this.y + this.dragHi
        const playerRight = player.x + player.scale
        const playerBottom = player.y + player.scale
    
        if (this.x < playerRight &&
            dragonRight > player.x &&
            this.y < playerBottom &&
            dragonBottom > player.y) {
            gameOver()
        }
    }

    update() {
        if (this.x > 0) {
            this.draw()                                                                                                     // teoretickz bz to slo udelat tak ye bz ten drak bzl v arrayi a pak bych to vzmenil ya nejakz hovno
        } else  if (this.x < 0 - this.dragWi) {
            c2.clearRect(0, 0, canvas2.width, canvas2.height)
        }
        this.hitbox()
        if (player.moveRight) {
            this.x -= player.speed + this.speed;
        } else if (player.moveLeft) {
            this.x += player.speed - this.speed;
        } else {
            this.x -= this.speed;
        }
    
        // Ensure this.x does not go below 0

    }
}