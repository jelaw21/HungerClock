let minutes = 90;
let hours = 90;
let minutesDisplay = "00";
let hoursDisplay = "00";
let p1EatTimer = 8;

const minuteHand = document.querySelector('.hand-minute');
const hourHand = document.querySelector('.hand-hour');
const timeDisplay = document.querySelector('.timeDisplay');

let displayTime = function(){
	
  if(minutes == 90){
  	minutesDisplay = "00";
  }else if(minutes == 180){
  	minutesDisplay = "15";
  }else if(minutes == 270){
  	minutesDisplay = "30";
  }else{
  	minutesDisplay = "45";
  }
  
  hoursDisplay = (hours - 90)/30;
  
  if(hoursDisplay >= -3 && hoursDisplay < 6){
  	document.body.style.background = "#413839";
  }else{
  	document.body.style.background = "steelBlue";
  }
  
  if(hoursDisplay >= 13){
  	hoursDisplay = hoursDisplay - 12;
  }else if(hoursDisplay < 0){
  	hoursDisplay = hoursDisplay + 12;
  }else if(hoursDisplay == 0){
  	hoursDisplay = 12;
  }
  
  timeDisplay.innerHTML = hoursDisplay + ':' + minutesDisplay; 
  
}

let checkForReset= function() {
  if (minutes >= 360) {

    minuteHand.style.transform = `rotate(${minutes}deg)`;
		minutes = minutes - 360;
    setTimeout(function() {
      minuteHand.style.transition = "none";
      minuteHand.style.transform = `rotate(${minutes}deg)`;
    }, 200)

  } else {
  	minuteHand.style.transition = "0.3s all";
    minuteHand.style.transform = `rotate(${minutes}deg)`;
  }
  
  if (hours >= 720) {

    hourHand.style.transform = `rotate(${hours}deg)`;
		hours = hours - 720;
    setTimeout(function() {
      hourHand.style.transition = "none";
      hourHand.style.transform = `rotate(${hours}deg)`;
    }, 200)

  } else {
  	hourHand.style.transition = "0.3s all";
    hourHand.style.transform = `rotate(${hours}deg)`;
  }
  
}

let add15 = function() {
  minutes += 90;	
  
  if (minutes == 90) {
    hours += 30;
    updateHunger();
  }
  
	checkForReset();
  displayTime();
  
}

let add30 = function() {
  minutes += 180;
  
  if(minutes == 450 || minutes == 180){
  	hours += 30;
    updateHunger();
  }
  
  checkForReset();
  displayTime();
  
}

let addHour = function() {
  hours += 30;
  checkForReset();
  displayTime();
  updateHunger();
}

let eat = function(){
	p1EatTimer = 8; 
  document.getElementById("p1FoodCounter").innerHTML = "Hunger in " + p1EatTimer + " hours";
}



let setHunger = function(){
	document.getElementById("p1FoodCounter").innerHTML = "Hunger in " + p1EatTimer + " hours"; 
}

let updateHunger = function(){
	p1EatTimer -= 1;
  if(p1EatTimer <= -1){
  	document.getElementById("p1FoodCounter").innerHTML = "Hunger in " + p1EatTimer + " hours";
  	document.getElementById("p1FoodCounter").insertAdjacentHTML('beforeend', "<p>Hungry. Lose 1 Energy</p>"); 
  }else if(p1EatTimer == 0){
  	document.getElementById("p1FoodCounter").innerHTML = "Hunger in " + p1EatTimer + " hours";
  	document.getElementById("p1FoodCounter").insertAdjacentHTML('beforeend', "<p>Hungry. Lose 2 Energy</p>");
  }else{
  	document.getElementById("p1FoodCounter").innerHTML = "Hunger in " + p1EatTimer + " hours";
  }   
}


setHunger();
displayTime();
