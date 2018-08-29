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
  var gameMain;
  var gameOverMain;

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

    gameMain = buildDom(`
    <main>
      <h1>this is the game, lol</h1>
    </main>
    `)
    
    document.body.appendChild(gameMain);

    window.setTimeout(function () {
      gameOver();
    }, 3000)
  }

  function destroyGame() {
    gameMain.remove();
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