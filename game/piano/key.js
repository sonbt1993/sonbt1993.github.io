class Key extends Entity {
    constructor(x, y, width, height, color, type) {
       super();
        [this.x, this.y, this.width, this.height, this.color, this.type] 
        = [x, y, width, height, color, type]      
        
        if(this.type = "black"){
            this.width = width/2;
            this.height = height* 0.6;
        }
    }
    update() {
        console.log("Please implement update method");
    }
    render() {
        gameEngine.context.fillRect(this.x, this.y, this.width, this.height, this.color) 
        gameEngine.context.stroke()
        console.log("Please implement render method");
    }

    
}

