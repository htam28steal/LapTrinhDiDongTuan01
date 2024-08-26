// Steven is still building his tip calculator, using the same rules as before: Tip 15% of
// the bill if the bill value is between 50 and 300, and if the value is different, the tip is
// 20%.
// Your tasks:
// 1. Write a function 'calcTip' that takes any bill value as an input and returns
// the corresponding tip, calculated based on the rules above (you can check out
// the code from first tip calculator challenge if you need to). Use the function
// type you like the most. Test the function using a bill value of 100
function calcTip (totalBill){

    if(totalBill >=50 && totalBill <=300){
        return totalBill*15/100;
    }else{
        if(totalBill>300){
            return totalBill*20/100;
        }else{
            return 0;
        }
    }
}

let totalBill = 100;
console.log(`Tong tien tip: ${calcTip(totalBill)}`)

// 2. And now let's use arrays! So create an array 'bills' containing the test data
// below
const arrBill = [100,120,150,250];

//3. Create an array 'tips' containing the tip value for each bill, calculated from
//the function you created before

let arrTips = [];
for(let i = 0 ; i < arrBill.length ; i ++ ){
    arrTips.push( calcTip(arrBill[i]));
} 
console.log(arrTips)

const arrBills = [100,120,150,250];
// 4. Bonus: Create an array 'total' containing the total values, so the bill + tip

const sumTips =  arrTips.reduce((sum,tip)=>sum+tip,0);
const sumbills =  arrBills.reduce((sum,bill)=>sum+bill,0);

let sumBillTip = sumTips + sumbills;

console.log(`Tổng Bill và Tip: ${sumBillTip}`)


