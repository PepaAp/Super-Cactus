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
        console.log(this.i)
    }

    drawWalls() {
        this.drawWall(wall, 500, 400, this.wi, this.he)
        this.drawWall(wall, 600, 400, this.wi, this.he)
        this.drawWall(wall, 700, 400, this.wi, this.he)
    }

    hitbox(cloudX, cloudY) {
    }
        
}