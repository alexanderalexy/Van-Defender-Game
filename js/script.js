window.addEventListener('load', () => {
    const startButton = document.getElementById("start-button");
    const restartButton = document.getElementById("restart-button");
    const restartButtonTwo = document.getElementById("restart-button-two");

    function mainMel() {
      let audio = new Audio('./assets/main.wav')
      audio.play();
    }

    mainMel();
   
 
    let game;

    function startGame() {
      game = new Game();
      game.start();
      document.addEventListener('keydown', event => {
        const key = event.key;
        const possibleKeystrokes = [
          "ArrowLeft",
          "ArrowUp",
          "ArrowRight",
          "ArrowDown",

        ];

        if(possibleKeystrokes.includes(key)) {

          switch (key) {
            case "ArrowLeft":
              game.player.directionX = -1;
              break;    
            case "ArrowUp":
              game.player.directionY = -1;
              break;
            case "ArrowRight":
              game.player.directionX = 1;
              break;
            case "ArrowDown": 
              game.player.directionY = 1;
              break;

          }

          game.player.move()

        }
      })
      
      document.addEventListener('keyup', (event) => {

        const key = event.key;
        const possibleKeystrokes = [
          "ArrowLeft",
          "ArrowUp",
          "ArrowRight",
          "ArrowDown",
        ];

        if(possibleKeystrokes.includes(key)) {
          switch (key) {
            case "ArrowLeft":
            case "ArrowRight":
              game.player.directionX = 0;
              break;
              case "ArrowUp":
              case "ArrowDown": 
               game.player.directionY = 0;
              break;
          }
        }
      })
      
// shots with mouse
/*     document.addEventListener('mousedown', mouseDown);

       function mouseDown(e){
       if(game) {
         console.log('fire');
       
      }
    }

*/

    }

    function btn() {
      let audio = new Audio('./assets/btn.wav')
      audio.play();
    }

    startButton.addEventListener('click', function () {
        startGame();
        btn();
        
        
        
      })

      

      restartButton.addEventListener('click', function () {
        location.reload();
        
    })

      restartButtonTwo.addEventListener('click', function () {
      location.reload();
       
    })
   
     
})