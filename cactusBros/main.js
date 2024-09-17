const canvas = document.getElementById("canvas")
const c = canvas.getContext("2d")

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

let gameOverFlag = false

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

function gameOverSound() {
    let audio = new Audio("./sounds/gameOver.mp3")
    audio.play()
}

function gameOver() {
    if (!gameOverFlag) {
        gameOverFlag = true
        gameOverSound()
        
        player.backGroundMusicStop()
        setTimeout(gameOverBack, 7000)
    }
    c.globalAlpha = 0.5
    c.fillStyle = "black"
    c.fillRect(0, 0, canvas.width, canvas.height)
    c.globalAlpha = 1
    c.fillStyle = "red"
    c.font = "50px Arial"
    c.fillText("Game Over", 200, 300)


}


document.addEventListener("keydown", function(e) {
    keyInputs[e.code] = true
})

document.addEventListener("keyup", function(e) {
    keyInputs[e.code] = false
})

main()
player.backGroundMusic()




