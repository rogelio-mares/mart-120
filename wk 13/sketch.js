var w = 87;
var s = 83;
var a = 65;
var d = 68;

var characterX = 25;
var characterY = 25;

var shapeXs = [];
var shapeYs = [];
var diameters = [];

var shapeX = 30;
var shapeY = 30;

var shapeXSpeeds = [];
var shapeYSpeeds = [];

var mouseShapeX;
var mouseShapeY;


function setup()
{
    createCanvas(500, 600);

    for (var i = 0; i < 50; i++) {
        shapeXSpeeds[i] = Math.floor(Math.random() * (Math.floor(Math.random() * 5)) + 1);
        shapeYSpeeds[i] = Math.floor(Math.random() * (Math.floor(Math.random() * 5)) + 1);
        shapeXs[i] = getRandomNumber(500);
        shapeYs[i] = getRandomNumber(600);
        diameters[i] = getRandomNumber(30);
    }

    createCharacter(200, 350);
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

    for (var i = 0; i < shapeXs.length; i++) {
        circle(shapeXs[i], shapeYs[i], diameters[i]);
        shapeXSpeeds[i] = Math.floor(Math.random() * (Math.floor(Math.random() * 5)) + 1);
        shapeYSpeeds[i] = Math.floor(Math.random() * (Math.floor(Math.random() * 5)) + 1);




        // move the shape
        shapeXs[i] += shapeXSpeeds[i];
        shapeYs[i] += shapeYSpeeds[i];
        // check to see if the shape has gone out of bounds
        if (shapeXs[i] > width) {
            shapeXs[i] = 0;
        }
        if (shapeXs[i] < 0) {
            shapeXs[i] = width;
        }
        if (shapeYs[i] > height) {
            shapeYs[i] = 0;
        }
        if (shapeYs[i] < 0) {
            shapeYs[i] = height;
        }
    }

    //enemy2
    fill(4000,10,10);

    for (var i = 0; i < shapeXs.length; i++) {
        rect(shapeXs[i], shapeYs[i], diameters[i]);
        shapeXSpeeds[i] = Math.floor(Math.random() * (Math.floor(Math.random() * 5)) + 1);
        shapeYSpeeds[i] = Math.floor(Math.random() * (Math.floor(Math.random() * 5)) + 1);




        // move the shape
        shapeXs[i] += shapeXSpeeds[i];
        shapeYs[i] += shapeYSpeeds[i];
        // check to see if the shape has gone out of bounds
        if (shapeXs[i] > width) {
            shapeXs[i] = 0;
        }
        if (shapeXs[i] < 0) {
            shapeXs[i] = width;
        }
        if (shapeYs[i] > height) {
            shapeYs[i] = 0;
        }
        if (shapeYs[i] < 0) {
            shapeYs[i] = height;
        }
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

function getRandomNumber(number) 
{
    return Math.floor(Math.random() * number) + 5;
}