var dict ;
dict=
{
    "firstname":"Jhon",
    "lastname":"Patil",
    "USN":      19,
    "Address":
    {
        "House_No":08,
        "Street":"Shanteshwar Clinic",
        "city":"Hubli",
        "pin_No":580025
    },
    "course":"NodeJs",
    "mark":45

};
var key;

for( key in dict) 
{
    console.log(key,":",dict[key]);
}