var datemonth = 9;
var dateday = 6;
var dateweek = 2;
var autumn;
var monthname;
var weekname;
var computerscience; 
var health = 90;
var mood = 85;
var stress = 20;
var suboption = false;
function preload(){
  autumn = loadFont('data/Autumn__.ttf');
}


function setup() {
  createCanvas(1200, 800);
  computerscience = new Subject(2, "morning", 20);
}

function draw() {
  
   computerscience.checkclass();
  findMonth(); //to see if time to move to next month 
  findWeek();  //to find what day it is
  calendar();  //draw the calendar
  classes();
  mainoption();
  status();
  grade();
  

  
  //console.log(computerscience.day);
  //console.log(computerscience.upcoming);
  //console.log(weekname);
}

function mouseClicked(){
  if(((400 < mouseX) && (mouseX < 600) && (abs(mouseX - 500)+ abs(mouseY - 120) < 100))||
  ((400 < mouseX) && (mouseX < 600) && (abs(mouseX - 500)+ abs(mouseY - 380) < 100)) || 
  ((270 < mouseX) && (mouseX < 470) && (abs(mouseX - 370)+ abs(mouseY - 250) < 100)) || 
  ((530 < mouseX) && (mouseX < 730) && (abs(mouseX - 630)+ abs(mouseY - 250) < 100))){
   if((400 < mouseX) && (mouseX < 600) && (abs(mouseX - 500)+ abs(mouseY - 120) < 100)){
     studymenu();
   }
   if(suboption){
    if((mouseX > 800) && (mouseX < 940) && (mouseY > 100) && (mouseY < 240)){
      computerscience.study();
      suboption = false;
      nextday();  // line 48-52 do not work, still finding the reason
  }
}
   }
  //nextday();
  
}
  


function nextday(){
   background(255);
  dateday += 1;
  dateweek += 1;
   console.log(mouseX);
   console.log(mouseY);
  if(dateweek === 8){
    dateweek = 1;
  }
}

function studymenu(){
  strokeWeight(3);
  
 
}

