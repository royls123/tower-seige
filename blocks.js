class Block{
    constructor(x, y ) {
        var options = {
            isStatic:false,
friction:1.5,density:1.2
        }
        this.body = Bodies.rectangle(x, y, 30,50, options);
        this.width = 30;
        this.height = 50;
       

        World.add(world, this.body); 
      }
      display(){
        var angle = this.body.angle;
        var pos=this.body.position
        push();
        translate(pos.x,pos.y)
       rotate (angle)
       fill(Math.round(random(0,255)),Math.round(random(0,255)),Math.round(random(0,255)))
        rectMode(CENTER)
        rect(0,0,30,50)
        pop();
      }
}