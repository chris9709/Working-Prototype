function findMonth(){
  if(datemonth === 9){
    monthname = "Sep";
    if(dateday === 31){
      dateday = 1;
      datemonth += 1;
    }
  }
  if(datemonth === 10){
    monthname = "Oct";
    if(dateday === 32){
      dateday = 1;
      datemonth += 1;
    }
  }
  if(datemonth === 11){
    monthname = "Nov";
    if(dateday === 31){
      dateday = 1;
      datemonth += 1;
    }
  }
  if(datemonth === 12){
    monthname = "Dec";
    if(dateday === 32){
      dateday = 1;
      datemonth = 1;
    }
  }
  if(datemonth === 1){
    monthname = "Jan";
  }
}

function findWeek(){
  if(dateweek === 1){
    weekname = "Monday";
  }
  else if(dateweek === 2){
    weekname = "Tuesday";
  }
  else if(dateweek === 3){
    weekname = "Wednesday";
  }
  else if(dateweek === 4){
    weekname = "Thursday";
  }
  else if(dateweek === 5){
    weekname = "Friday";
  }
  else if(dateweek === 6){
    weekname = "Saturday";
  }
  else if(dateweek === 7){
    weekname = "Sunday";
  }
}

function calendar(){
  strokeWeight(3);
  rect(0, 0, 190, 160);
  textAlign(CENTER);
  textFont(autumn, 45);
  text(monthname, 50, 120);
  textSize(90);
  text(dateday, 135, 140);
  textSize(40);
  text(weekname, 95, 50);
}



function classes(){
  strokeWeight(3);
  rect(0, 160, 190, 160);
  if(computerscience.upcoming){
  textAlign(CENTER);
  textFont(autumn, 35);
  text("CS", 35, 290);
  }
  }

function status(){
  strokeWeight(3);
  rect(0, 320, 190, 160);
  textAlign(LEFT);
  textFont(autumn, 35);
  text("MOOD: " + mood, 20, 370);
  text("HEALTH: " + health, 20, 400);
  text("STRESS: " + stress, 20, 430);
}

function grade(){
  strokeWeight(3);
  rect(0, 480, 190, 160);
  textAlign(LEFT);
  textFont(autumn, 35);
  text("CS: " + round(computerscience.condition), 20, 530);
}
