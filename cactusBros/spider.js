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
        this.xPos.push(x);
        this.yPos.push(y);
        c.drawImage(spiderImg, x - player.x, y, this.width, this.height);
    }
    spider() {
        if (!this.spiderFlag) {
            this.draw(200, 575)
            this.spiderFlag = true
        }
        this.draw(this.xPos[0], this.yPos[0])
        
    }

    update() {
        this.spider()
        for (let i = 0; i < this.xPos.length; i++) {
            this.xPos[i] += this.direction * this.speed;
            this.moveDistance += this.direction * this.speed;
            if (Math.abs(this.moveDistance) >= this.distance) {
                this.direction *= -1; 
                this.moveDistance = 0; 
            }
            this.hitbox()
            this.xPos.pop()
            return
            
        }
    }

    hitbox() {
        for(let i = 0; i < this.xPos.length; i++) {
            if (this.xPos[i] < player.x + player.width  &&
                this.xPos[i] + this.width  > player.x &&
                this.yPos[i] + this.height > player.y &&
                this.yPos[i] < player.y + player.height) {
                gameOver();
                return
            }
            c2.fillRect(this.xPos[i], this.yPos[i], this.width, this.height)
        }
    }
}

function gameOverBack() {
    window.location.href = "../index.html";
}
