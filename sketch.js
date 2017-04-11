function setup(){
    createCanvas(600,400);
    background(0);
}

function draw(){
    strokeWeight(4);
    stroke(255);
    
    var x = 0;
    while(x<650){
    fill(255, 230, 230);
        ellipse(x,  100, 40, 40);
        x = x + 50;
    }
    
     for(var x = 0; x <650; x = x + 50){
         fill(255, 230, 230);
         ellipse(x, 100, 40, 40);
     }
     
}