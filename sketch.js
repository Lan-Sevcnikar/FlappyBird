var H = window.innerHeight - 40;
var W = window.innerWidth - 40;

function setup(){

}

function draw(){

}

function Bird(y, v, g){
   this.y = y;
   this.v = v;
   this.g = g;

   this.draw = function(){
      draw
   }

   this.update = function(){
      this.v += this.g;
      this.y += this.v;
   }
}
