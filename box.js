class Box{
    constructor(x, y, colour) {
        var options = {
            'restitution':0.4,
            'friction':0.1,
            'density':0.5
        }
        this.body = Bodies.rectangle(x, y, 30, 30, options);
        this.width = 30;
        this.height = 30;
        this.colour = colour;
        World.add(world, this.body);
      }
      display(){
        var angle = this.body.angle;
        push();
        translate(this.body.position.x, this.body.position.y);
        rotate(angle);
        switch (this.colour) {
          case 0 :
            fill(246, 189, 96);
            rectMode(CENTER);
            rect(0, 0, this.width, this.height);
            break;
          case 1 :
            fill(245, 202, 195);
            rectMode(CENTER);
            rect(0, 0, this.width, this.height);
            break;
          case 2 :
            fill(242, 132, 130);
            rectMode(CENTER);
            rect(0, 0, this.width, this.height);
            break;
          case 3 :
            fill(157, 129, 137);
            rectMode(CENTER);
            rect(0, 0, this.width, this.height);
            break;
          default :
            fill("black")
            rectMode(CENTER);
            rect(0, 0, this.width, this.height);
            break;
        }
        pop();
      }
}
