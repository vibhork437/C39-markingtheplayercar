//created variables for various tasks

var canvas, backgroundImage;

var gameState = 0;
var playerCount;
var allPlayers;
var distance = 0;
var database;

var form, player, game;

var cars, car1, car2, car3, car4;

var track, car1_img, car2_img, car3_img, car4_img;

//we have loaded images to its respective variable
function preload(){
  track = loadImage("../images/track.jpg");
  car1_img = loadImage("../images/car1.png");
  car2_img = loadImage("../images/car2.png");
  car3_img = loadImage("../images/car3.png");
  car4_img = loadImage("../images/car4.png");
  ground = loadImage("../images/ground.png");
}


function setup(){
  //created canvas so that it fits on screen of all devices
  canvas = createCanvas(displayWidth - 20, displayHeight-30);

  //we assign firebase.database() to a variable "database"
  database = firebase.database();
  game = new Game();
  game.getState();
  game.start();
}


function draw(){

  //when form are filled by 4 users and 4 players are created gamestate changes from 0(wait) to 1(start)
  if(playerCount === 4){
    game.update(1);
  }

  //when the game is in play state forms are disappeared and you can play the game
  if(gameState === 1){
    clear();
    game.play();
  }

  //when all 4 cars reach the destination the game is ended
  if(gameState === 2){
    game.end();
  }
}
