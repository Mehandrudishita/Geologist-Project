class Stone{
    constructor(x,y){
       this.body = Bodies.rectangle(x,y,50,70,{restitution:0.3,friction:0.9,density:12});
       World.add(world,this.body);
       this.width = 50;
       this.height = 70; 
    }
    display(){
        var pos = this.body.position;
        var angle = this.body.angle;
        push();
        rotate(angle);
        translate(pos.x,pos.y);
        stroke("black");
        strokeWeight(7);
        fill("red");
        rectMode(CENTER);
        rect(0,0,this.width,this.height);
        pop();
    }
}