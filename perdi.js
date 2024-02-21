function setup() {
    //put setup code here
    createCanvas(800,800)
    x = 200;
    y = 400;
    j = 0;

}

function draw(){
     // put drawing code here
    background(135,206,235);
    line(400,0,400,800)
    //sidefins
    fill(30,144,225)
    arc(x, 400 + 36, 40, 40,PI, 0, CHORD)
    //body
    fill(255,0,0)
    ellipse(x, 400 , 30, 84)
    //windows
    fill(255)
    ellipse(x, 400 -12, 15,15)
    ellipse(x, 400 + 6, 15, 15)
    //front fin 
    fill(30,144,225)
    ellipse(x, 400 + 35, 5, 30)

    //sidefins
    fill(30,144,225)
    var y = 400 + 100 * Math.sin(PI/100*j);
    j +=1
    arc(x+400, y + 36, 40, 40,PI, 0, CHORD)
    //body
    fill(255,0,0)
    ellipse(x+400, y, 30, 84)
    //windows
    fill(255)
    ellipse(x+400, y -12, 15,15)
    ellipse(x+400,y + 6, 15, 15)
    //front fin 
    fill(30,144,225)
    ellipse(x+400, y + 35, 5, 30)
}