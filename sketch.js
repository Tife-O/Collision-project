let myXPos = 100;
let myYPos = 100;
let enemyXPos = 300;
let enemyYPos = 300;
let enemySize = 50;

let r, g,b;
let score = 0;


let myLeft, myRight, myTop, myBottom;
let enemyLeft, enemyRight, enemyTop, enemyBottom;

function preload() {
    aangImage = loadImage("https://yt3.googleusercontent.com/-CFTJHU7fEWb7BYEb6Jh9gm1EpetvVGQqtof0Rbh-VQRIznYYKJxCaqv_9HeBcmJmIsp2vOO9JU=s900-c-k-c0x00ffffff-no-rj")
    momoImage = loadImage("https://qph.cf2.quoracdn.net/main-qimg-936e3ec31ff3057a2a0df50b133398a1-lq");
}

function setup() {
   createCanvas(500, 500);
   noStroke();


   imageMode(CENTER);
}


function draw() {
   background(0);

   fill(0, 0, 255);
   fill(r, g, b);
   image(momoImage, enemyXPos, enemyYPos, enemySize, enemySize);


   fill(255, 0, 0);
   image(aangImage, myXPos, myYPos, 50, 50);


   if (keyIsDown(LEFT_ARROW)) {
       myXPos -= 3;
   }


   if (keyIsDown(RIGHT_ARROW)) {
       myXPos += 3;
   }


   if (keyIsDown(UP_ARROW)) {
       myYPos -= 3;
   }


   if (keyIsDown(DOWN_ARROW)) {
       myYPos += 3;
   }


   myLeft = myXPos - 25;
   myRight = myXPos + 25;
   myTop = myYPos - 25;
   myBottom = myYPos + 25;


   enemyLeft = enemyXPos - enemySize/2;
   enemyRight = enemyXPos + enemySize/2;
   enemyTop = enemyYPos - enemySize/2;
   enemyBottom = enemyYPos + enemySize/2;


   if (myLeft > enemyRight || myRight < enemyLeft || myTop > enemyBottom || myBottom < enemyTop) {


   }


   else {
    r = random(0, 255);
    g = random(0, 255);
    b = random(0, 255);
    //fill(r, g, b);
    enemyXPos = random(25, 475);
    enemyYPos = random(25, 475);
    score ++;
    enemySize = random(25, 100);
   }

   fill(255);
   textSize(25)
   text("Score: " + score, 20, 50)
}
