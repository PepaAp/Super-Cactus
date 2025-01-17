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
        //pushing the x and y positions to an array and drawing the magnet
        if (!this.xPos.includes(x) || !this.yPos.includes(y)) {
            this.xPos.push(x)
            this.yPos.push(y)
        }
        c.drawImage(magnetImg, x - player.x + player.playerInitialPosition, y, this.wi, this.he)
    }

    magnetMaker() {
        this.draw(2980, 250)
        this.draw(4200, 100)
        this.draw(4300, 100)
        this.draw(5100, 250)
        this.draw(5200, 250)
        this.draw(5300, 250)
    }

    update() {
        this.hitbox()
        this.magnetMaker()
    }

    hitbox() {
        //check for collisons with magnet
        for (let i = 0; i < this.xPos.length; i++) {
            if (player.y <= this.yPos[i] + this.he && 
                this.xPos[i] <= player.x + player.width &&
                player.y + player.height >= this.yPos[i] &&
                this.xPos[i] + this.wi >= player.x) {
                    //wont allow player to go through magnet from sides
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
                        //setting the top collisions and allowing player to jump and let go
                        player.yVelocity = 0
                        player.gravity = 1.5
                        player.y = this.yPos[i] + this.he -1.5
                        if (keyInputs["KeyW"] || keyInputs["Space"] || keyInputs["ArrowUp"]) {
                            if (gameOverFlag) return;
                            jumpSound()
                            player.yVelocity = player.jumpPower
                        } else if (keyInputs["KeyS"] || keyInputs["ArrowDown"]) {
                            if (gameOverFlag) return;
                            player.y = this.yPos[i] + this.he
                        }
                        return
                    }

                    
                } else {
                    //resets gravity
                    player.gravity = 0.5
                }
        } 
    }
}