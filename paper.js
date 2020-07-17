class Paper {
    constructor(x,y) {
        var options={
            isStatic:false,
            restitution:0.3,
            friction:0.5,
            density:1.2
        }
        this.radius=100;
        this.body=Bodies.circle(x,y,this.radius,options);

        World.add(world,this.body);
        
    }
    display() {
        var pos=this.body.position;
        var angle=this.body.angle;
        push();
        translate(pos.x,pos.y);
        rotate(angle);
        rectMode(CENTER);
        fill("pink");
        circle(pos.x,pos.y,this.radius);
        pop();
    }
}