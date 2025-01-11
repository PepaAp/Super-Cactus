let pipeImg = new Image()
pipeImg.src = "./img/pipe.png"

class Pipe {
    constructor () {
        this.width = 100    
        this.height = 500
        this.xPos = []
        this.yPos = []
    }

    
    draw(x, y) {
        if (!this.xPos.includes(x) || !this.yPos.includes(y)) {
            this.xPos.push(x)
            this.yPos.push(y)
        }
        c.drawImage(pipeImg, x - player.x + player.playerInitialPosition, y, this.width, this.height)
    }

    pipeMaker() {
        this.draw(900, 440)
        this.draw(2850, 400)
        this.draw(4600, 400)
        this.draw(5800, 400)
        this.draw(7400, 550)
        this.draw(7650, 450)
        this.draw(7950, 352)
        this.draw(9600, 450)
    }

    update() {
        this.hitbox()
        this.pipeMaker()
    }

    hitbox() {
        for (let i = 0; i < this.xPos.length; i++) {
            if (player.y + player.height - player.yVelocity <= this.yPos[i] + 5 && 
                this.xPos[i] <= player.x + player.width  && 
                player.y + player.height >= this.yPos[i] && 
                this.xPos[i] + this.width >= player.x) {
                player.y = this.yPos[i] - player.height;
                player.yVelocity = 0;
        
                if (keyInputs["KeyW"] || keyInputs["Space"] || keyInputs["ArrowUp"]) {
                    if (gameOverFlag) return;
                    jumpSound()
                    player.yVelocity = player.jumpPower;
                }
                return;
            }
        }

        for (let i = 0; i < this.xPos.length; i++) {
            if (player.y <= this.yPos[i] + this.height && 
                this.xPos[i] <= player.x + player.width &&
                player.y + player.height >= this.yPos[i] &&
                this.xPos[i] + this.width >= player.x) {
                    if (player.x + player.width - this.xPos[i] < this.yPos[i] + this.height - player.y ||
                        this.xPos[i] + this.width - player.x <this.yPos[i] + this.height - player.y) {
                            if (player.x + player.width - this.xPos[i] < this.width / 2) {
                                player.x = this.xPos[i] - player.width 
                                return
                            } else{
                                player.x = this.xPos[i] + this.width
                                return
                            }
                    }                    
                } else {
                    player.gravity = 0.5
                }
        }   
    }
}