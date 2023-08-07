// 1-Calculate area of a rectangle
let length = 7;
let width = 4;
let area = length * width;
console.log(area);

// 2-The Temperature Converter
var c=40;
var f;
f =  (c * 1.8) + 32 ;
console.log(c," °C is",f," °F");// (°C x 1.8) + 32 = °F
c=null;
f=50;
c=(f - 32) * .5556; 
console.log(f," °F is",c," °C")// (°F - 32) x .5556 = °C

// 3-Convert hours to seconds
var hour = 2;
var second = hour * 3600;
console.log(hour," hour = ",second,"sec");


// 4-Leap year
var year = 2024;
if(year%4==0&&year%100!=0||year%400==0){
    console.log(year," it's leap year")
}
else{
    console.log(year," is not leap year")

}

// 5-Find the a number is present in given range
let start = 11;
let end = 30;
let range = end - start; // 19
let number=15;
let result = true;
if(range==number){
    console.log(result);
}
else{
    result=false;
    console.log(result);

}


// 6-Factorial numbers
let re=1;

for(let i = 5; i>=1; i--){
re = re * i;

}
console.log(re);
