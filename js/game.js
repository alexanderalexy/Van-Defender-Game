class Game {
    constructor() {
        this.startScreen = document.getElementById('game-intro');
        this.gameScreen = document.getElementById('game-screen');
        this.gameEndScreen = document.getElementById('game-end');
        this.gameWinScreen = document.getElementById('game-win')
        this.status = document.getElementById('game-container');
        this.player = new Player(this.gameScreen);
        this.attackers = [];
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

  
    if (this.animateId % 25 === 0) {
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



update() {
   
    this.player.move();
    const attackersToKeep = [];
   this.attackers.forEach(attacker => {
    if(this.score >= 5) {
        attacker.speed = 10;
      } 
    if(this.score >= 50 ) {
        attacker.speed = 13;
    }

    if(this.score >= 75) {
        attacker.speed = 15;
    }
    attacker.move();
    // collide    new
    function playCol() {
        let audio = new Audio('./assets/col.ogg')
        audio.play();
      }
    if (this.player.didCollide(attacker)) {
        playCol();
        attacker.element.remove();
        this.score += 1;
        score.textContent = parseInt(score.textContent) + 1 ;
        
    } 

    

    else if(attacker.top > this.gameScreen.offsetHeight) {
        function lost() {
            let audio = new Audio('./assets/lost.wav')
            audio.play();
          }

          lost()
       this.lives -=10;
       lives.textContent = parseInt(lives.textContent) - 10 + '%';
       console.log(this.lives)
        // score.textContent = parseInt(score.textContent) + 1 ;
    } else {
        attackersToKeep.push(attacker);
    }
    })
    this.attackers = attackersToKeep; 
    



   if( this.lives <= 0 ) {
        this.endGame();
        this.gameOver = true;
        console.log(lost)
    }


    else if(this.score == 100) {
        this.winGame();
        this.win = true;
        
        
      }

      
}
 
    endGame() {
        this.player.element.remove();
        this.attackers.forEach(attacker => attacker.element.remove());
    
        function end() {
            let audio = new Audio('./assets/end.wav')
            audio.play();
          }

          end();
    
        // Hide game screen
        this.gameScreen.style.display = "none";
        // Show end game screen
        this.gameEndScreen.style.display = "flex";
      }

     

      winGame() {
        this.player.element.remove();
        this.attackers.forEach(attacker => attacker.element.remove());
       
        
         function win() {
          let audio = new Audio('./assets/win.wav')
          audio.play();
         }        

         win();
        // Hide game screen
        this.gameScreen.style.display = "none";
        // Show win game screen
        this.gameWinScreen.style.display = "flex";
        
      }
   
}

