class Cloud {



    cloudRandomizer(min, max) {
        return Math.random(1) * (max - min) + min;
    }

    constructor(){
        this.x = this.cloudRandomizer(20, canvas.width)
        this.y = this.cloudRandomizer(100, 400)
        this.cloudWidth = 159
        this.cloudHight = 118
    }

    
    cloudGen(){
        for(let i = 0; i < 5; i++){
            this.x = this.cloudRandomizer(20, canvas.width)
            this.y = this.cloudRandomizer(100, 400)
            this.draw()
        }

    }



    draw() {
        c.drawImage(cloudImg, this.x, this.y, this.cloudWidth, this.cloudHight)
    }

}
