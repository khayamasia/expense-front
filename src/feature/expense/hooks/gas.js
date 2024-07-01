// const gas = [1, 2, 3, 4, 5];
// const cost = [3, 4, 5, 1, 2];

// let startIndex = 0;
// let gasLength = gas.length - 1;
// let leftGas = 0;
// let flag = true
// for (i = startIndex; i < gasLength; i++) {
//     leftGas = gas[i] - cost[i] + gas[i+1]
//     if (leftGas > 0) {
//         flag = true
//     }else{
//         flag = false
//     }
//     if(flag)
// }

let length = 8;
let startIndex = 5;
let i = 0;
let nadide = 0;
let flag = false;
for (startIndex; startIndex <= length; startIndex++) {
  console.log(startIndex);
  if (startIndex > 0) {
    if (startIndex === length - 1 && flag === false) {
      nadide = length - startIndex;
      length = nadide;
      startIndex = 0;
      flag = true;
    }
  }
}
console.log("startIndex:", startIndex);
console.log("length:", length);
console.log("flag:", flag);
console.log("nadide:", nadide);
// let length = 8
// let startIndex = 0
// let i = 0
// let nadide = 0
// let flag = false
// for (startIndex ; startIndex <= length; startIndex++) {
//    console.log(startIndex)
//    if (startIndex != 0) {
//     nadide = (length - startIndex)
//     length = nadide
//     startIndex = 0
//     flag = true
//    }
// }
