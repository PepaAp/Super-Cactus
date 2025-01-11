class Win {
    constructor() {
        this.winFlag = false
        this.houseX = 9900
        this.y = 185
        this.width = 400    
        this.height = 400
    }
    win() {
        if (player.x > 10000) {
            this.winFlag = true
            player.x = 10000
            if (this.winFlag) {
                window.location.href = "../win/index.html"
            }
        }
    }
    
    house () {
        c.drawImage(houseImg, this.houseX - player.x + player.playerInitialPosition, this.y, this.width, this.height)
    }

}
