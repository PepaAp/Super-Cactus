class Win {
    constructor() {
        this.winFlag = false
        this.houseX = 100
        this.y = 185
        this.width = 400    
        this.height = 400
    }
    win() {
        if (player.x > 50000) {
            this.winFlag = true
            player.x = 50000
            if (this.winFlag) {
                window.location.href = "../win/index.html"
            }
        }
    }
    
    house () {
        c.drawImage(houseImg, this.houseX - player.x + 100, this.y, this.width, this.height)
    }

}
