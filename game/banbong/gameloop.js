window.requestAnimationFrame = function(callback) {
    var currTime = new Date().getTime();
    var timeToCall = Math.max(0, 1000/gameLoop.fps - (currTime - gameLoop.prevTime));
    var id = window.setTimeout(function() { callback(currTime + timeToCall); }, 
      timeToCall);
      gameLoop.prevTime = currTime + timeToCall;
    return id;
};

window.cancelAnimationFrame = function(id) {
    clearTimeout(id);
};

var gameLoop = {
    prevTime: 0,
    fps: 24,

    main: function() {
        gameEngine.state.id = window.requestAnimationFrame(gameLoop.main);
        gameEngine.state = gameEngine.update();
        gameEngine.render();
    }
}