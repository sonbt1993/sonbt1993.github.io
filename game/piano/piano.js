class Piano extends Entity {
    constructor(x, y, width, height, color, keys) {
       super();
        [this.x, this.y, this.width, this.height, this.color] 
        = [x, y, width, height, color];      
        this.keys=[];
    }
    update() {
        console.log("Please implement update method");
    }
    render() {
        gameEngine.context.fillRect(this.x, this.y, this.width, this.height, this.color)          
        gameEngine.context.stroke()
        console.log("Please implement render method");
    }
    generateKey(){
        var blackKeys=[];
        var whiteKeys=[];
        for(let i=0;i<keyNotes.length;i++){
            if(keyNotes[i].name.includes("s")){                          
                blackKeys.push(keyNotes[i])
            } else{
                whiteKeys[i].x =            
                whiteKeys.push(keyNotes[i])
            }
        }
        for(let i=0;i<whiteKeys.length;i++){
            let key = new Key(whiteKeys[i])
            this.keys.push(whiteKeys[i])
        }
        for(let i=0;i<blackKeys.lenghth;i++){
            let key = new Key(blackKeys[i])
            this.keys.push(blackKeys[i])
        }

    }
}

