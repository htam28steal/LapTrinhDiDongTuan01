// Coding Challenge #3
// There are two gymnastics teams, Dolphins and Koalas. They compete against each
// other 3 times. The winner with the highest average score wins a trophy!
// Your tasks:
// 1. Calculate the average score for each team, using the test data below
function aveScore(score1,score2,score3){
    return score1+score2+score3/3;
}

let aveScoreDolphins = aveScore(96,108,89);
let aveScoreKoalas  = aveScore(88,91,110);
console.log(`Diem trung binh doi Dolphins: ${aveScoreDolphins}`);
console.log(`Diem trung binh doi Koalas: ${aveScoreKoalas}`);

// 2. Compare the team's average scores to determine the winner of the competition,
// and print it to the console. Don't forget that there can be a draw, so test for that
// as well (draw means they have the same average score)

let compareAveScore  = aveScoreDolphins > aveScoreKoalas;
if (compareAveScore){
    console.log(" Team Dolphins win ")
}else if(!compareAveScore){
    console.log(" Team Koalas win ")
}else{
    console.log(" Draw ")
}

// Bonus 1: Include a requirement for a minimum score of 100. With this rule, a
// team only wins if it has a higher score than the other team, and the same time a
// score of at least 100 points. Hint: Use a logical operator to test for minimum
// score, as well as multiple else-if blocks �
let aveScoreDolphinsBN1 = aveScore(97,112,101);
let aveScoreKoalasBN1  = aveScore(109,95,123);

let compareAveScoreBN1  = aveScoreDolphinsBN1 > aveScoreKoalasBN1;
if (compareAveScoreBN1){
    console.log(" Team Dolphins win ")
}else if(!compareAveScoreBN1){
    console.log(" Team Koalas win ")
}else{
    console.log(" Draw ")
}
// 4. Bonus 2: Minimum score also applies to a draw! So a draw only happens when
// both teams have the same score and both have a score greater or equal 100
// points. Otherwise, no team wins the trophylet aveScoreDolphinsBN1 = aveScore(97,112,101);
let aveScoreKoalasBN2  = aveScore(109,95,106);

let compareAveScoreBN2  = aveScoreDolphinsBN1 > aveScoreKoalasBN2;
if (compareAveScoreBN2){
    console.log(" Team Dolphins win ")
}else if(!compareAveScoreBN2){
    console.log(" Team Koalas win ")
}else{
    console.log(" Draw ")
}