class Iron{  
    constructor(x,y){
        this.body = Bodies.rectangle(x,y,80,40,{restitution:0.3,friction:3,density:30});
        World.add(world,this.body);
        this.width = 80;
        this.height = 40;
    }
    display(){
        var pos = this.body.position;
        var angle = this.body.angle;
        push();
        rotate(angle);
        translate(pos.x,pos.y);
        fill("grey");
        stroke("black");
        strokeWeight(3);
        rectMode(CENTER);
        rect(0,0,this.width,this.height);
    }
}