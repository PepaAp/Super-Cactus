class Win {
    constructor() {
        this.winFlag = false
        this.houseX = 9900
        this.endMap = 10000
        this.y = 185
        this.width = 400    
        this.height = 400
    }
    win() {
        //checking if player is at the end of map
        if (player.x > this.endMap) {
            this.winFlag = true
            player.x = this.endMap
            if (this.winFlag) {
                window.location.href = "../win/index.html"
            }
        }
    }
    
    house () {
        c.drawImage(houseImg, this.houseX - player.x + player.playerInitialPosition, this.y, this.width, this.height)
    }

}
