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
    }

    hitbox(cloudX, cloudY) {

        
        
        //top checker
        for (let i = 0; i < this.xPos.length; i++) {
            if (player.y + player.scale <= this.yPos[i] + 5 && 
                this.xPos[i] <= player.x + player.scale - 20 && 
                player.y + player.scale >= this.yPos[i] && 
                this.xPos[i] + this.wi >= player.x) {
                player.y = this.yPos[i] - player.scale;
                player.yVelocity = 0;
        
                if (keyInputs["KeyW"] || keyInputs["Space"] || keyInputs["ArrowUp"]) {
                    if (gameOverFlag) return;
                    jumpSound();
                    player.yVelocity = player.jumpPower;
                }
                return;
            }
        }

        //bottom checker 
        for (let i = 0; i < this.xPos.length; i++) {
            if (player.y <= this.yPos[i] + this.he && 
                this.xPos[i] <= player.x + player.scale  &&
                player.y + player.scale >= this.yPos[i] &&
                this.xPos[i] + this.wi >= player.x) {
                if (player.y + player.scale <= canvas.height) {
                    if (player.x + player.scale - this.xPos[i] < this.wi / 2) {
                        player.x = this.xPos[i] - player.scale
                        return
                    } else if (player.x <= this.xPos[i] + this.wi){
                        player.x = this.xPos[i] + this.wi 
                        return
                    }
                } else {
                    player.yVelocity = 0
                    player.gravity = 1.5;
                    player.y = this.yPos[i] + this.he +1;
                    return;
                }
            
            } else {
                player.gravity = 0.5;
            }
        } 
         
        //left and right checker
        for (let i = 0; i < this.xPos.length; i++) {
            if (player.x + player.scale >= this.xPos[i] &&
                player.y + player.scale -20  >= this.yPos[i] &&
                player.x <= this.xPos[i] + this.wi &&
                player.y <= this.yPos[i] + this.he
            ) {
                if (player.x + player.scale - this.xPos[i] < this.wi / 2) {
                    player.x = this.xPos[i] - player.scale
                    console.log(player.x + player.scale - this.xPos[i], "left")
                    return
                } else if (player.x <= this.xPos[i] + this.wi){
                    player.x = this.xPos[i] + this.wi 
                    console.log(player.x + player.scale - this.xPos[i], "right")
                    return
                }
            }
        }

        


    }
        
}