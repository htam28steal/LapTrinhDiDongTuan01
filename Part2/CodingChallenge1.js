// Back to the two gymnastics teams, the Dolphins and the Koalas! There is a new
// gymnastics discipline, which works differently.
// Each team competes 3 times, and then the average of the 3 scores is calculated (so
// one average score per team).
// A team only wins if it has at least double the average score of the other team.
// Otherwise, no team wins!
// Your tasks:
// 1. Create an arrow function 'calcAverage' to calculate the average of 3 scores
function calcAverage(score1,score2,score3){
    return (score1+score2+score3)/3;
}

// 2. Use the function to calculate the average for both teams


let scoreDolphins = calcAverage(44,23,71);
let scoreKoals =  calcAverage(65,54,49);

console.log(`Diem Team Dolphins: ${scoreDolphins}`)
console.log(`Diem Team Koals: ${scoreKoals}`)