const readline=require('readline-sync');
let ISA1=readline.question("enter ISA1 marks:");
console.log(ISA1);
let ISA2=readline.question("enter IAS2 marks:");
console.log(ISA2);
let ESA=readline.question("enter ESA marks:");
console.log(ESA);
if(ISA1>=35 && ISA2>=35 && ESA>=35)
{
var marks=ISA1+ISA2+ESA;
var average=marks/3;
}
else
{
    grade=4;
}
if(average >= 90)
{
    grade=0;
}
else if(average >= 80 && average <= 89)
    {
        grade = 1;
    }
else if(average >= 60 && average <= 79)
{
    grade = 2;
}
else if(average >= 33 && average <= 59)
{
    grade = 3;
}
switch(grade) {
    case 0: console.log("A : Excellent"); 
    break;
    case 1: console.log( "B : Very Good"); 
    break;
    case 2: console.log( "C : Good");
    break;
    case 3: console.log( "D : Pass"); 
    break;
    case 4: console.log( "F : Fail"); 
    break;
    default : console.log("Invalid");
}