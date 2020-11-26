class Chain {
    constructor(body1, body2){
     this.body1 = body1;
     this.body2 = body2;
        var option = {
         bodyA:body1,
         bodyB:body2,
         stifness:0.02,
         length:10
     };  
     this.chain = Constraint.create(option)
     World.add(world,this.chain);
    }
    display(){
      var point1 = this.body1.position;
      var point2 = this.body2.position;
      
      //line(this.body1.position.x,this.body1.position.y,this.body2.position.x,this.body2.position.y);
      line(point1.x,point1.y,point2.x,point2.y);
    }
}