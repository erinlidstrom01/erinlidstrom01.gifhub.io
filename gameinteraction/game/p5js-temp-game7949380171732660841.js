var img;
var img2;
var img3;
var img4;
var img5;
var ballx = 450;
var bally = 500;
var ballSize =200;
var ball1x = 300;
var ball1y = 250;
var ball1Size =450;
var ball2x = 200;
var ball2y = 425;
var ball2Size =300;
var ball3x = 500;
var ball3y = 350;
var ball3Size =225;
var gameState = "L1";
var score = 0;

function preload() {
img = loadImage('https://jenstudent.github.io/images/rainbow.jpg');
img2 = loadImage('https://jenstudent.github.io/images/unicorn.png');
img3 = loadImage('https://jenstudent.github.io/images/unicorn2.png');
img4 = loadImage('https://jenstudent.github.io/images/unicorn3.png');
img5 = loadImage('https://jenstudent.github.io/images/unicorn4.png');
}

function setup() {
createCanvas (600, 600);
textAlign(CENTER); //center
textSize(20);
} //end of setup

function draw() {
background (img);
if (gameState == "L1") {
levelOne();
}
if (gameState == "L2") {
levelTwo();
}
if (gameState == "L3") {
levelThree();
}
if (gameState == "L4") {
levelFour();
}
if (gameState == "L5") {
levelFive();
}
if (gameState == "L6") {
levelSix();
}
text(("Score:" +score), width/2, 40);
}

function levelOne(){
fill (255,255,255);
text("level 1", width/2,height-20);
var distToBall = dist(ballx, bally, mouseX,mouseY);

if (distToBall<ballSize/2){
ballx =random (width);
bally = random (height);
score = score +1;
} //if distToBall

if (score>10){
gameState = "L2";
}
image(img2, ballx, bally, ballSize, ballSize);

}

function levelTwo(){
fill (255,255,255);
text("level 2", width/2,height-20);

var distToBall = dist(ballx, bally, mouseX,mouseY);

if (distToBall<ballSize/2){
ballx =random (width);
bally = random (height);
score = score +1;
} //if distToBall

var distToBall1 = dist(ball1x, ball1y, mouseX,mouseY);

if (distToBall1<ballSize/2){
ball1x =random (width);
ball1y = random (height);
score = score -2;
} //if distToBall

if (score>25){
gameState = "L3";
}

image(img2, ballx, bally, ballSize, ballSize);
image(img3, ball1x, ball1y, ball1Size, ball1Size);
}

function levelThree(){
fill (255,255,255);
text("level 3", width/2,height-20);

var distToBall = dist(ballx, bally, mouseX,mouseY);

if (distToBall<ballSize/2){
ballx =random (width);
bally = random (height);
score = score +1;
} //if distToBall

var distToBall1 = dist(ball1x, ball1y, mouseX,mouseY);

if (distToBall1<ballSize/2){
ball1x =random (width);
ball1y = random (height);
score = score -2;
} //if distToBall

var distToBall2 = dist(ball2x, ball2y, mouseX,mouseY);

if (distToBall2<ballSize/2){
ball2x =random (width);
ball2y = random (height);
score = score +3;
} //if distToBall

if (score>50){
gameState = "L4";
}
image(img2, ballx, bally, ballSize, ballSize);
image(img3, ball1x, ball1y, ball1Size, ball1Size);
image(img4, ball2x, ball2y, ball2Size, ball2Size);
}

function levelFour(){
fill (255,255,255);
text("level 4", width/2,height-20);

var distToBall = dist(ballx, bally, mouseX,mouseY);

if (distToBall<ballSize/2){
ballx =random (width);
bally = random (height);
score = score +1;
} //if distToBall

var distToBall1 = dist(ball1x, ball1y, mouseX,mouseY);

if (distToBall1<ballSize/2){
ball1x =random (width);
ball1y = random (height);
score = score +1;
} //if distToBall

var distToBall2 = dist(ball2x, ball2y, mouseX,mouseY);

if (distToBall2<ballSize/2){
ball2x =random (width);
ball2y = random (height);
score = score +3;
} //if distToBall

var distToBall3 = dist(ball3x, ball3y, mouseX,mouseY);

if (distToBall3<ballSize/2){
ball3x =random (width);
ball3y = random (height);
score = score -5;
} //if distToBall

if (score>100){
gameState = "L5";
}

image(img2, ballx, bally, ballSize, ballSize);
image(img3, ball1x, ball1y, ball1Size, ball1Size);
image(img4, ball2x, ball2y, ball2Size, ball2Size);
image(img5, ball3x, ball3y, ball3Size, ball3Size);

}

function levelFive(){
fill (255,255,255);
text("UNICORNS ARE MAGICAL!", width/2,height-20);
}
