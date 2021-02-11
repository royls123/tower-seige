class Rope {
    constructor(body1,point){
        var option={
            bodyA:body1,
            pointB:point,stiffnes:1,length:50,
           
        }
      
        this.rope=Constraint.create(option)
        World.add(world,this.rope)
    }
    fly(){
        this.rope.bodyA=null
    }

    display(){
        if(this.rope.bodyA){
        var pointA=this.rope.bodyA.position
        var pointB=this.rope.pointB
        stroke("WHITE")
        strokeWeight(4)
        line(pointA.x,pointA.y,pointB.x,pointB.y)
    }
    }
}