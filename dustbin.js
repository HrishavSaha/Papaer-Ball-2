class Dustbin{
    constructor(x,y,height,angle){
        var variable_options={
            'restitution': 0.8,
            'friction': 1.0,
            'density': 1,
            'isStatic': true
        }
        this.body=Bodies.rectangle(x,y,20,height,variable_options);
        this.width = 20;
        this.height = height;
        Matter.Body.setAngle(this.body,angle);
        World.add(world,this.body);
    }
    display(){
        
        var pos = this.body.position;
        var angle = this.body.angle;
        
        push();
        translate(pos.x,pos.y);
        rotate(angle);
        rectMode(CENTER);
        rect(0,0,this.width,this.height);
        pop();
    }
}