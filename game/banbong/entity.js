class Entity {
    constructor() {
        gameEngine.addEntity(this);
    }

    update() {
        console.log("Please implement update method");
    }

    render() {
        console.log("Please implement render method");
    }
}
