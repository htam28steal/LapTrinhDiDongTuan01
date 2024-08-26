// Let's go back to Mark and John comparing their BMIs! This time, let's use objects to
// implement the calculations! Remember: BMI = mass / height ** 2 = mass
// / (height * height) (mass in kg and height in meter)
// Your tasks:
// 1. For each of them, create an object with properties for their full name, mass, and
// height (Mark Miller and John Smith)

var Mark = {
    fullName: 'Mark Miller',
    mass: 78,
    height: 1.69,
}

var John = {
    fullName: 'John Smith',
    mass: 92,
    height: 1.95,
}

// 2. Create a 'calcBMI' method on each object to calculate the BMI (the same
// method on both objects). Store the BMI value to a property, and also return it
// from the method

function calcBMI(person) {
    return person.mass / person.height ** 2;
}
console.log('2. Calculating BMI...');
console.log('Mark:', calcBMI(Mark));
console.log('John:', calcBMI(John));


// 3. Log to the console who has the higher BMI, together with the full name and the
// respective BMI. Example: "John's BMI (28.3) is higher than Mark's (23.9)!"
// Test data: Marks weights 78 kg and is 1.69 m tall. John weights 92 kg and is 1.95 m
// tall.

if (calcBMI(John) > calcBMI(Mark)) {
    console.log(`3. ${John.fullName}'s BMI (${calcBMI(John)}) is higher than ${Mark.fullName}'s (${calcBMI(Mark)})!`);
} else if (calcBMI(Mark) > calcBMI(John)) {
    console.log(`3. ${Mark.fullName}'s BMI (${calcBMI(Mark)}) is higher than ${John.fullName}'s (${calcBMI(John)})!`);
}