class SceneLevel extends Scene {
    constructor(id) {
        super();
        this.id = id;
        this.initHTML();
    }

    initHTML() {
        var gameContainer = document.getElementById("game-container");           

        // create div container
        var div = document.createElement('div');
        div.className = 'game-layer';
        div.id = this.id;

        // button 1
        var playButton = document.createElement('img');
        aButton.src = "images/icons/play.png";
        aButton.alt = "a";   

        var breakLine = document.createElement("br");

        // button 2
        var settingButton = document.createElement('img');
        bButton.src = "images/icons/settings.png";
        bButton.alt = "b";         

        // wrap them together
        gameContainer.appendChild(div);        
        div.appendChild(aButton);
        div.appendChild(breakLine);
        div.appendChild(bButton);
        
        

        
    }

    load() {

    }

    render() {
        document.getElementById(this.id).style.display = "block";
    }

    remove() {
        document.getElementById(this.id).style.display = "none";
    }
}