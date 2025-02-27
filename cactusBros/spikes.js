let spikeImg = new Image()
spikeImg.src = "./img/spike.png"

class Spikes {
    constructor() {
        this.xPos = []
        this.yPos = []
        this.width = 100;
        this.height = 10;
    }

    draw(x, y) {
        //pushes provided x and y positions to an array if they already didn´t exist and draws spikes
        if (!this.xPos.includes(x) || !this.yPos.includes(y)) {
            this.xPos.push(x)
            this.yPos.push(y)
        }
        c.drawImage(spikeImg, x - player.x + player.playerInitialPosition, y, this.width, this.height);
    }

    spikes() {
        //draws spikes 
        for (let i = 1500; i < 2850; i+=this.width){
            this.draw(i, 590)
        }
        for (let i = 2950; i < 4650; i+=this.width){
            this.draw(i, 590)
        }
        for (let i = 4700; i < 7050; i+=this.width){
            this.draw(i, 590)
        }
        for (let i = 7500; i < 7950; i+=this.width){
            this.draw(i, 590)
        }
        this.draw(8080, 590)
        for (let i = 8700; i < 9600; i+=this.width){
            this.draw(i, 590)
        }

    }

    update() {
        this.spikes()
        this.hitbox()
    }

    hitbox() {
        //collision between player and spikes causes gameover
        for(let i = 0; i < this.xPos.length; i++) {
            if (this.xPos[i] <= player.x + player.width  &&
                this.xPos[i] + this.width  > player.x &&
                this.yPos[i] + this.height > player.y &&
                this.yPos[i] <= player.y + player.height) {
                gameOver();
                return
            }
        }
        
    }

}