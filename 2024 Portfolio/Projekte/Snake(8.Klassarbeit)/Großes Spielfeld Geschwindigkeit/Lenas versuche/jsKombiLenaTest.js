
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
            
            localStorage.setItem('score', gerundetePunkte);
              
            
            function timeOut() { 
            var ergebnistext=prompt("Möchtest Du dich in die Rangliste eintragen, dann bitte mit Ja antworten?","Ja");

            if(ergebnistext=="Ja"||ergebnistext=="ja")
              history.back();
            else
            alert("Hallo,"+ergebnistext);
              document.location="eingabefelder.html";
            }
            setTimeout(timeOut,3000),
            
            function auswert()
            
            {
              if (document.form5.namensfeld.value=="Name?") alert("Faulheit wird bestraft werden!"); 
              else alert("ok " + document.form5.namensfeld.value + "!");
             
            }



              if(ergebnistext=="Ja"||ergebnistext == "ja"){

                document.location="eingabefelder.html";
              }
              
  
        
               

        }
     }

     
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
     
