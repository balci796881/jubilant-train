var level = 0;
var gameState = "Intro"
var button1,button2,button3,button4,button5,subject;
var classroom,math,english,law,social,science;
var geometry,algebra,numbertheory,arithmatic,equations;
var rock,animal,silicon,stringtheory,medical;
var bg;
function preload(){
 classroom = loadImage("background.png")
  math=loadImage("math.jpg")
  english=loadImage("english.jpg")
  social=loadImage("history.jpg")
  law=loadImage("law.jpg")
  science=loadImage("science.jpg")
  geometry = loadImage("geo.jpg")
  algebra = loadImage("al.jpg")
  numbertheory = loadImage("12.jpg")
  arithmatic = loadImage("11.jpg")
  equations = loadImage("Quad.jpg")
  rock=loadImage("earth.jpg")
  animal=loadImage("bio.jpg")
  silicon=loadImage("chem.jpg")
  stringtheory=loadImage("physics.jpg")
  medical=loadImage("health.jpg");
}
function setup(){
  createCanvas(windowWidth,windowHeight)
  bg = createSprite(0,0,windowWidth*5,windowHeight*5)
  bg.addImage(classroom)
   bg.scale = 11
  bg.visible = false; 
  subject = createGroup()
  button1 = createSprite(windowWidth/3,0,windowWidth,windowHeight/5);
  button2 = createSprite(windowWidth/3,windowHeight/5+25,windowWidth,windowHeight/5)
  button3 = createSprite(windowWidth/3,windowHeight/5*2,windowWidth,windowHeight/5)
  button4 = createSprite(windowWidth/3,windowHeight/5*3,windowWidth,windowHeight/5)
  button5 = createSprite(windowWidth/3,windowHeight/5*4,windowWidth,windowHeight/5)
  subject.add(button1)
  subject.add(button2)
  subject.add(button3)
  subject.add(button4)
  subject.add(button5)
  subject.setVisibleEach(false);
}
function draw(){
  if(level===0){
  background(0)
  fill("green")
  textSize(20)
 text("AnyDreams",windowWidth/2-100,windowHeight/4);
 text("press Space to continue",windowHeight/2+200,windowHeight/3)
 if(keyDown("space")){
  level = 1
}
  }
  if(level===1){
    bg.visible = true;
    subject.setVisibleEach(true);
    button1.addImage(social); 
    button2.addImage(english);
    button2.scale = 0.5;
    button3.addImage(science);
    button4.addImage(math);
    button5.addImage(law);
    if(mousePressedOver(button1)){
      level = 2;
    }
    if(mousePressedOver(button2)){
      level = 3;
    }
    if(mousePressedOver(button3)){
      level = 4;
    }
    if(mousePressedOver(button4)){
      level = 5;
    }
    if(mousePressedOver(button5)){
      level = 6;
    }
  }
  if(level===4){
    button1=loadImage(animal)
    button2=loadImage(rock)
    button3=loadImage(silicon)
    button4=loadImage(stringtheory)
    button5=loadImage(medical)
    }
  if(level===5){
    button1.addImage(geometry);
    button1.scale = 0.1
    button2.addImage(algebra);
    button3.addImage(numbertheory);
    button3.scale = 0.3
    button4.addImage(arithmatic);
    button4.scale = 0.3
    button5.addImage(equations);
    button5.scale = 0.5
  }
  drawSprites();
  console.log(level);
}