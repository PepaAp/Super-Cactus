const canvas2 = document.getElementById("canvas2")
const c2 = canvas2.getContext("2d")

let dragon1 = new Image()
let dragon2 = new Image()
let dragon3 = new Image()
let swoosh = new Audio('./sounds/dragon.mp3')
dragon1.src = "./img/dragon1.png"
dragon2.src = "./img/dragon2.png"
dragon3.src = "./img/dragon3.png"

class Dragon {
    constructor(){
        this.x = canvas2.width + 20;
        this.y = 0;
        this.speed = 8;
        this.dragHi = 60;
        this.dragWi = 59;
        this.dragonAni = [dragon1, dragon2, dragon3];
        this.currentFrame = 0;
        this.playeryUpdateFlag = false;
        this.dragonFlag = false;
        this.dragonDistance = 0;
        this.dragonDistance2 = 0;

        //animates the dragon
        setInterval(() => {
            this.currentFrame = (this.currentFrame + 1) % this.dragonAni.length;
        }, 200);
    }

    draw() {
        //clearing the canvas and then drawing the dragon
        c2.clearRect(0, 0, canvas2.width, canvas2.height);
        c2.drawImage(this.dragonAni[this.currentFrame], this.x, this.y, this.dragWi, this.dragHi);
        this.hitbox();
    }

    hitbox() {
        //checks for collision between the player and the dragon
        let dragonRight = this.x + this.dragWi;
        let dragonBottom = this.y + this.dragHi;
        let playerRight = player.playerInitialPosition + player.width;
        let playerBottom = player.y + player.height;


        if (this.x < playerRight && 
            dragonRight > player.playerInitialPosition && 
            this.y < playerBottom && 
            dragonBottom > player.y) {
                gameOver();
        }
    }

    update() {
        //sets starting y postion for dragon as the player position
        if (!this.playeryUpdateFlag){
            this.playeryUpdateFlag = true;
            this.y = player.y - 10;
        };
        if (this.x + this.dragWi >= 0) {
            this.dragonFlag = true
            this.draw()
            if(this.dragonFlag) {
                //playes swoosh sound
                setTimeout(()=> {
                    this.dragonSound()
                }, 200)
        }
        } else {
            c2.clearRect(0, 0, canvas2.width, canvas2.height)
            this.dragonFlag = false
        }


        //allignes the right speed for dragon while player is mooving
        if (player.moveRight) {
            this.x -= player.speed + this.speed +3;
        } else if (player.moveLeft) {
            this.x += player.speed - this.speed -3;
        } else {
            this.x -= this.speed;
        }




    }
    dragonSound(){
        swoosh.volume = 0.5
        swoosh.play()
    }
}
