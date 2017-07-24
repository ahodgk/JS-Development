var mouseDown = false;
var mX;
var mY;
document.onmousemove = function(evt){
  var rect = cvs.getBoundingClientRect();
  var root = document.documentElement;
  mX = evt.clientX - rect.left - root.scrollLeft;
  mY = evt.clientY - rect.top - root.scrollTop;
}
document.onmousedown = function(evt){
  mouseDown = true;
}
document.onmouseup = function(){
  mouseDown = false;
}

class Button {
  constructor(x, y, w, h, colour, text, tX, tY, tColour){
    this.x = x;
    this.y = y;
    this.w = w;
    this.h = h;
    this.colour = colour;
    this.text = text;
    this.tColour = tColour;
  }
  draw(){
    ctx.fillStlye = this.colour;
    ctx.fillRect(this.x, this.y, this.w, this.h);
    ctx.fillStyle = this.tColour;
    ctx.fillText(this.text, this.tX, this.tY);
  }
  check(){
    if(mouseDown){
      if(mX > this.x && mX < this.x + this.w && mY > this.y && mY < this.y + this.h){
        return true;
      }
    }
  }
}
