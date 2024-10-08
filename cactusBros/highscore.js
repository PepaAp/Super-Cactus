class HighScore {
    highScore() {
        c.font = "30px Comic Sans MS";
        c.fillStyle = "red";

        if (window.localStorage.getItem("highScore") === null) {
            window.localStorage.setItem("highScore", 0);
        }

        const currentHighScore = Number(window.localStorage.getItem("highScore"));
        const currentProgress = Number(progress.progress.toFixed(0));

        if (currentProgress > currentHighScore) {
            window.localStorage.setItem("highScore", currentProgress);
        }

        this.hS = window.localStorage.getItem("highScore");
        c.fillText(`High Score: ${this.hS}`, canvas.width - 250, 30);
    }
}