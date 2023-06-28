class Player {
    constructor(gameScreen, bulletController) {
        this.gameScreen = gameScreen;
        this.width = 80;
        this.height = 140;
        this.element = document.createElement('img');
        this.top = 450;
        this.left = 360;
        this.directionX = 0;


        this.element.src = './assets/vanForward.png';
        this.element.style.position = 'absolute';

        this.element.style.width = `${this.width}px`
        this.element.style.height = `${this.height}px`

        this.element.style.top = `${this.top}px`
        this.element.style.left = `${this.left}px`

        this.gameScreen.appendChild(this.element);

        
    }

    move() {
        this.left += this.directionX;
        if(this.left < 10) {
            this.left = 10;
        }

        if (this.left > this.gameScreen.offsetWidth - this.width - 50) {
            this.left = this.gameScreen.offsetWidth - this.width - 50;
        } 

        
        this.updatePosition();

    }

    

    updatePosition() {
        this.element.style.left = `${this.left}px`;
    }

    
  didCollide(attacker) {
    const playerRect = this.element.getBoundingClientRect();
    const attackerRect = attacker.element.getBoundingClientRect();

    if (
      playerRect.left < attackerRect.right &&
      playerRect.right > attackerRect.left &&
      playerRect.top < attackerRect.bottom &&
      playerRect.bottom > attackerRect.top
    ) {
      return true;
    } else {
      return false;
    }
  }
   
}