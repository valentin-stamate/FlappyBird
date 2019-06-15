function Bird(){
  this.x = 30;
  this.y = height/2;
  this.gravity = 9.8;
  this.velocity = 0;

  this.upVelocity = 0;
  this.upDistance = 40;
  this.upForce = -20;

  this.show = function(){
    fill(255);
    stroke(0,0)
    ellipse(this.x, this.y, 20, 20);
  }

  this.update = function(){
    this.velocity += this.gravity/9.8;
    this.velocity *= 0.95;
    this.y += this.velocity/2;
    
    if(this.y > height - 10){
      this.y = height - 10;
      this.velocity = 0;
      score.score = 0;
    }
    if(this.y < 10){
      this.y = 10;
      this.velocity = 0;
    }
  }
  
  this.up = function(){
    this.velocity += this.upForce;
  }
}