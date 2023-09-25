# VAN DEFENDER

![Game Screenshot](./assets/Van%20defender%20screen.png)
[VAN DEFENDER](https://alexanderalexy.github.io/Van-Defender-Game/)

## Description
VAN DEFENDER is a simple reaction game where your task is to use a van to protect the inhabitants of a village from an alien attack. The attacking aliens must be destroyed by ramming with the van, and you must prevent them from passing the van. To win the game, you need to destroy 100 attackers. However, be careful, as the attacks become faster and more intense over time. If 10 attackers manage to get past you, all the villagers will be killed, and the game is over.

Controls: Use the arrow keys on your keyboard, mainly the left and right keys.

Design: The game features a nostalgic mix of 1980s-style games with influences from brutalist design.


## MVP (Minimum Viable Product)
- Startscreen
- Gamescreen
- Win game screen
- Game over screen
- Win / lose logic
- Playable game 



## Backlog

- Implement visual effects, such as the game screen flashing red when life energy drops to 30%.

- Implement a visual effect when you destroy 90 attackers, making the game screen flash green.

- Add the ability to destroy attackers with shots from the van.

## Data structure
- Game: Manages the overall game state and logic.
- Player: Represents the van controlled by the player.
- Attackers: Represents the attacking aliens.
- Shot: Represents the shots fired by the player.
- Sound: Manages game audio.
- Script: Handles event listeners and game initialization.


## States y States Transitions
- Start Screen: Initial screen with the game title and a "Start Game" button.

- Game Screen: The main gameplay screen where the player controls the van to defend against attackers.

- Win Game Screen: Displayed when the player wins the game (destroys 100 attackers).

- Game Over Screen: Displayed when the player loses the game (10 attackers pass the van).


## Task
1. Implement game logic for player movement and collision detection.
2. Implement game logic for attacker movement and spawning.
3. Implement win/lose conditions and display corresponding screens.
4. Add visual effects for in-game events (flashing screens).
5. Implement the ability to destroy attackers with shots.
6. Fine-tune game difficulty and balancing.
7. Add sound effects for various game events.
8. Polish game design and visuals.
9. Test the game for bugs and issues.
10. Deploy the game to a web server for online play.

## Links

- [Slides Link](https://docs.google.com/presentation/d/1xtD4P9ST9rey2GTAFrD1RDIR7SFFfyWGFIvo-KyvJkQ/edit?usp=sharing)
- [Github repository Link](https://github.com/alexanderalexy/Van-Defender-Game/tree/master)
- [Deployment Link](https://alexanderalexy.github.io/Van-Defender-Game/)