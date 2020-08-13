var sceneManager = {
    scenes: [],
    currentScene: null,

    addScene: function(scene) {
        sceneManager.scenes.push(scene);
    },

    transition: function (scene) {
        if( sceneManager.currentScene != null){
            sceneManager.currentScene.remove();
        }        
        sceneManager.currentScene = scene;
        sceneManager.currentScene.load(); 
        sceneManager.currentScene.render();        
    },
}

class Scene {
    constructor() {
        sceneManager.scenes.push(this);
    }

    load() {
        console.log("Please implement load function");
    }

    render() {
        console.log("Please implement render function");
    }

    remove() {
        console.log("Please implement render function");
    }
}

