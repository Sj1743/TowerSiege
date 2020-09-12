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
        this.visiblity = 255;
        World.add(world, this.body);
      }

      display(){
        //var fade = 255;
        if(this.body.speed < 5){
          var angle = this.body.angle;
        push();
        translate(this.body.position.x, this.body.position.y);
        rotate(angle);
        var hue = this.colour;
        rectMode(CENTER);
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
        }else{
          World.remove(world, this.body);
          push();
          this.visibility = this.visibility - 0.001;
          pop();
          // World.remove(world, this.body);
          // push();
          // translate(this.body.position.x, this.body.position.y);
          // rotate(this.body.angle);
          // fade = fade - 50;
          // tint(255, 10);
          // rect(0, 0, 30, 30);
          // pop();
          // console.log(fade);
        }      
      }
}
