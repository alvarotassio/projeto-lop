
/*
 Equipe:
 Alvaro Jose Lucena Marinho - subturma D
 Tassio Araujo de Lima - subturma D
 Etapa 5
 */
function setup() {
 createCanvas(900,900);
}
let value1 = 51;
let value2 = 51;
let value3 = 51;
let value4 = 51;
function draw() {
  rectMode(CENTER);
  background(color(0, 126, 255));
  fill('#F7ED16');
  rect(50,50,2000,350);
  textStyle(BOLD);
  textSize(50);
  strokeWeight(10);
  stroke(0);
  fill('#D30902');
  text('NÍVEL 1',51,80);
  strokeWeight(6);
  stroke(0);
  fill(value1);
  rect(220,400,320,250);
  fill(value2);
  rect(220,700,320,250);
  fill(value3);
  rect(680,400,320,250);
  fill(value4);
  rect(680,700,320,250);
  fill(0);
  rect(mouseX,mouseY,55,55);   

}function mouseClicked() {
  if(mouseX < 220+160 && mouseX > 220-160 && mouseY < 400+125 && mouseY > 400-125){
    if(value1 == 255){
      value1 = 51;
    }else{
      value1 = 255;
    }
  }
 if(mouseX < 220+160 && mouseX > 220-160 && mouseY < 700+125 && mouseY > 700-125){
     if(value2 == 255){
      value2 = 51;
    }else{
      value2 = 255;
    }
  }
 if(mouseX < 680+160 && mouseX > 680-160 && mouseY < 400+125 && mouseY > 400-125){
     if(value3 == 255){
      value3 = 51;
    }else{
      value3 = 255;
    }
  }
 if(mouseX < 680+160 && mouseX > 680-160 && mouseY < 700+125 && mouseY > 700-125){
     if(value4 == 255){
      value4 = 51;
    }else{
      value4 = 255;
    }
  }

}
