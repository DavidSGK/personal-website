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
    //// 1. Define Space and Form
    var colors = {
      a1: "#ff2d5d", a2: "#42dc8e", a3: "#2e43eb", a4: "#ffe359",
      b1: "#96bfed", b2: "#f5ead6", b3: "#f1f3f7", b4: "#e2e6ef",
      c1: "#111", c2: "#567", c3: "#abc", c4: "rgba(255,255,255,.9)"
    };

    var space = new Pt.CanvasSpace("pt").setup({bgcolor: Colors.blueGrey});
    var wall = new Pt.Line(space.size.$multiply(0.33, 0.33)).to(space.size.$multiply(0.66, 0.66));
    var bound = new Pt.Pair().to(space.size);

    var form = new Pt.Form(space);
    form.stroke(false);

    var particles = [];


    //// 2. Create Elements

    /*// A Dust is a kind of Vector
    function Dust() {
      Pt.Vector.apply( this, arguments ); // call Vector's constructor
      this.age = 0;
      this.maxAge = Math.random() * 500 + 50;
      //this.weight =  0.25 + Math.random()*3;
      this.color = colors["a"+Math.ceil(Math.random()*4)];
    }
    Pt.Util.extend( Dust, Pt.Vector ); // extends Vector class*/

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

    /*// define an animate function so it can be animated when added into Space
    Dust.prototype.animate = function(time, fps, context) {

      // drift movement
      //this.add( rand(1), (Math.random() - Math.random()*(1-this.weight/1.5)) );

      // remove when done
      //if (this.age++ > this.maxAge) space.remove(this);

      // glitter
      var gray = (this.maxAge-this.age)/this.maxAge * 0.4;
      gray = Math.max(0, Math.min( 0.6, (Math.random() > 0.5) ? gray + 0.05 : gray - 0.05 ) );

      // draw dust
      //form.fill(this.color);
      //form.point( this, this.weight, true );
      //form.triangle(this);

    };*/

    // a helper function for randomness
    function rand(r) { return Math.random() * r - Math.random() * r; }

    var lastTime = 0;

    //// 3. Visualize, Animate, Interact
    space.add({
      animate: function(time, fps, context) {
        if(time - lastTime > 20){
          space.add(new Particle(space.center.x, space.center.y, 10));
          //space.add(new ParticleTrack(space.center.x, space.center.y, 10));
          lastTime = time;
        }
      },

      /*onMouseAction: function(type, x, y, evt) {
        // When mouse moved, add two dust into space
        if (type === "move") {
          //space.add( new Dust( x+rand(5), y+rand(5) ) );
          //space.add( new Dust( x+rand(5), y+rand(5) ) );
          space.add(new Particle(space.center.x, space.center.y, 10));
        }
      },

      onTouchAction: function(type, x, y, evt) {
        this.onMouseAction( type, x, y );
      }*/
    });

    // 4. Start playing
    space.bindMouse();
    space.bindTouch();
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