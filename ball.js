class Ball{
    constructor() {
        var options = {
            isStatic:false,
friction:1.5,density:1.2
        }
        this.body = Bodies.circle(200, 350, 50, options);
        this.radius = 50;
        this.image=loadImage("polygon.png")
       

        World.add(world, this.body); 
      }
      display(){
        var angle = this.body.angle;
        var pos=this.body.position
       
        push();
        translate(pos.x,pos.y)
       rotate (angle)
       imageMode(CENTER)
       image(this.image,0,0,this.radius,this.radius)
        pop();
        
      }
}