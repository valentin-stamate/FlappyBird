function Pipe(){
  this.PipeWidth = 30;
  this.PipeHeight = height;
  this.PipeX = width;
  this.PipeY = 0;

  this.GapY = parseInt(random(150, height - 150));
  this.GapHeight = parseInt(random(70, 180));

  this.hit = false;
  this.isScored = false;
  
  this.show = function(){
    if(this.hit)
      fill(244, 70, 70);
    else
      fill(255);
    stroke(0,0);
    rect(this.PipeX, this.PipeY, this.PipeWidth, this.PipeHeight);
    fill(25);
    stroke(0,0);
    rect(this.PipeX - 1, this.GapY, this.PipeWidth + 2, this.GapHeight);
  }

}