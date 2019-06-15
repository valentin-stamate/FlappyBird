function Score() {
  this.score = 0;

  this.show = function () {
    textAlign(RIGHT);
    fill(255);
    text('Score: ' + this.score, width - 5, 15);
  }
}