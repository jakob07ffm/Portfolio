var StartzeitM = new Date().getMinutes();
var StartzeitS = new Date().getSeconds();
var score= 1;
var EndzeitM = 0;
var EndzeitS = 0;
var Punkte = 0;

 let canvas = document.getElementById('canvas');  // Canvas  = Leihnwand auf der das Spiel gezeichnet wird
 let ctx = canvas.getContext('2d');
 let rows = 30;                                  //Teilt canvas in ein Raster auf-->
 let cols = 30;
 let snake = [{
              x: 19,
               y: 3
         
          }];
 let food ; 
 let cellwidth = canvas.width / cols;          //Die Breite der durch das Raster erstellten Zelle / = Teilen>
 let cellheight = canvas.height / rows;
 let direction = 'LEFT';
 let foodCollected = false;
 
 placeFood();
 
  setInterval(gameLoop, 200);    //hier kann man die Geschwindichkeit einstellen
  document.addEventListener('keydown', keyDown);
 
 draw();
 

 function draw() {                                  // Funktion wie häufig wird das Spiel gezeichnet was wird gezeichnet
   ctx.fillStyle = 'black';
   ctx.fillRect(0,0,canvas.width,canvas.height);   //X achse Y Achse ist oben  0x 0y ist links oben>
   
   ctx.fillStyle = 'lightgreen';
  
   snake.forEach(part => add(part.x, part.y));
   ctx.fillStyle = 'red';
   add(food.x, food.y);
   requestAnimationFrame(draw);
   ctx.font=" 20px Arial";
   ctx.fillStyle = "white";
   ctx.fillText("SCORE: " + score, 10, canvas.height-10);
  }  
 function add(x,y) {
   ctx.fillRect(x *cellwidth, y * cellheight, cellwidth -1, cellheight -1);
 }
 
 function testGameOver() {

  
 
    let firstPart = snake[0];  
    
    let otherParts = snake.slice(1);
     
    let duplicatePart = otherParts.find(part => part.x == firstPart.x && part.y == firstPart.y);
 
     if (snake[0].x < 0||               
        snake[0].x > cols - 1 ||
        snake[0].y < 0||                  
        snake[0].y > rows - 1 ||
      
       duplicatePart
     )
    {
     
    
       placeFood();                    // hier wird alles resettet
         snake = [{
              x: 19,
               y: 3 
               }]; 
         direction = 'none'

       var EndzeitM = new Date().getMinutes();
       var EndzeitS = new Date().getSeconds();
        
       var SpieldauerM = EndzeitM - StartzeitM;
       var SpieldauerS = EndzeitS - StartzeitS;


       if (SpieldauerS < 0 ){
           SpieldauerS = (SpieldauerS + 60)   
           SpieldauerM = (SpieldauerM - 1)
       }

       var Punkte = (score) + (score / (SpieldauerS + (SpieldauerM / 60)));

         document.write("Game Over");
         document.write("Score:       ");
         document.write(score); 
   
        
        document.write("Minuten:");
        document.write(SpieldauerM);
        document.write("Sekunden:");
        document.write(SpieldauerS);

        var gerundetePunkte = Math.round((Punkte + Number.EPSILON) * 100) / 100;
        console.log(gerundetePunkte);

        document.write("Punkte:      ");
        document.write(gerundetePunkte);

        let errorname = true

       document.querySelectorAll("Möchtest Du Dich in die Rangliste eintragen?")
        
    }
 }