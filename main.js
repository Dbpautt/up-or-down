'use strict';
console.log('hello');

function buildDom(html) {
  var div = document.createElement('div');
  div.innerHTML = html;
  return div.children[0];
}

function main (){

  // ---Start
  
  var splashMain; 
  var gameOverMain;
  var game; // instance of game

  function buildSplash() {
    splashMain = buildDom(`  
      <main>
        <h1>Up or Down</h1>
        <button>Start</button>
      </main>
    `)
    var button = splashMain.querySelector('button')
    
    button.addEventListener('click', startGame);
    document.body.appendChild(splashMain);
  }
    

  function destroySplash(){
    splashMain.remove();
  }


  // ---game

  function startGame(){
    destroySplash();
    destroyGameOver();

    // temporary!!!!
    game = new Game();
    game.start();

    window.setTimeout(function () {
      gameOver();
    }, 3000)
  }

  function destroyGame() {
    game.destroy();
  }

  // ---game over

  
  function gameOver(){
    destroyGame();
    buildGameOver();
  }

  function buildGameOver() {

    // @todo score
    var score = 99;

    gameOverMain = buildDom(`
    <main>
     <h1>game over</h1>
      <p>your score `+ score + `</p>
      <button>Start</button>
    </main>
    `)

    var button = gameOverMain.querySelector('button');
    
    button.addEventListener('click', startGame);

    document.body.appendChild(gameOverMain);
  }

    function destroyGameOver() {
      if (gameOverMain){
        gameOverMain.remove()
      }
    }

  // ---initialize
  
  buildSplash();
}

window.addEventListener('load',main);