var canvas;
var block1,block2,block3,block4;
var ball, edges;
var music;

function preload(){
    music = loadSound("music.mp3");
}


function setup(){
    canvas = createCanvas(800,600);

    block1 = createSprite(100,580,180,30);
    block1.shapeColor = "darkcyan";

    block2 = createSprite(300,580,180,30);
    block2.shapeColor = "slateblue";

    block3 = createSprite(500,580,180,30);
    block3.shapeColor = "salmon ";

    block4 = createSprite(700,580,180,30);
    block4.shapeColor = "springgreen";

    ball = createSprite(random(20,750),100, 40,40);
    ball.shapeColor = "darkblue";
    ball.velocityX = -3;
    ball.velocityY = 4;
    
}

function draw() {
    background("lightblue ");
    edges=createEdgeSprites();
    ball.bounceOff(edges);

    
    
    if(block1.isTouching(ball) && ball.bounceOff(block1)){
        ball.shapeColor = "darkcyan";
        music.play();
    }



    if(block2.isTouching(ball)&& ball.bounceOff(block2)){
        ball.shapeColor = "slateblue";
        
        music.play();
    }

    if(block3.isTouching(ball)&& ball.bounceOff(block3)){
        ball.shapeColor = "salmon";
        
        music.play();
}

if(block4.isTouching(ball)&& ball.bounceOff(block4)){
    ball.shapeColor = "springgreen";
    ball.velocityX = 0;
    ball.velocityY = 0;
   music.stop();
}

drawSprites();
}