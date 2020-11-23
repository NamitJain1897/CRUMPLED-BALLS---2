class Dustbin{
    constructor(x, y, width, height, angle) {
        var options = {
          isStatic:true
        }
        this.body = Bodies.rectangle(x, y, width, height, options);
        this.width = width;
        this.height = height;
        
        World.add(world, this.body);
         this.image = loadImage("dustbingreen.png")
      }
      display(){
        
        var pos = this.body.position;
        fill(255);
       rectMode(CENTER);
       rect(pos.x,pos.y,this.width,this.height);
       imageMode(CENTER);
        image(this.image,750,550)
          
        
      }
}
