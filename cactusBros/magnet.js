let magnetImg = new Image()
magnetImg.src = "./img/magnet.png"

class Magnet {
    constructor () {
        this.wi = 100 
        this.he = 50
        this.xPos = []
        this.yPos = []
    }

    draw(x, y) {
        if (!this.xPos.includes(x) || !this.yPos.includes(y)) {
            this.xPos.push(x)
            this.yPos.push(y)
        }
        c.drawImage(magnetImg, x - player.x +100, y, this.wi, this.he)
    }

    magnetMaker() {
        this.draw(100, 450)
    }

    update() {
        this.magnetMaker()
        this.hitbox()
    }

    hitbox() {
        for (let i = 0; i < this.xPos.length; i++) {
            if (player.y <= this.yPos[i] + this.he && 
                this.xPos[i] <= player.x + player.width &&
                player.y + player.height >= this.yPos[i] &&
                this.xPos[i] + this.wi >= player.x) {
                    if (player.x + player.width - this.xPos[i] < this.yPos[i] + this.he - player.y ||
                        this.xPos[i] + this.wi - player.x <this.yPos[i] + this.he - player.y) {
                            if (player.x + player.width - this.xPos[i] < this.wi / 2) {
                                player.x = this.xPos[i] - player.width 
                                return
                            } else{
                                player.x = this.xPos[i] + this.wi
                                return
                            }
                    } else {
                        player.yVelocity = 0
                        player.gravity = 1.5;
                        player.y = this.yPos[i] + this.he -1;
                        return
                    }

                    
                } else {
                    player.gravity = 0.5
                }
        } 
    }
}