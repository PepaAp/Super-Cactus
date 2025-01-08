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
        //bottom checker 
                for (let i = 0; i < this.xPos.length; i++) {
            if (player.y - player.scale <= this.yPos[i] + this.he && 
                this.xPos[i] <= player.x + player.scale - 20 && 
                player.y >= this.yPos[i] && 
                this.xPos[i] + this.wi >= player.x) {
                player.gravity = 1.5;
                player.y = this.yPos[i] + this.he;
                break;
            } else {
                player.gravity = 0.5;
            }
        }
        
        //top checker
        for (let i = 0; i < this.xPos.length; i++) {
            if (player.y <= this.yPos[i] && 
                this.xPos[i] <= player.x + player.scale - 20 && 
                player.y + player.scale >= this.yPos[i] && 
                this.xPos[i] + this.wi >= player.x) {
                player.y = this.yPos[i] - player.scale;
                player.yVelocity = 0;
                break;
            }
        }

    }
        
}