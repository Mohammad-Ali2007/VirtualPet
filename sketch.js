//Create variables here
var dog, dogImg, happyDogImg, database, foodS, foodStock;

function preload()
{
 dogImg = loadImage("images/dogImg.png");
 happyDogImg = loadImage("images/dogImg1.png")
}

function setup() {
  createCanvas(500, 500);
  dog = createSprite(200, 10, 10, 50);
  dog.addImage(dogImg);
  dogImg.scale=0.5

  database=firebase.database();
  foodStock=database.ref('Food');
  foodStock.on("value",readStock);
}


function draw() {  
  background(46,139,87);

  if(keyWentDown(UP_ARROW)){
      writeStock(foodS);
      dog.addImage(happyDogImg);
  }

  drawSprites();

  //add styles here
  textSize(30);
  fill("white");
  stroke();
  text("Note : Press UP_ARROW Key to feed Drago Milk",120,40)
}

function readStock(data){
  foodS=data.val();
}

function readStock(x){
  if(x<=0){
      x=0;
  }else{
    x=x-1
  }

  database.ref('/').update({
    Food:x
  })
}

