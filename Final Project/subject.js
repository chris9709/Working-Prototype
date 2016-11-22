function Subject(day, time, difficulty){
  if(day === 1){
  this.day = "Monday";
  }
  else if(day === 2){
  this.day = "Tuesday";
  }
  else if(day === 3){
  this.day = "Wednesday";
  }
  else if(day === 4){
  this.day = "Thursday";
  }
  else if(day === 5){
  this.day = "Friday";
  }
  
  
  this.checkclass = function(){
    if(this.day === weekname){
      this.upcoming = true;
    }
    else{
      this.upcoming = false;
    }
  }
  
  
  this.difficulty = difficulty;
  this.condition = 90 - 2 * sqrt(this.difficulty);
  
  this.study = function(){
    this.condition = this.condition + 1 * (health / 100) * (mood / 100);
  }
  
}