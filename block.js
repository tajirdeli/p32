
  class Block {
    constructor(x, y, width, height) {
      var options = {
          'restitution':0.8,
         'friction':0
        
      }
      this.body = Bodies.rectangle(x, y, width, height, options);
      this.width = width;
      this.height = height;
      
      World.add(world, this.body);
      this.visibility=255
    }
    display(){
      if(this.body.speed<3){
      var pos =this.body.position;
      var angle = this.body.angle;
      push();
      translate(pos.x, pos.y);
      rotate(angle);
      rectMode(CENTER);
      stroke ('green')
      strokeWeight(5)
      fill(255);
      rect(0, 0, this.width, this.height);
      pop();
      }
      else{
        World.remove(world,this.body)
        this.visibility=this.visibility-10}
    }
    Score(){
      if (this.visibility<0&&this.visibility>-6){
        score=score+1
      }
    }
  };
            