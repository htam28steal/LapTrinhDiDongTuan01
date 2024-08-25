// Mark and John are trying to compare their BMI (Body Mass Index), which is
// calculated using the formula:
// BMI = mass / height ** 2 = mass / (height * height) (mass in kg
// and height in meter).

// Your tasks:
// 1. Store Mark's and John's mass and height in variables
let massMark1 = 78;
let heightMark1 = 1.69;

let massJohn1 = 92;
let heightJohn1 = 1.95;


// 2. Calculate both their BMIs using the formula (you can even implement both
// versions)
//Data 1: 
function bmi(mass,height){
    return  mass/ height**2;
}
 console.log('Data 1:' , bmi(massMark1,heightMark1));
 console.log('Data 1: ' , bmi(massJohn1,heightJohn1));

 //Data 2: 

 let massMark2 = 95;
 let heightMark2 = 1.88;

 let massJohn2 = 85;
 let heightJohn2 =1.76;

 console.log('Data 2:' , bmi(massMark2,heightMark2));
 console.log('Data 2: ' , bmi(massJohn2,heightJohn2));


// 3. Create a Boolean variable 'markHigherBMI' containing information about
// whether Mark has a higher BMI than John.
let markHigherBMI1 = bmi(massMark1,heightMark1) > bmi(massJohn1,heightJohn1);
console.log(markHigherBMI1)

let markHigherBMI2 = bmi(massMark2,heightMark2) > bmi(massJohn2,heightJohn2);
console.log(markHigherBMI2)

// Challenge 2: 

// Use the BMI example from Challenge #1, and the code you already wrote, and
// improve it.
// Your tasks:
// 1. Print a nice output to the console, saying who has the higher BMI. The message
// is either "Mark's BMI is higher than John's!" or "John's BMI is higher than Mark's!"
if(markHigherBMI1)
    console.log("Data1: Mark's BMI is higher than John's!")
else
    console.log("Data1: John's BMI is higher than Mark's!")

if(markHigherBMI2) 
    console.log("Data2: Mark's BMI is higher than John's!")
else
    console.log("Data2: John's BMI is higher than Mark's!")

// 2. Use a template literal to include the BMI values in the outputs. Example: "Mark's
// BMI (28.3) is higher than John's (23.9)!"
let bmiMark1 = bmi(massMark1,heightMark1);
let bmiJohn1 = bmi(massJohn1,heightJohn1);
let bmiMark2 = bmi(massMark2,heightMark2);
let bmiJohn2 = bmi(massJohn2,heightJohn2);
if(markHigherBMI1)
    console.log(`Mark's BMI ${bmiMark1} is higher than John's ${bmiJohn1}!`)
else
    console.log(`Data1: John's ${bmiJohn1} BMI is higher than Mark's ${bmiMark1}!`)

if(markHigherBMI2) 
    console.log(`Mark's BMI ${bmiMark2} is higher than John's ${bmiJohn2}!`)
else
    console.log(`Data1: John's ${bmiJohn2} BMI is higher than Mark's ${bmiMark2}!`)
