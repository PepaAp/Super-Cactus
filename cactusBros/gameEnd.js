class Win {
    constructor() {
        this.winFlag = false
    }
    win() {
        if (player.x > 500) {
            this.winFlag = true
            if (this.winFlag) {
                window.location.href = "../win/index.html"
            }
        }
    }
}
