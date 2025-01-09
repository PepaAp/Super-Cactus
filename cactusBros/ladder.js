let ladderImg = new Image()
ladderImg.src = "./img/ladder.png"


class Ladder {
    constructor() {
        this.width = 15
        this.height = 50
        this.i = 0
        this.yPos = []
        this.xPos = []
        this.ladderFlag == false
    }

    
    drawLadder(wall, x, y, w, h) {
        this.xPos.push(x)
        this.yPos.push(y)
        c.drawImage(ladderImg, x - player.x + 100, y, w, h)
        this.i++
    }

    update() {
        this.drawLadder(wall, 485, 500, this.width, this.height)
        this.hitbox()
    }

    hitbox () {
        for (let i = 0; i < this.xPos.length; i++) {
            if (player.x + player.scale >= this.xPos[i] &&
                player.x <= this.xPos[i]+this.width &&
                player.y + player.scale -1>= this.yPos[i] &&
                player.y <= this.xPos[i] + this.height
            ) {
                return 1
            }
        }
    }
}