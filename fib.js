const readline=require('readline-sync');
var f1=0;
var f2=1;
var f3;
let n=readline.question("enter fibonacci number:");
console.log("fibonacci num:",f1);
console.log("fibonacci num:",f2);
var i;
for(i=3;i<=n;i++)
{
    f3=f1+f2;
    f1=f2;
    f2=f3;
    
    console.log("fibonacci num:",f3)
}