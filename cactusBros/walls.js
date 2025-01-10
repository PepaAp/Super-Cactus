class Wall {
    constructor() {
        this.i = 0
        this.wi = 100
        this.he = 50
        
        this.yPos = []
        this.xPos = []
        
    }
    
    drawWall(wall, x, y, w, h) {
        this.xPos.push(x)
        this.yPos.push(y)

        this.hitbox(this.xPos[this.i], this.yPos[this.i])
        c.drawImage(wall, x - player.x + 100, y, w, h)
        this.i++
    }

    drawWalls() {
        this.drawWall(wall, 500, 500, this.wi, this.he)
        this.drawWall(wall, 600, 500, this.wi, this.he)
        this.drawWall(wall, 700, 500, this.wi, this.he)
        
        this.drawWall(wall, 850, 400, this.wi, this.he)
        this.drawWall(wall, 1080, 380, this.wi, this.he)
        this.drawWall(wall, 1400, 350, this.wi, this.he)
    }

    hitbox() {

        
        
        //top checker
        for (let i = 0; i < this.xPos.length; i++) {
            if (player.y + player.height <= this.yPos[i] + 5 && 
                this.xPos[i] <= player.x + player.width  && 
                player.y + player.height >= this.yPos[i] && 
                this.xPos[i] + this.wi >= player.x) {
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

        //bottom checker 
        for (let i = 0; i < this.xPos.length; i++) {
            // Check if the player is colliding with the current wall
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
                        player.gravity = 1.5
                        player.y = this.yPos[i] + this.he
                    }

                    
                } else {
                    player.gravity = 0.5
                }
        }   
         
    

        


    }
        
}