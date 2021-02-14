var scope,scopeImg;
var score = 0;
var enemyGroup1,enemyGroup2,enemyGroup3,enemyGroup4;
var count = 1;
var bg,bgImg;

function preload(){
  scopeImg = loadImage("scope.png");
  bgImg = loadImage("bg2.jpg");

}

function setup(){
  createCanvas(1400,800);
  bg = createSprite(900,400,1400,800);
  bg.addImage(bgImg);
  bg.scale = 4;
  scope = createSprite(mouseX,mouseY,1,1);
  scope.addImage(scopeImg);
  scope.scale = 0.3;
  //scope.debug = true;
  scope.setCollider("circle",0,0,20)
  enemyGroup1 = new Group();
  enemyGroup2 = new Group();
  enemyGroup3 = new Group();
  enemyGroup4 = new Group();

}

function draw(){
  background("red");
  scope.x = mouseX;
  scope.y = mouseY;

  enemies();
  drawSprites();

  if(enemyGroup1.isTouching(scope) && mousePressedOver(scope)) {
    score = score+100;
    enemyGroup1.destroyEach();
  }

  else if(enemyGroup2.isTouching(scope) && mousePressedOver(scope)) {
    score = score+100;
    enemyGroup2.destroyEach();
  }

  else if(enemyGroup3.isTouching(scope) && mousePressedOver(scope)) {
    score = score+100;
    enemyGroup3.destroyEach();
  }

  else if(enemyGroup4.isTouching(scope) && mousePressedOver(scope)) {
    score = score+100;
    enemyGroup4.destroyEach();
  }

  textSize(30);
  text("score : " + score ,1000,50);

}

function enemies() {
  if(frameCount % (60) === 0) {
    if(count === 1) {
      enemyG1();
      count += 1;
    }
    else if(count === 2) {
      enemyG2();
      count += 1;
    }
    else if(count === 3) {
      enemyG3();
      count += 1;
    }
    else if(count === 4) {
      enemyG4();
      count = 1;
    }
  }

}

function enemyG1() {
  var e = createSprite(0,560,20,200);
    e.addAnimation("1.png","2.png","3.png","4.png","5.png");
    e.scale = 0.5;
    e.velocityX = 6;
    e.lifetime = 235;
    enemyGroup1.add(e);
    //e.debug = true;
    e.setCollider("rectangle",-30,0,100,500)
}

function enemyG2() {
  var e2 = createSprite(0,560,20,200);
    e2.addAnimation("1.png","2.png","3.png","4.png","5.png");
    e2.scale = 0.5;
    e2.velocityX = 6;
    e2.lifetime = 235;
    enemyGroup2.add(e2);
    e2.setCollider("rectangle",-30,0,100,500)
}

function enemyG3() {
  var e3 = createSprite(0,560,20,200);
    e3.addAnimation("1.png","2.png","3.png","4.png","5.png");
    e3.scale = 0.5;
    e3.velocityX = 6;
    e3.lifetime = 235;
    enemyGroup3.add(e3);
    e3.setCollider("rectangle",-30,0,100,500)
}

function enemyG4() {
  var e4 = createSprite(0,560,20,200);
    e4.addAnimation("1.png","2.png","3.png","4.png","5.png");
    e4.scale = 0.5;
    e4.velocityX = 6;
    e4.lifetime = 235;
    enemyGroup4.add(e4);
    e4.setCollider("rectangle",-30,0,100,500)
}

