function placeFood() {
    let randomX = Math.floor(Math.random() * cols);
    let randomY = Math.floor(Math.random() * rows);
    
   food = {x: randomX, y: randomY};   	
    
}


function shiftSnake() {
    for (let i = snake.length- 1; i > 0; i--){
    const part = snake[i];
    const lastPart = snake[i - 1];
    part.x = lastPart.x;
    part.y = lastPart.y;
  }
}
  
  
function gameLoop() {

  testGameOver();
  if(foodCollected) {
      snake = [{ x: snake[0].x,
                y: snake[0].y
      }, ...snake];
         foodCollected = false; 
  }
  shiftSnake();
  if (direction == 'LEFT') {
   snake[0].x--; 
   }
    if (direction == 'RIGHT') {
   snake[0].x++; 
   }
    if (direction == 'UP') {
   snake[0].y--; 
   }
    if (direction == 'DOWN') {
   snake[0].y++; 
   }
   
   if(snake[0].x == food.x && snake[0].y == food.y) {    //Futter einsammel und neu plazieren.
   
   
   foodCollected = true;
   placeFood();
   score += 1;
   }
 
}

function keyDown(e) {
  if(e.keyCode == 37){
    direction = 'LEFT'; }
      
  if(e.keyCode == 38){
      direction = 'UP';	}    
      
  if(e.keyCode == 39){
      direction = 'RIGHT';	}     
      
  if(e.keyCode == 40){
      direction = 'DOWN';	} 	

  if(e.keyCode == 65){
      direction = 'LEFT';	}
      
  if(e.keyCode == 87){
      direction = 'UP';	}    
      
  if(e.keyCode == 68){
      direction = 'RIGHT';	}     
      
  if(e.keyCode == 83){
      direction = 'DOWN';	} 
      

  }
  