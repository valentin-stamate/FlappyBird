function Pipes() {
  this.pipes = [];
  this.PipeSpeed = 1;
  this.PipeFrequency = 80;
  this.update = function (BirdX, BirdY) {
    this.PipeSpeed *= 1.001;
    if (frameCount % parseInt(this.PipeFrequency) == 0){
      this.pipes.push(new Pipe());
    }

    for (let i = 0; i < this.pipes.length; i++)
      this.pipes[i].PipeX -= this.PipeSpeed;

    if (this.BirdCollision(BirdX, BirdY))
      this.resetGame();

    for (let i = 0; i < this.pipes.length; i++)
      this.pipes[i].show();

    if (this.BirdPassPipe(BirdX) && !this.pipes[0].isScored && !this.pipes[0].hit){
      score.score++;
      this.pipes[0].isScored = true;
    }

    if (this.pipes.length >= 1)
      if (this.pipes[0].PipeX < -this.pipes[0].PipeWidth)
        this.pipes.splice(0, 1);
  }

  this.BirdCollision = function (BirdX, BirdY) {
    if (this.pipes.length >= 1) {
      if (this.OffsetGapX(BirdX)) {
        if (!(this.OffsetGapY(BirdY)))
          return true;
      }
    }
    return false;
  }

  this.resetGame = function () {
    score.score = 0;
    this.pipes[0].hit = true;
    this.PipeSpeed = 1;
    this.PipeFrequency = 80;
  }

  this.OffsetGapX = function (BirdX) {
    return (BirdX + 10 > this.pipes[0].PipeX && BirdX - 10 < this.pipes[0].PipeX + this.pipes[0].PipeWidth);
  }

  this.OffsetGapY = function (BirdY) {
    return (BirdY - 10 > this.pipes[0].GapY && BirdY + 10 < this.pipes[0].GapY + this.pipes[0].GapHeight);
  }

  this.BirdPassPipe = function (BirdX) {
    return (this.pipes.length > 0 && BirdX - 10 > this.pipes[0].PipeX + this.pipes[0].PipeWidth);
  }

}