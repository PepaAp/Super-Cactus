const canvas = document.getElementById("canvas")
const c = canvas.getContext("2d")
const gameOverCss = document.getElementById("gameOver")

let player = new Player()
let spider = new Spider()
let wallGen = new Wall()
let cloudGen = new Cloud()

let keyInputs = {}
let img = new Image()
let rightLook = new Image()
let leftLook = new Image()
let wall = new Image()
let spiderImg = new Image()
let cloudImg = new Image()



img.src = "./img/player.png"
rightLook.src = "./img/playerRightSideLook.png"
leftLook.src = "./img/playerLeftSideLook.png"
wall.src = "./img/wall.png"
spiderImg.src = "./img/spider.png"
cloudImg.src = "./img/cloud.png"


function main(){

    c.fillStyle = "skyblue"
    c.fillRect(0, 0, canvas.width, canvas.height)

    c.fillStyle = "green"
    c.fillRect(0, 580, canvas.width, 20)
    drawClouds()

    player.update()
    spider.draw()
    wallGen.drawWalls()


    cloud.overlapping()
    outCloudReplacement()
    spider.hitbox()

    requestAnimationFrame(main)

}

function gameOver() {
    c.save()
    c.globalAlpha = 0.5
    c.fillStyle = "black"
    c.fillRect(0, 0, canvas.width, canvas.height)
    c.fillStyle = "red"
    c.font = "50px serif"
    c.fillText("Game Over", 200, 300)
    c.restore();
}

document.addEventListener("keydown", function(e) {
    keyInputs[e.code] = true
})

document.addEventListener("keyup", function(e) {
    keyInputs[e.code] = false
})

backGroundMusic()

main()





