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

// 3. Create a function 'checkWinner' that takes the average score of each team
// as parameters ('avgDolhins' and 'avgKoalas'), and then logs the winner
// to the console, together with the victory points, according to the rule above.
// Example: "Koalas win (30 vs. 13)"

function checkWinner(dolphins,koalas){
    const sumScoreTeam1 = dolphins.reduce((sum,score)=>sum+score,0);
    const sumScoreTeam2 = koalas.reduce((sum,score)=>sum+score,0);

    const aveScoreTeam1 = sumScoreTeam1/3;
    const aveScoreTeam2 = sumScoreTeam2/3;

    if(aveScoreTeam1 > aveScoreTeam2 ){
        console.log(`Dolphins Winner : (Dolphins ${aveScoreTeam1} vs  Koalas ${aveScoreTeam2})`)
    }else{
        console.log(`Koalas Winner : (Dolphins ${aveScoreTeam1} vs  Koalas ${aveScoreTeam2})`)
    }
}

const DolphinsTeam =[85,54,41];
const KoalasTeam =[23,34,27];

checkWinner(DolphinsTeam,KoalasTeam);
//Use the 'checkWinner' function to determine the winner for both Data 1 and
// Data 2

// Data 1: Dolphins score 44, 23 and 71. Koalas score 65, 54 and 49
const DolphinsTeam1 =[44,23,71];
const KoalasTeam1 =[65,54,49];
checkWinner(DolphinsTeam1,KoalasTeam1);