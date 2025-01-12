class Spider {
    constructor() {
        this.xPos = []
        this.yPos = []
        this.width = 60;
        this.height = 25;
        this.distance = 150;
        this.direction = 1; 
        this.moveDistance = 0; 
        this.speed = 3; 
        this.spiderFlag = false
    }

    draw(x, y) {
        if (!this.xPos.includes(x) || !this.yPos.includes(y)) {
            this.xPos.push(x)
            this.yPos.push(y)
        }
        c.drawImage(spiderImg, x - player.x + player.playerInitialPosition, y, this.width, this.height);
    }

    spider() {
        if (!this.spiderFlag) {
            this.draw(1000, 575)
            this.draw(1200, 575)
            this.draw(1995, 376)
            this.draw(7040, 526)
            this.draw(5345, 396)
            this.draw(8200, 575)
            this.draw(8380, 575)
            this.spiderFlag = true
        }
        for (let i = 0; i < this.xPos.length; i ++) {
            this.draw(this.xPos[i], this.yPos[i])
        }

    }

    update() {
        this.hitbox()
        this.spider()
        for (let i = 0; i < this.xPos.length; i++) {
            this.xPos[i] += this.direction * this.speed;
            this.moveDistance += this.direction * this.speed;
            if (Math.abs(this.moveDistance) >= this.distance) {
                this.direction *= -1; 
                this.moveDistance = 0; 
            }
                    
        }
        
    }

    hitbox() {
        for(let i = 0; i < this.xPos.length; i++) {
            if (this.xPos[i] <= player.x + player.width  &&
                this.xPos[i] + this.width  > player.x &&
                this.yPos[i] + this.height > player.y &&
                this.yPos[i] <= player.y + player.height- 5) {
                gameOver();
                return
            }
        }
        
    }
}
