class Wall {

    
    drawWall(wall, x, y, w, h) {
        c.drawImage(wall, x - player.x + 100, y, w, h)
    }

    drawWalls() {
        this.drawWall(wall, 500, 400, 100, 50)
        this.drawWall(wall, 600, 400, 100, 50)
        this.drawWall(wall, 700, 400, 100, 50)
    }

    hitbox() {
        

    }
}