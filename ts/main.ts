let bird, pipes, pipe, score;
function setup(){
 createCanvas(600, 400);
 bird = new Bird();
 pipes = new Pipes();
 pipe = new Pipe();
 score = new Score();
}

function draw(){
  background(25);
  
  pipes.update(bird.x, bird.y);
  
  bird.update();
  bird.show();

  score.show();
}

function keyPressed(){
  if(key == 'w' || keyCode == UP_ARROW)
    bird.up();
}
// TO DO 
// solid pipes, clouds, speed and pipes frequency control