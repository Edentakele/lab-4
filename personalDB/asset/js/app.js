var fristName;
var lastName;
var birthyear;
var job;
let tempAge;
//Eligible to vote 
let isEligibleToVote;
let familyMember = new Array();
let numberOfFamily;







fristName = prompt("your first name: ");
lastName = prompt("your last name: ");
birthyear = prompt("your age name: ");
numberOfFamily = prompt("how many family number do you have: ");

//Age variable for Holding Number Value  

tempAge = parseInt(birthyear);
// check Eligibility 
if (tempAge >= 18) {
    isEligibleToVote = true;
} 
else {
    isEligibleToVote = false;
}


console.log("Here is your Profile ")
console.log("Full Name: " + firstName + " "+lastName);
console.log("Profession : " + job);
console.log("Age : " + birthyear + " " + "years old");
