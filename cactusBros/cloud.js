class Cloud {

    constructor(){
        this.x = this.cloudRandomizer(20, canvas.width)
        this.y = this.cloudRandomizer(50, 300)

        this.cloudWidth = 159
        this.cloudHeight = 118
    }

    cloudRandomizer(min, max) {
        return Math.random() * (max - min + 1) + min 
    }



    draw() {
        c.drawImage(cloudImg, this.x - player.x, this.y, this.cloudWidth, this.cloudHeight)
    }


    overlapping() {
        for (let i = 0; i < clouds.length - 1; i++) {
            for (let j = i + 1; j < clouds.length; j++) {
                if (clouds[i].x < clouds[j].x + clouds[j].cloudWidth &&
                    clouds[i].x + clouds[i].cloudWidth > clouds[j].x &&
                    clouds[i].y < clouds[j].y + clouds[j].cloudHeight &&
                    clouds[i].y + clouds[i].cloudHeight > clouds[j].y) {
                    clouds[i].x = this.cloudRandomizer(20, canvas.width)
                    clouds[i].y = this.cloudRandomizer(50, 300)
                }
            }
        }
    }
    
}

let clouds = []
let cloud = new Cloud()

function generateClouds(numClouds) {
    for(let i = 0; i < numClouds; i++) {
        clouds.push(new Cloud())
    }
}

function outCloudReplacement() {
    for (let i = 0; i < clouds.length; i++) {
        if ((clouds[i].x + clouds[i].cloudWidth) < 0) {
            console.log("cloud out")
        }else {
            console.log("cloud in")
        }
    }
}

function drawClouds() {
    clouds.forEach(cloud => cloud.draw())

}

generateClouds(5)

