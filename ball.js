class Ball{
    constructor(x,y,radius){
        var variable_options={
            'restitution':0.3,
            'friction': 0.5,
            'density': 1.2
        }
        this.body=Bodies.circle(x,y,radius,variable_options);
        this.radius = radius;
        this.image = loadImage("Sprites/ball.png");
        World.add(world,this.body);
    }
    display(){
        
        var pos = this.body.position;
        var angle = this.body.angle;
        
        push();
        translate(pos.x,pos.y);
        rotate(angle);
        imageMode(CENTER);
        image(this.image,0,0,80,80);
        pop();
    }
}