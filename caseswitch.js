let day = 0; 
let dayName;
let workingdays;

switch(day){
    case 1:
        dayName= "monday";
        break;
    case 2:
        dayName = "Tuesday"
        break;
    case 3:
        dayName = "Wednesday"
        break;
    case 4:
        dayName = "Thursday"
        break;
    case 5:
        dayName = "friday"
    case 6:
        dayName = "Saturday"
        break;
    case 7:
        dayName = "Sunday"
        break;
        default:
            dayName="Invalid day"
}
console.log(`today is : ${dayName}`);

let workDay = new Array();
switch(day){
case 0:
    workDay[0]="Monday"
case 1:
workDay[1]="Tuesday"
case 2: 
workDay[2]="Wednesday"
case 3:
    workDay[3]="Thursday"
case 4:
    workDay[4]="Friday"
    workingdays=`${workDay} are working days of the week`
    break;
case 5:
    workDay[5]="Saturday"
case 6:
    workDay[6]="Sunday"
break;
default:
    workDay[7]="invalid day"

}
console.log(`${workingdays}`)

let MathScore = [
    ['John Doe', 20, 60, 'A'],
    ['Jane Doe', 10, 52, 'B'],
    ['Petr Chess', 5, 24, 'F'],
    ['Ling Jess', 28, 43, 'A'],
    ['Ben Liard', 16, 51, 'B']
];
console.table(MathScore);

let MathScore1 = [
    ["John Doe", 20, 60, "A"],
    ["Jane Doe", 10, 52, "B"],
    ["Petr Chess", 5, 24, "F"],
    ["Ling Jess", 28, 43, "A"],
    ["Ben Liard", 16, 51, "B"]
  ];
console.table(MathScore1);
  
 // MathScore.push(["Tom Right", 30, 32, "B"]);
  
  //MathScore.unshift(["Alice George", 28, 62, "A"]);
  