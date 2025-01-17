class HighScore {
    highScore() {
        c.font = "30px Comic Sans MS";
        c.fillStyle = "red";

        //sets the starting highscore to 0 as a local storage item
        if (window.localStorage.getItem("highScore") === null) {
            window.localStorage.setItem("highScore", 0);
        }

        //updates the highScore and progress
        const currentHighScore = Number(window.localStorage.getItem("highScore"));
        const currentProgress = Number(progress.progress.toFixed(0));
        
        //updates highscore 
        if (currentProgress > currentHighScore) {
            window.localStorage.setItem("highScore", currentProgress);
        }
        //saves highscore to an intiger and displayes it
        this.hS = window.localStorage.getItem("highScore");
        c.fillText(`High Score: ${this.hS}`, canvas.width - 250, 30);
    }
    
    checkPoint() {

        //setting checkpoint starting point to zero
        if (window.localStorage.getItem("highScore") === null) {
            window.localStorage.setItem("highScore", 0);
        }
        
        //updating lastcheckpoint and current checkpoint
        const lastcheckPoint = Number(window.localStorage.getItem("highScore"));
        const currentChechPoint = Number(player.checkPoint);
        //saves checkpoints to local storage
        if (currentChechPoint > lastcheckPoint) {
            window.localStorage.setItem("checkPoint", currentChechPoint);
        }

        player.checkPoint = Number(window.localStorage.getItem("checkPoint"))
        checkpointReset()

        
    }
}