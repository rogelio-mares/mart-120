var headX = 250;
var headY = 200;
var headDirection = 1;

var legs1X = 200;
var legs1Y = 450;
var legs1Direction = 1;

var mouthX = 245 ;
var mouthY = 230 ;
var mouthDirection = 1;

var legs2X= 290 ;
var legs2Y= 450 ;
var legs2Direction = 1;

var bodyX = 200;
var bodyY = 290;
var bodyDirection = 3;

var size = 25;
var count = 0;
var sizeDirection = 2;

function setup()
{
    createCanvas(500,600)
}

function draw()
{
    background(220,120,78);

    //head
    fill(255, 218, 119);
    circle(headX,headY,175);
    headX+=headDirection;
    if(headX >= 418 || headX <= 82)
    {
        headDirection *= -1;
    }

    //eyes
    strokeWeight(10);
    fill(0);
    point(200,200);
    point(285,200);

    //mouth
    ellipse(245, mouthY, 70, 15)
    mouthY += mouthDirection
    if(mouthY <= 0 || mouthY >= 595)
    {
      mouthDirection *= -1;
    }

    //arms
    line(150,130,300,130);
    line(325,130,260,130);

    //body
    fill(10,124,130);
    rect(200,bodyY,100,150);
    bodyY += bodyDirection
    if(bodyY <= 0 || bodyY >= 450)
    {
      bodyDirection *= -1;
    }

    // hat
    fill(113, 97, 149);
    triangle(190,130,300,130,250,80)

     // arms
    rect(300,300,50,10);
    rect(150,300,50,10);

    //legs
    rect(legs1X,legs1Y,10,50);
    legs1X+=legs1Direction;
    if(legs1X >= 495 || legs1X <= 5)
    {
        legs1Direction *= -1;
    }

    rect(legs2X,legs2X,10,50);
    legs2X+=legs2Direction;
    if(legs2X >= 495 || legs2X <= 5)
    {
        legs2Direction *= -1;
    }

    //text
    fill(300);
    textSize(size);
    size+= sizeDirection;
    count++;
    if(count > 5)
    {
        sizeDirection *=-1;
        count = 0;
    }
    text("Rogelio Mares",335,500 );


}
