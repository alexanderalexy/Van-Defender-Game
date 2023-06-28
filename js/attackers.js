class Attackers {
    constructor(gameScreen) {
        this.gameScreen = gameScreen;
        this.left = Math.floor(Math.random() * 500 + 70);
        this.top = -80;
        this.width = 80;
        this.height= 80;
        this.element = document.createElement('img');
        this.imgArray = ['./assets/alien2.png', './assets/alien.png', './assets/alien3.png'];
        this.element.src = this.imgArray[Math.floor(Math.random() * this.imgArray.length)];
        this.element.style.position = 'absolute';

        this.element.style.width = `${this.width}px`;
        this.element.style.height = `${this.height}px`;

        this.element.style.left = `${this.left}px`;
        this.element.style.top = `${this.top}px`;

        this.gameScreen.appendChild(this.element);
        
        this.speed = 8; 

    }

move() {
    this.top += this.speed;

    this.updatePosition();
}

updatePosition() {
    this.element.style.left = `${this.left}px`;
    this.element.style.top = `${this.top}px`;
}


}