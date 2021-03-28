class Control{
    constructor(bA,bB){
        var options={
            bodyA:bA,
            bodyB:bB,
            stiffness:0.1,
            length:40
        }
        this.cont=cont.create(options);
        World.add(world,this.cont);
    }
    display(){
        line(this.cont.bodyA.position.x,this.cont.bodyA.position.y,this.cont.bodyB.position.x,this.cont.bodyB.position.y)
    }
}