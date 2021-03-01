class Launcher{
    constructor(a,b){
        var options = {
            bodyA:a,
            pointB:b,
            stiffness:0.01,
            lenght:20
        }
        this.pointB = b;
        this.bodyA = a;
        this.launcher = Constraint.create(options);
        World.add(world,this.launcher);
    }
    fly(){
        this.launcher.bodyA=null;
    }
    display(){
        if(this.launcher.bodyA){
            var pointA = this.launcher.bodyA.position;
            var pointB = this.pointB;
            line(pointA.x,pointA.y,pointB.x,pointB.y);
        }
    }
}