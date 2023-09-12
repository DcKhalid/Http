// //for every one sec
// setInterval(() => {
//     console.log("I am a guy");
// }, 1000);
// //after one sec
// setTimeout(() => {
//     console.log("I am Khaid");
// }, 1000);

// let attempts: number=0
// setInterval(() => {
//         console.log(`i have run ${attempts++}} times`)
// }, 2000);

setInterval(() => {
    let ad = "Skip this as in the next five secs";
    console.log(ad);

    setTimeout(() => {
        console.log("click this button to skip ad");
    }, 5000);
},1000);

function add(myMoney){
    setInterval(()=> {
        console.log(`${(myMoney +=2)}`);
    }, 3000);
}
add(700);