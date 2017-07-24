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
}
