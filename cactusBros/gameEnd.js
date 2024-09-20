class Win {
    constructor() {

    }

    winAlert() {
        if (player.x > 500) {
            alert("You Win!")
            window.location.href = "../index.html"
        }
    }
}