//////////با یک حلقه
// let length = 10;
// let startIndex = 0;
// let i = 0;
// let nadide = 0;
// let flag = false;
// i = startIndex;

// for (i; i < length; i++) {
//   console.log(i);
//   if (i === length - 1 && flag === false) {
//     i = -1;
//     length = startIndex;
//     flag = true;
//   }
// }

////////////////////با دو حلقه

let length = 10;
let startIndex = 0;
let i = 0;
let flag = false;

for (z = 0; z <= 10; z++) {
  i = z;

  for (i; i < length; i++) {
    console.log(i);
    if (i >= length - 1 && flag === false) {
      i = -1;
      length = z;
      flag = true;
    }
  }
  //reset params
  flag = false;
  length = 10;
  console.log("dore:", z);
}

/////////javabe hodudi

// let flag = false;

// const gas = [2,3,4]
// const cost = [3,4,3]
// let length = gas.length
// let isSuccess = -1
// let tank = 0

// for(z=0;z<=length;z++){

//   i=z;
//   if(isSuccess !== -1){
//     break
//   }
//   for (i; i < length; i++) {
//   console.log(i);
//   //core kar
//   if(i===0){
//     tank = tank + gas[i]
//   }
//   if(tank > gas[i]){
//     tank = tank - cost[i] + gas[i+1]
//     isSuccess = z
//   }else{
//     // break
//     isSuccess = -1
//   }
//     if ( i >= length -1 && flag === false) {
//       i=-1
//       length = z
//       flag = true;
//   }
// }
// //reset params
// flag = false
// length = gas.length
// console.log("dore:",z)
// }
// console.log("isSuccess",isSuccess)

///////////////////////////akharin

// let flag = false;

// const gas = [1,2,3,4,5] //[2,3,4]
// const cost = [3,4,5,1,2]//[3,4,3]
// let length = gas.length
// let isSuccess = -1
// let tank = 0
// let dore = 0
// for(z=0;z<length;z++){
//   dore = 0
//   i=z;
// tank=0 ;
//   if(isSuccess !== -1){
//     console.log("injiiii")
//     console.log("z:",z)
//     break
//   }
//   for (i; i < length; i++) {
//     dore = dore + 1
//   // console.log(i);
//   //core kar
//   if(i===z){
//     tank = tank + gas[i]
//   }
//   if(tank > cost[i]){
//     tank = tank - cost[i] + gas[i+1]
//     isSuccess = z
//   }else{
//     isSuccess = -1
//     break
//     //reset tank
//     // if(dore === length){
//     // tank = gas[i+1]
//     // }

//   }
//     if ( i >= length -1 && flag === false) {
//       i=-1
//       length = z
//       flag = true;
//   }
// }

// //reset params
// flag = false
// length = gas.length
// isSuccess = -1
// // console.log("dore:",dore)
// console.log("tank",isSuccess)
// }

// for (let j = 0; j < 10; j++) {
//   console.log("j:",j)
//   for(i=0;i<5;i++){
//   console.log(i)
//   if(i===2){
//     break
//   }
// }
// }
