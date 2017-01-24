import React from 'react';
import * as Pt from 'ptjs';

import Colors from '../constants/colors';

class Background extends React.Component {
  constructor(props){
    super(props);
    this.state = {

    }
  }
  componentDidMount(){

    var space = new Pt.CanvasSpace("pt").setup({bgcolor: Colors.blueGrey});

    var form = new Pt.Form(space);
    form.stroke(false);

    var particles = [];

    class Particle extends Pt.Triangle {
      constructor(x, y, length){
        super(x, y);
        this.to([x-length/2, y-length/2*Math.sqrt(3)], [x+length/2, y-length/2*Math.sqrt(3)]);
        //this.color = colors["a"+Math.ceil(Math.random()*4)];
        this.color = "#DDDDDD";
        this.direction = new Pt.Vector((Math.random()-0.5) * 6, (Math.random()-0.5) * 6);
        this.maxAge = Math.random() * 1000;
        this.age = this.maxAge
      }
      animate(time, fps, context){
        form.fill(this.color);
        form.triangle(this);
        this.rotate2D(0.4 / fps, this.orthocenter());
        this.moveBy(this.direction);
        this.age -= 0.5;
        this.color = Pt.Util.toRGBColor("#DDDDDD", true, this.age/this.maxAge);
        if(this.age < 0 || this.x < -10 || this.x > space.size.x + 10|| this.y < -10 || this.y > space.size.y + 10){
          space.remove(this);
        }
      }
    }
    /*
    class ParticleTrack extends Pt.Particle {
      constructor(x, y, radius){
        super(x, y, radius);
        this.direction = new Pt.Vector((Math.random()-0.5) * 5, (Math.random()-0.5) * 5);
      }
      animate(time, fps, context){
        form.fill("#FFFFFF");
        form.point(this);
        this.moveBy(this.direction);
        this.collideLine2d(wall);
        this.collideWithinBounds(bound);
      }
    }
    */
    var lastTime = 0;

    space.add({
      animate: function(time, fps, context) {
        if(time - lastTime > 20){
          space.add(new Particle(space.center.x, space.center.y, 10));
          //space.add(new ParticleTrack(space.center.x, space.center.y, 10));
          lastTime = time;
        }
      },
    });

    space.play();

    //var particles = [];
    for(var i = 0; i < 100; i++){
      //particles.push(new Particle(space.size.x/2, space.size.y/2, 10));
      particles.push(new Particle(space.center.x, space.center.y, 10));
      space.add(particles[i]);
    }
  }
  render(){
    return(
      <div id="pt" className="background-wrapper">
        {this.props.onCanvas}
      </div>
    )
  }
}

export default Background;