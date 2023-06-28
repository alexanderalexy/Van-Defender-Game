class Game {
    constructor() {
        this.startScreen = document.getElementById('game-intro');
        this.gameScreen = document.getElementById('game-screen');
        this.gameEndScreen = document.getElementById('game-end');
        this.gameWinScreen = document.getElementById('game-win')
        this.status = document.getElementById('game-container');
        this.line = document.getElementById('game-container2');
        this.player = new Player(this.gameScreen);
        this.attackers = [];
        //New
        this.shots = [];
        this.gameOver = false;
        this.win = false;
        this.score = 0;
        this.lives = 100;
        
        
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

    if(this.gameOver) {
        
    } 
    if(this.win) {

    }
    
    else {
        this.animateId = requestAnimationFrame (() => this.gameLoop());
    }

}
/*
        this.shots.forEach( (shot) => {
        shot.move();
        )}

 */

    
  


update() {
    this.player.move();
    const attackersToKeep = [];
   this.attackers.forEach(attacker => {
        attacker.move();
    // collide    
    if (this.player.didCollide(attacker)  ) {
        attacker.element.remove();
        this.lives -= 10;
        lives.textContent = parseInt(lives.textContent) - 10 + '%';
        console.log(this.lives)
    } else if(attacker.top > this.gameScreen.offsetHeight) {
        this.score += 1;
        score.textContent = parseInt(score.textContent) + 1 ;
    } else {
        attackersToKeep.push(attacker);
    }
    })
    this.attackers = attackersToKeep; 
    }


/*
   if( this.lives < = 0 ) {
        this.endGame();
        this.gameOver = true;
    }

 
    endGame() {
        this.player.element.remove();
        this.attackers.forEach(attacker => attacker.element.remove());
    
        
    
        // Hide game screen
        this.gameScreen.style.display = "none";
        // Show end game screen
        this.gameEndScreen.style.display = "flex";
      }

      if(this.score = 5) {
        this.winGame();
        this.win = true;
      }

      winGame() {
        this.player.element.remove();
        this.attackers.forEach(attacker => attacker.element.remove());

        // Hide game screen
          this.gameScreen.style.display = "none";
        // Show end game screen
        this.gameWinScreen.style.display = "flex";
      }
   */
}

