const canvas = document.getElementById("canvas")
const c = canvas.getContext("2d")

let player = new Player()
let spider = new Spider()
let wallGen = new Wall()
let cloudGen = new Cloud()
let progress = new Progress()
let dragon = new Dragon()
let win = new Win()
let hS = new HighScore()

let keyInputs = {}
let img = new Image()
let rightLook = new Image()
let leftLook = new Image()
let wall = new Image()
let spiderImg = new Image()
let cloudImg = new Image()


let gameOverFlag = false
let countDownFlag1 = false
let countDownFlag2 = false
let countDownFlag3 = false
let dragonDelay = 5000


img.src = "./img/player.png"
rightLook.src = "./img/playerRightSideLook.png"
leftLook.src = "./img/playerLeftSideLook.png"
wall.src = "./img/wall.png"
spiderImg.src = "./img/spider.png"
cloudImg.src = "./img/cloud.png"



function dragonSpawn() {
    if (!gameOverFlag) {
        setTimeout(() => {
            if (!gameOverFlag) {
                dragon.update()
            }
        }, dragonDelay)
    }
}



function gameOverRefresh() {
    if (gameOverFlag) {
        if (keyInputs["KeyR"]) {
            window.location.reload();
            keyInputs[e.code] = false
            } 
    }  
    requestAnimationFrame(gameOverRefresh)
}

function dragonCountDown() {
    setTimeout(() => {
        if (!gameOverFlag && !countDownFlag1) {
            countDownFlag1 = true
            c2.clearRect(0, 0, canvas2.width, canvas2.height)
            c2.font = "30px Comic Sans MS"
            c2.fillStyle = "red"
            c2.textAlign = "center"
            c2.fillText("Dragon will spawn in 3 seconds", canvas.width / 2, 50)
        }
    }, dragonDelay - 3000)

    setTimeout(() => {
        if (!gameOverFlag && !countDownFlag2) {
            countDownFlag2 = true
            c2.clearRect(0, 0, canvas2.width, canvas2.height)
            c2.fillText("Dragon will spawn in 2 seconds", canvas.width / 2, 50)
        }
    }, dragonDelay - 2000)

    setTimeout(() => {
        if (!gameOverFlag && !countDownFlag3) {
            countDownFlag3 = true
            c2.clearRect(0, 0, canvas2.width, canvas2.height)
            c2.fillText("Dragon will spawn in 1 second", canvas.width / 2, 50)
        }
    }, dragonDelay - 1000)
}

function main(){
    

    c.fillStyle = "skyblue"
    c.fillRect(0, 0, canvas.width, canvas.height)

    c.fillStyle = "green"
    c.fillRect(0, 580, canvas.width, 20)
    drawClouds()

    player.update()
    spider.update()
    wallGen.drawWalls()
    dragonSpawn()
    hS.highScore()

    cloud.overlapping()
    outCloudReplacement()
    spider.hitbox()
    dragon.hitbox()
    progress.update()
    dragonCountDown()
    win.win()


    if (!gameOverFlag){
        requestAnimationFrame(main)
    }
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
    c2.globalAlpha = 0.7
    c2.fillStyle = "black"
    c2.fillRect(0, 0, canvas.width, canvas.height)
    c2.globalAlpha = 1
    c2.fillStyle = "red"
    c2.font = "50px Comic Sans MS"
    c2.textAlign = "center"
    c2.fillText("Game Over", canvas.width / 2, canvas.height / 2)
    c2.font = "30px Comic Sans MS"
    c2.fillText("Press R to play again", canvas.width / 2, canvas.height / 2 + 50)


}


document.addEventListener("keydown", function(e) {
    keyInputs[e.code] = true
})

document.addEventListener("keyup", function(e) {
    keyInputs[e.code] = false
})

main()
player.backGroundMusic()
gameOverRefresh()




