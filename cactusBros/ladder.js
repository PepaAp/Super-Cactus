let ladderImg = new Image()
ladderImg.src = "./img/ladder.png"


class Ladder {
    constructor() {
        this.width = 15
        this.height = 150
        this.i = 0
        this.yPos = []
        this.xPos = []
        this.ladderFlag == false
    }

    
    drawLadder(x, y) {
        this.xPos.push(x)
        this.yPos.push(y)
        c.drawImage(ladderImg, x - player.x + player.playerInitialPosition, y, this.width, this.height)
        this.i++
    }

    draw() {
        this.drawLadder(1450-this.width, 450)
        this.drawLadder(3750-this.width, 300)
    }

    update() {
        this.draw()
        this.hitbox()
    }

    hitbox () {
        let climbs = false;

        for (let i = 0; i < this.xPos.length; i++) {
            if (player.x + player.width >= this.xPos[i] &&
                player.x <= this.xPos[i]+this.width &&
                player.y + player.height -1>= this.yPos[i] &&
                player.y <= this.xPos[i] + this.height
            ) {
                climbs = true;
            } 
        }

        if (climbs) {
            wallGen.doubleWall = true;
        } else {
            wallGen.doubleWall = false;
            player.climb = false;
        }

        return climbs;
    }
}
function ladderSound(){
    let audio = new Audio('./sounds/ladder.mp3')
    audio.volume = 0.2
    audio.play()
}
