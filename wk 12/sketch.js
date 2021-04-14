var w = 87;
var s = 83;
var a = 65;
var d = 68;

var characterX = 25;
var characterY = 25;

var shapeX = 30;
var shapeY = 50;
var shapeXSpeed;
var shapeYSpeed;

var shape2X = 200;
var shape2Y = 50;
var shape2XSpeed;
var shape2YSpeed;

var mouseShapeX;
var mouseShapeY;


function setup()
{
    createCanvas(500, 600);
    shapeXSpeed = Math.floor(Math.random() * (Math.floor(Math.random() * 5)) + 1);
    shapeYSpeed = Math.floor(Math.random() * (Math.floor(Math.random() * 5)) + 1);
}

function draw()
{
    background(2,11);
    stroke(0);
    fill(0);

    //border
    createBorder();

    //character
    createCharacter();

    // Keys
    characterMovement();

    //enemys
    createEnemy();

    // obstaccle
    createObstacle();

    //EXIT
    createExit();
}

//keys function
function characterMovement()
{
    if(keyIsDown(w))
    {
        characterY -= 10;
    }
    if(keyIsDown(s))
    {
        characterY += 10;
    }
    if(keyIsDown(a))
    {
        characterX -= 10;
    }
    if(keyIsDown(d))
    {
        characterX += 10;
    }
}

//character function
function createCharacter()
{
    fill(250,40,123);
    rect(characterX,characterY,25);

}

// obstacle function
function createObstacle()
{
    fill(10,130,140);
    circle(mouseShapeX, mouseShapeY, 25);
}

// enemy function
function createEnemy()
{
    //enemy 1
    fill(4000,10,10);

    circle(shapeX, shapeY, 20);

     shapeXSpeed = Math.floor(Math.random() * (Math.floor(Math.random() * 5)) + 1);
     shapeYSpeed = Math.floor(Math.random() * (Math.floor(Math.random() * 5)) + 1);

   
    shapeX += shapeXSpeed;
    shapeY += shapeYSpeed;
   

    if(shapeX > width)
    {
        shapeX = 0;
    }
    if(shapeX < 0)
    {
        shapeX = width;
    }
    if(shapeY > height)
    {
        shapeY = 0;
    }
    if(shapeY < 0)
    {
        shapeY = height;
    }


    //enemy2
    fill(4000,10,10);

    rect(shape2X, shape2Y, 20);

    
     shape2XSpeed = Math.floor(Math.random() * (Math.floor(Math.random() * -5)) + 1);
     shape2YSpeed = Math.floor(Math.random() * (Math.floor(Math.random() * -5)) + 1);

    shape2X += shape2XSpeed;
    shape2Y += shape2YSpeed;
   
    
    if(shape2X > width)
    {
        shape2X = 0;
    }
    if(shape2X < 0)
    {
        shape2X = width;
    }
    if(shape2Y > height)
    {
        shape2Y = 0;
    }
    if(shape2Y < 0)
    {
        shape2Y = height;
    }
}

//border fucntion
function createBorder()
{

    //border
    fill(20,200,30);
    rect(0,0,width,10);
    rect(0,0,10,height);
    rect(0, height-10,width, 10);
    rect(width-10,0,10,height-50);

    //exit
    fill(30,200,20)
    textSize(16);
    text("EXIT", width-50,height-50)

}

// random obstacle
function mouseClicked()
{
    mouseShapeX = mouseX;
    mouseShapeY = mouseY;
}

// exit function
function createExit()
{
    if(characterX > width && characterY > width-50)
    {
        fill(300,20,200);
        stroke(5);
        textSize(26);
        text("You Win!", width/2-50, height/2-50);
    }
}
