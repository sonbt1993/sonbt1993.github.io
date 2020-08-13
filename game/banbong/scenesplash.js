class SceneSplash extends Scene {
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

        // play button
        var playButton = document.createElement('img');
        playButton.src = "images/icons/play.png";
        playButton.alt = "Play game";   

        var breakLine = document.createElement("br");

        // setting button
        var settingButton = document.createElement('img');
        settingButton.src = "images/icons/settings.png";
        settingButton.alt = "Settings";

        var splashScreen = document.createElement('img');
        splashScreen.src = "images/splashscreen.png";
        splashScreen.alt = "gamestartscreen"; 

        // wrap them together
        gameContainer.appendChild(div);
        
        div.appendChild(playButton);
        div.appendChild(breakLine);
        div.appendChild(settingButton);
        //div.appendChild(splashScreen)
        

        
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