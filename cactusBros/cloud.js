class Cloud {

    constructor(){
        //randomizes the clouds position
        this.x = this.cloudRandomizer(20, canvas.width)
        this.y = this.cloudRandomizer(50, 400)
        this.number = 7

        this.cloudWidth = 159
        this.cloudHeight = 118
    }

    cloudRandomizer(min, max) {
        return Math.random() * (max - min + 1) + min 
    }



    draw() {
        //draws clouds
        c.drawImage(cloudImg, this.x - player.x, this.y, this.cloudWidth, this.cloudHeight)
    }


    overlapping() {
        //checks for overlaping clouds
        for (let i = 0; i < clouds.length - 1; i++) {
            for (let j = i + 1; j < clouds.length; j++) {
                if (clouds[i].x < clouds[j].x + clouds[j].cloudWidth + 40 &&
                    clouds[i].x + clouds[i].cloudWidth + 40> clouds[j].x &&
                    clouds[i].y < clouds[j].y + clouds[j].cloudHeight + 40 &&
                    clouds[i].y + clouds[i].cloudHeight  + 40 > clouds[j].y) {
                    clouds[i].x = player.x + canvas.width

                }
            }
        }
    }
    
}

let clouds = []
let cloud = new Cloud()

function generateClouds(numClouds) {
    //generates requested number of clouds on the screen
    for(let i = 0; i < numClouds; i++) {
        clouds.push(new Cloud())
    }
}

function outCloudReplacement() {
    //checks if clouds are overlapping
    for (let i = 0; i < clouds.length; i++) {

        if (clouds[i].x + clouds[i].cloudWidth < player.x) {
            clouds[i].x = player.x + canvas.width 
            clouds[i].y = clouds[i].y

        } else if (clouds[i].x > player.x + canvas.width) {
            clouds[i].x = player.x - clouds[i].cloudWidth
            clouds[i].y = clouds[i].y

        }
    }
}

function drawClouds() {
    //for each generated cloud it will be drawn
    clouds.forEach(cloud => cloud.draw())

}

generateClouds(cloud.number)

