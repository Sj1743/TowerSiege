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
        this.Visiblity = 255;
        this.touching = false;
        World.add(world, this.body);
      }

      display(){
        
        if(this.body.speed < 6){
          
        push();
        translate(this.body.position.x, this.body.position.y);
        rotate(this.body.angle);
        rectMode(CENTER);
        var hue = this.colour;
        switch (hue) {
          case 0 :
            fill(246, 189, 96);
            break;
          case 1 :
            fill(245, 202, 195);
            break;
          case 2 :
            fill(242, 132, 130);
            break;
          case 3 :
            fill(157, 129, 137);
            break;
          default :
            fill("black");
            break;
        }
        rect(0, 0, this.width, this.height);
        pop();
        }
          else{
          World.remove(world, this.body);
          push();
          rotate(this.body.angle);
          translate(this.body.position.x, this.body.position.y);
          this.Visiblity = this.Visiblity - 5;
          fill(255,this.Visiblity);
          //rect(0, 0, 30, 30);
          pop();
        }      
      }

      score(){
        if (this.Visiblity < 0 && this.Visiblity > 100){
          score++;
        }
      }
}
