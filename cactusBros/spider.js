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


}