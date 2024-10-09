class Win {
    constructor() {
        this.winFlag = false
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
}
