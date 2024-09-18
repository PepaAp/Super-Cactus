class Progress {
    constructor() {
        this.progress = 0
        this.end = 500
    }

    update() {
        this.progress = player.x / 100
        c.font = "30px Arial"
        c.fillStyle = "red"
        c.fillText(`Progress: ${this.progress.toFixed(0)} / ${this.end}`, 10, 30)
    }
}