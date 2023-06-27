class Game {
    constructor() {
        this.startScreen = document.getElementById('game-intro');
        this.gameScreen = document.getElementById('game-screen');
        this.gameEndScreen = document.getElementById('game-end');
        this.status = document.getElementById('game-container');
        this.player = new Player(this.gameScreen);
        this.attackers = [];
        this.gameOver = false;
        this.win = false;
        this.score = 0;
        this.lives = 10;
        
        
    }

    start() {
        
        
        this.startScreen.style.display = 'none';
        this.gameScreen.style.display = 'block';
        this.status.style.display = 'flex';
        this.gameLoop();

      
    
}


gameLoop() {
    this.update();

    this.attackers.forEach( (attacker) => {
        attacker.move();
    })
    if (this.animateId % 180 === 0) {
        this.attackers.push(new Attackers(this.gameScreen));
    }

    if(this.isGameOver) {
        
    } else {
        this.animateId = requestAnimationFrame (() => this.gameLoop());
    }

    }



update() {
    this.player.move();
   
}

endGame() {
    this.player.element.remove();
    this.obstacles.forEach(obstacle => obstacle.element.remove());


    this.gameScreen.style.display = "none";
    this.gameEndScreen.style.display = "block";
}

}