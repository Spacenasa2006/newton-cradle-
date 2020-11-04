class Bob{
    constructor(x,y,color){
       var options={restitution:1,friction:0,frictionAir:0.0,slop:1,inertia:Infinity}
       this.x=x
       this.y=y 
       this.body=Bodies.rectangle(this.x,this.y,40,40,options)
       this.color=color;
       World.add(world,this.body)   
    }
    display(){
        var pos=this.body.position
        push()
        translate(pos.x,pos.y)
        rectMode(CENTER);
        fill(this.color)
        ellipse(0,0,this.r,this.r)
        pop();
    }
}