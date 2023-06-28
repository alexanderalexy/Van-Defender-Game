class Attackers {
    constructor(gameScreen) {
        this.gameScreen = gameScreen;
        this.left = Math.floor(Math.random() * 430 + 70);
        this.top = -80;
        this.width = 80;
        this.height= 80;
        this.element = document.createElement('img');

        this.element.src = './assets/alien2.png';
        this.element.style.position = 'absolute';

        this.element.style.width = `${this.width}px`;
        this.element.style.height = `${this.height}px`;

        this.element.style.left = `${this.left}px`;
        this.element.style.top = `${this.top}px`;

        this.gameScreen.appendChild(this.element);
        

    }

move() {
    this.top += 2;

    this.updatePosition();
}

updatePosition() {
    this.element.style.left = `${this.left}px`;
    this.element.style.top = `${this.top}px`;
}


}