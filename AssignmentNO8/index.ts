// write a program that converts the temperature from celsius to fahrenheit //

let tempcelsius=38;
let celsiustofahrenheit=tempcelsius * (9 / 5) + 32
//console.log(`Temperatue in celsius: ${tempcelsius}\nTemperature in fahrenheit: ${celsiustofahrenheit}`);


//Q2 write a program that calculates the percentage //

let obtainedMarks=681;
let totalMarks=1100;
let percentage=(obtainedMarks/totalMarks) * 100
//console.log(`Percentage: ${percentage}`);

//Q3 write a program that determines the day of week//

var weekday=3;
if (weekday==1) {
    //console.log("today is monday");
    
}if (weekday==2) {
    //console.log("today is tuesday");
    
} else {
    //console.log("today is wednesday");
    
}


//Q4 write a program that converts given numbers of days into weeks //


let numberofdays=36;
let numberofweeks=Math.floor(numberofdays / 7);
let numofremainingdays=numberofdays % 7;
//console.log(`there are ${numberofweeks}weeks and ${numofremainingdays}days in ${numberofdays}days!!`);


//Q5 write a program that determines the category of user-provided age//

let age=45;
if (age==0 && age<=15) {
    //console.log("you are child");
    
}
if (age>=15 && age<=20) {
    //console.log("you are teenager ");
    
} else {
    //console.log("you are an adult");
    
}



//Q6 write a program that check the temperature is cold or hot//

let temperature=46;
if (temperature >=40) {
    console.log("it is warm ")
    
}
    
if(temperature >=20) {
    console.log("it is less warmer");
    
} else {
    console.log("it is cold");
    
}

