class Spider {
    constructor() {
        this.x = 200;
        this.y = 570;
        this.width = 60;
        this.height = 25;
        this.distance = 150;
        this.direction = 1; 
        this.moveDistance = 0; 
        this.speed = 3; 
    }

    draw() {
        c.drawImage(spiderImg, this.x - player.x + 100, this.y, this.width, this.height);
    }

    update() {
        this.x += this.direction * this.speed;
        this.moveDistance += this.direction * this.speed;

        if (Math.abs(this.moveDistance) >= this.distance) {
            this.direction *= -1; 
            this.moveDistance = 0; 
        }

        this.draw();
    }

    hitbox() {
        if (this.x < player.x + player.scale - 28 &&
            this.x + this.width - 15 > player.x &&
            this.y < player.y + player.scale - 7 &&
            this.y + this.height > player.y) {
            gameOver();
        }
    }
}

function gameOverBack() {
    window.location.href = "../index.html";
}