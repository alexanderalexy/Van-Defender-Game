window.addEventListener('load', () => {
    const startButton = document.getElementById("start-button");
 
    let game;

    function startGame() {
      game = new Game();
      game.start();
      document.addEventListener('keydown', event => {
        const key = event.key;
        const possibleKeystrokes = [
          "ArrowLeft",
          "ArrowRight",
        ];

        if(possibleKeystrokes.includes(key)) {

          switch (key) {
            case "ArrowLeft":
              game.player.directionX = -1;
              break;
            case "ArrowRight":
              game.player.directionX = 1;
              break;

          }

          game.player.move()

        }
      })
      
      document.addEventListener('keyup', (event) => {

        const key = event.key;
        const possibleKeystrokes = [
          "ArrowLeft",
          "ArrowRight",
        ];

        if(possibleKeystrokes.includes(key)) {
          switch (key) {
            case "ArrowLeft":
            case "ArrowRight":
              game.player.directionX = 0;
              break;
          }
        }
      })
      
// shots with mouse
     document.addEventListener('mousedown', mouseDown);

    function mouseDown(e){
       if(game) {
         console.log('fire');
       
      }
    }

    }

    startButton.addEventListener('click', function () {
        startGame();
        
      })

       
    
})