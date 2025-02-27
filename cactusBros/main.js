//setting up the canvas
const canvas = document.getElementById("canvas")
const c = canvas.getContext("2d")

//creating the classes variable 
let player = new Player()
let spider = new Spider()
let wallGen = new Wall()
let cloudGen = new Cloud()
let progress = new Progress()
let dragon = new Dragon()
let win = new Win()
let hS = new HighScore()
let ladder = new Ladder()
let magnet = new Magnet()
let pipe = new Pipe()
let spikes = new Spikes()

//setting up the images
let keyInputs = {}
let img = new Image()
let rightLook = new Image()
let leftLook = new Image()
let wall = new Image()
let spiderImg = new Image()
let cloudImg = new Image()
let houseImg = new Image() 

//setting up the audio
let dragonWarning = new Audio("./sounds/warningDragon.mp3")
let jumpS = new Audio('./sounds/jump.mp3')


//setting up the flags and deafult dragon spawning time
let gameOverFlag = false
let countDownFlag1 = false
let countDownFlag2 = false
let countDownFlag3 = false
let dragonDelay = 5000

//setting up the sources for images
img.src = "./img/player.png"
rightLook.src = "./img/playerRightSideLook.png"
leftLook.src = "./img/playerLeftSideLook.png"
wall.src = "./img/wall.png"
spiderImg.src = "./img/spider.png"
cloudImg.src = "./img/cloud.png"
houseImg.src = "./img/house.png"


//spawning dragon after the time (should repeat but it is not working)
function dragonSpawn() {
    if (!gameOverFlag ) {
        setTimeout(() => {
            if (!gameOverFlag) {
                dragon.update()
            }
        }, dragonDelay)
    }
}

//functions for reseting the restart for checkpoints and resetting
function checkpointReset () {
    if (keyInputs["KeyU"]) {
        window.localStorage.setItem("checkPoint", 0);
        window.location.reload();
        keyInputs[e.code] = false
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

//alerting player about the dragon incoming 
function dragonCountDown() {
    setTimeout(() => {
        if (!gameOverFlag && !countDownFlag1) {
            countDownFlag1 = true
            c2.clearRect(0, 0, canvas2.width, canvas2.height)
            c2.font = "30px Comic Sans MS"
            c2.fillStyle = "red"
            c2.textAlign = "center"
            c2.fillText("Dragon will spawn in 3 seconds", canvas.width / 2, 50)
            dragonWarning.volume = 0.2
            dragonWarning.play()
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

function dragonUpdate() {
    //updating the dragon
    dragonSpawn()
    dragon.hitbox()
    dragonCountDown()
}


function main(){
    
    //calling all the functions and setting up the enviroment
    hS.checkPoint()
    c.fillStyle = "skyblue"
    c.fillRect(0, 0, canvas.width, canvas.height)

    c.fillStyle = "green"
    c.fillRect(0, 580, canvas.width, 20)
    drawClouds()
    spikes.update()
    win.house()

    
    player.update()
    magnet.update()
    wallGen.hitbox()
    wallGen.drawWalls()
    
    dragonUpdate()
    pipe.update()
    ladder.update()
    spider.update()
    progress.update()
    hS.highScore()

    cloud.overlapping()
    outCloudReplacement()
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
    //playeing the gameover music stopping the BG music and allowing player to restart
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

function gameOverBack() {
    window.location.href = "../index.html"
}

//listening for input keys
document.addEventListener("keydown", function(e) {
    keyInputs[e.code] = true
})

document.addEventListener("keyup", function(e) {
    keyInputs[e.code] = false
})

main()
//spawning player at checkpoint and settin the distance to be the same for each spider
spider.distance *= spider.xPos.length
player.backGroundMusic()
gameOverRefresh()

player.x = player.checkPoint


