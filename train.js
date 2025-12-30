// 21: NodeJS event loop va callback function organamiz //


// console.log("Jack Ma maslahatlari");
// const list = [
//     "yaxshi talaba bo'ling", //0-20
//     "togri boshliq tanlang va koproq xato qiling", //20-30
//     "ozingizga ishlashni boshlang", //30-40
//     "siz kuchli bolgan narsalarni qiling", //40-50
//     "yoshlarga investitsiya qiling", //50-60
//     "endi dam oling, foydasi yoq", //60
// ];

// function masahatBering(a, callback) {
//     if(typeof a !== "number") callback("insert a number", null);
//     else if(a <= 20) callback(null, list[0]);
//     else if(a > 20 && a <= 30) callback(null, list[1]);
//     else if(a > 30 && a <= 40) callback(null, list[2]);
//     else if(a > 40 && a <= 50) callback(null, list[3]);
//     else if(a > 50 && a <= 60) callback(null, list[4]);
//     else {
//         setTimeout(function() {
//         callback(null, list[5]);
//     }, 5000);
//     }
// }

// // masahatBering(10, (err, data) => {
// //     if(err) console.log("ERROR:", err);
// //     console.log('javob:', data);
// // })


// // masahatBering("salom", (err, data) => {
// //     if(err) console.log("ERROR:", err);
// //     else {
// //         console.log('javob:', data);
// //     }
// // });



// console.log("passed here 0");
// masahatBering(65, (err, data) => {
//     if(err) console.log("ERROR:", err);
//     else {
//         console.log('javob:', data);
//     }
// })
// console.log("passed here 1");

//=================================================================================================================================//

// 22: Asynchronous functionlarni organamiz //


console.log("Jack Ma maslahatlari");
const list = [
    "yaxshi talaba bo'ling", //0-20
    "togri boshliq tanlang va koproq xato qiling", //20-30
    "ozingizga ishlashni boshlang", //30-40
    "siz kuchli bolgan narsalarni qiling", //40-50
    "yoshlarga investitsiya qiling", //50-60
    "endi dam oling, foydasi yoq", //60
];

async function masahatBering(a) {
    if(typeof a !== "number") throw new Error("insert a number", null);
    else if(a <= 20) return list[0];
    else if(a > 20 && a <= 30) return list[1];
    else if(a > 30 && a <= 40) return list[2];
    else if(a > 40 && a <= 50) return list[3];
    else if(a > 50 && a <= 60) return list[4];
    else {
        return new Promise((resolve, reject) => {
            setTimeout(function() {
                resolve(list[5]);
            }, 5000);
        });
    }
}

//the/catch usuli bilan chaqirish
// console.log("passed here 0");
// masahatBering(25)
//   .then(data => {
//     console.log('javob:', data);
//   })
//   .catch(err => {
//     console.log("ERROR:", err);
//   });
// console.log("passed here 1");


// async/await usuli bilan chaqirish
async function run() {
  let javob = await masahatBering(25);
  console.log(javob);
  javob = await masahatBering(70);
  console.log(javob);
  javob = await masahatBering(41);
  console.log(javob);
}
run();