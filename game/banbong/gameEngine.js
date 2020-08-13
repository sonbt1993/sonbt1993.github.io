var gameEngine = {
    state: {
        id: 0,
        entities: [],
    },
    canvas: document.getElementById("game-canvas"),
    context: document.getElementById("game-canvas").getContext('2d'),

    addEntity: function(entity) {
        gameEngine.state.entities.push(entity);
    },

    update: function () {
      for (entity of gameEngine.state.entities) {
          entity.update();
      }

      return gameEngine.state;
    },

    render: function () {
        for (entity of gameEngine.state.entities) {
            entity.render();
        }
    }
};
