class Paper {
    constructor (x,y) {
        var options = {
            isStatic : false,
            restitution : 0.3,
            friction : 2.0 ,
            density : 1.5
        }
        
        this.body = Bodies.circle(x,y,20,options);
        this.radius = 20;
    World.add(world,this.body);
    this.image = loadImage("paper.png");
      }
    display (){
      var pos = this.body.position
    var  angle = this.body.angle
    push();
    translate(pos.x,pos.y);
    rotate(angle);
    imageMode(CENTER);
      image(this.image,0,0,70,70)
      
      pop();
    }
}