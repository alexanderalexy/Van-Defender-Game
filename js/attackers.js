class Attackers {
    constructor(gameScreen) {
        this.gameScreen = gameScreen;
        this.left = Math.floor(Math.random() * 500 + 70);
        this.top = -80;
        this.width = 80;
        this.height= 80;
        this.element = document.createElement('img');
        this.imgArray = ['./assets/alien2.png', './assets/alien.png', './assets/pizza.png', './assets/planet.png'];
        this.element.src = this.imgArray[Math.floor(Math.random() * this.imgArray.length)];
        this.element.style.position = 'absolute';

        this.element.style.width = `${this.width}px`;
        this.element.style.height = `${this.height}px`;

        this.element.style.left = `${this.left}px`;
        this.element.style.top = `${this.top}px`;

        this.gameScreen.appendChild(this.element);
        

    }

move() {
    this.top += 10;

    this.updatePosition();
}

updatePosition() {
    this.element.style.left = `${this.left}px`;
    this.element.style.top = `${this.top}px`;
}


}