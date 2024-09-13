const canvas = document.getElementById("canvas")
const c = canvas.getContext("2d")

let player = new Player()
let spider = new Spider()
let wallGen = new Wall()
let keyInputs = {}
let img = new Image()
let rightLook = new Image()
let leftLook = new Image()
let wall = new Image()
let spiderImg = new Image()

img.src = "./img/player.png"
rightLook.src = "./img/playerRightSideLook.png"
leftLook.src = "./img/playerLeftSideLook.png"
wall.src = "./img/wall.png"
spiderImg.src = "./img/spider.png"

function main(){
    c.fillStyle = "skyblue"
    c.fillRect(0, 0, canvas.width, canvas.height)
    c.fillStyle = "green"
    c.fillRect(0, 580, canvas.width, 20)
    
    player.update()
    spider.draw()
    wallGen.drawWalls()

    requestAnimationFrame(main)

}


document.addEventListener("keydown", function(e) {
    keyInputs[e.code] = true
})

document.addEventListener("keyup", function(e) {
    keyInputs[e.code] = false
})

backGroundMusic()
main()
