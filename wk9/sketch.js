function setup()
{
    createCanvas(500,600)
}

function draw()
{
    background(220,120,78);

    fill(255, 218, 119);
    circle(250,200,175);
   
    //eyes
    strokeWeight(10);
    fill(0);
    point(200,200);
    point(285,200);

    //mouth
    ellipse(245, 230, 70, 15)

    //arms
    line(150,130,300,130);
    line(325,130,260,130);
  
    //body
    fill(10,124,130);
    rect(200,290,100,150);
    
    // hat
    fill(113, 97, 149);
    triangle(190,130,300,130,250,80)
    
     // arms
    rect(300,300,50,10);
    rect(150,300,50,10);

    //legs
    rect(200,450,10,50); 
    rect(290,450,10,50);
    
    fill(300);
    textSize(25);
    text("Rogelio Mares",335,500 );


}