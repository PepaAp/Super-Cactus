class Wall {
    constructor() {
        this.wi = 100
        this.he = 50
        this.doubleWall = false
        
        this.yPos = []
        this.xPos = []
        
    }
    
    drawWall(x, y) {
        //pushing x y coordinates and draws wall
        this.xPos.push(x)
        this.yPos.push(y)

        c.drawImage(wall, x - player.x + player.playerInitialPosition, y, this.wi, this.he)
    }

    drawWalls() {
        //drawing walls
        this.drawWall(300, 550)
        this.drawWall(600, 470)
        this.drawWall(1650, 400)
        this.drawWall(2000, 400)
        this.drawWall(2100, 400)
        this.drawWall(2500, 400)
        this.drawWall(3300, 400)
        this.drawWall(3750, 400)
        this.drawWall(3750, 350)
        this.drawWall(3750, 300)
        this.drawWall(4000, 300)
        this.drawWall(4900, 450)
        this.drawWall(5350, 420)
        this.drawWall(5450, 420)
        this.drawWall(6200, 550)
        this.drawWall(6620, 550)
        this.drawWall(7050, 550)
        this.drawWall(7150, 550)
        this.drawWall(8600, 550)
        this.drawWall(8600, 550)
        this.drawWall(8600, 550)
        this.drawWall(8900, 480)
        this.drawWall(9300, 480)
        
    }

    hitbox() {

        
        
        //top checker
        if(!this.doubleWall){
            for (let i = 0; i < this.xPos.length; i++) {
                if (player.y + player.height - player.yVelocity <= this.yPos[i] + 5 && 
                    this.xPos[i] <= player.x + player.width -1 && 
                    player.y + player.height >= this.yPos[i] && 
                    this.xPos[i] + this.wi >= player.x+1) {
                    //allows player to jump from top of the wall
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
        }

        //bottom and sides checker 
        for (let i = 0; i < this.xPos.length; i++) {
            // Check if the player is colliding with the current wall
            if (player.y <= this.yPos[i] + this.he && 
                this.xPos[i] <= player.x + player.width &&
                player.y + player.height >= this.yPos[i] &&
                this.xPos[i] + this.wi >= player.x) {
                    //check for collision on the sides
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
                        //drops player from bottom of the wall
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