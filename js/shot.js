/*
class Shots {
    constructor(gameScreen) {
        this.gameScreen = gameScreen;
        // Van Position needed
        this.left = Math.floor(Math.random() * 300 + 70);
        this.top = 400;
        this.width = 3;
        this.height= 30;
        this.element = document.createElement('img');

        this.element.src = './assets/shot.png';
        this.element.style.position = 'absolute';

        this.element.style.width = `${this.width}px`;
        this.element.style.height = `${this.height}px`;

        this.element.style.left = `${this.left}px`;
        this.element.style.top = `${this.top}px`;

        this.gameScreen.appendChild(this.element);
        

    }

move() {
    // Moves up ??
    this.top -= 3;

    this.updatePosition();
}

updatePosition() {
    this.element.style.left = `${this.left}px`;
    this.element.style.top = `${this.top}px`;
}


}
*/