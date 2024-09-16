class Spider {
    constructor() {
        this.x = 200;
        this.y = 550;
        this.width = 70;
        this.height = 47;
    }

    draw() {
        c.drawImage(spiderImg, this.x - player.x + 100, this.y, this.width, this.height);
    }

    update() {
        this.draw();
    }

    hitbox() {
        if (this.x < player.x + player.scale - 40 &&
            this.x + this.width - 40  > player.x &&
            this.y < player.y + player.scale&&
            this.y + this.height > player.y) {
            gameOver()
        }
    }

}