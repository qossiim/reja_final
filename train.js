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

// console.log("Jack Ma maslahatlari");
// const list = [
//   "yaxshi talaba bo'ling", //0-20
//   "togri boshliq tanlang va koproq xato qiling", //20-30
//   "ozingizga ishlashni boshlang", //30-40
//   "siz kuchli bolgan narsalarni qiling", //40-50
//   "yoshlarga investitsiya qiling", //50-60
//   "endi dam oling, foydasi yoq", //60
// ];

// async function masahatBering(a) {
//   if (typeof a !== "number") throw new Error("insert a number", null);
//   else if (a <= 20) return list[0];
//   else if (a > 20 && a <= 30) return list[1];
//   else if (a > 30 && a <= 40) return list[2];
//   else if (a > 40 && a <= 50) return list[3];
//   else if (a > 50 && a <= 60) return list[4];
//   else {
//     return new Promise((resolve, reject) => {
//       setTimeout(function () {
//         resolve(list[5]);
//       }, 5000);
//     });
//   }
// }

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
// async function run() {
//   let javob = await masahatBering(25);
//   console.log(javob);
//   javob = await masahatBering(70);
//   console.log(javob);
//   javob = await masahatBering(41);
//   console.log(javob);
// }
run();

// Shunday 2 parametrli function tuzing, hamda birinchi parametrdagi
// letterni ikkinchi parametrdagi sozdan qatnashga sonini return qilishi kerak boladi.
// MASALAN countLetter("e", "engineer") 3ni return qiladi.

// A-TASK
// function countLetter(letter, word) {
//   let count = 0;

//   letter = letter.toLowerCase();
//   word = word.toLowerCase();

//   for (let i = 0; i < word.length; i++) {
//     if (word[i] === letter) {
//       count++;
//     }
//   }

//   return count;
// }

// // b-TAST-
// function countDigits(str) {
//   let count = 0;

//   for (let i = 0; i < str.length; i++) {
//     if (str[i] >= "0" && str[i] <= "9") {
//       count++;
//     }
//   }

//   return count;
// }
// console.log(countDigits("ad2a54y79wet0sfgb9"));

//  MITASK - C;

// function checkContent(str1, str2) {
//   if (str1.length !== str2.length) return false;
//   return str1.split("").sort().join("") === str2.split("").sort().join("");
// }

// console.log(checkContent("mitgroup", "gmtiprou"));
// console.log(checkContent("michael", "leahci"));

// 1) Uzunlikni tekshir
// 2) Harflarni ajrat
// 3) Tartibla
// 4) Qayta string qil
// 5) Solishtir

// D-task

// class Shop {
//   constructor(non, lagmon, cola) {
//     this.products = {
//       non: non,
//       lagmon: lagmon,
//       cola: cola,
//     };
//   }

//   getTime() {
//     const now = new Date();
//     const h = String(now.getHours()).padStart(2, "0");
//     const m = String(now.getMinutes()).padStart(2, "0");
//     return `${h}:${m}`;
//   }

//   qoldiq() {
//     return `Hozir ${this.getTime()} da ${this.products.non} ta non, ${this.products.lagmon} ta lagmon va ${this.products.cola} ta cola mavjud!`;
//   }

//   sotish(nomi, soni) {
//     if (!this.products.hasOwnProperty(nomi)) {
//       console.log("Bunday mahsulot yo‘q ");
//       return;
//     }

//     if (this.products[nomi] < soni) {
//       console.log("Yetarli mahsulot yo‘q ");
//       return;
//     }

//     this.products[nomi] -= soni;
//     console.log(
//       `Hozir ${this.getTime()} da ${soni} ta ${nomi} sotildi`
//     );
//   }

//   qabul(nomi, soni) {
//     if (!this.products.hasOwnProperty(nomi)) {
//       console.log("Bunday mahsulot yo‘q ");
//       return;
//     }

//     this.products[nomi] += soni;
//     console.log(
//       `Hozir ${this.getTime()} da ${soni} ta ${nomi} qabul qilindi`
//     );
//   }
// }

// MITASK - E;

// function getReverse(str) {
//   return str.split("").reverse().join("");
// }

// // MITASK - F; last

// function findDoublers(str) {
//   let seen = {};

//   for (let i = 0; i < str.length; i++) {
//     let char = str[i];

//     if (seen[char]) {
//       return true;
//     }

//     seen[char] = true;
//   }

//   return false;
// }

// console.log(findDoublers("hello"));

// last-task
// function findDoublers(f) {
//   for (let i = 0; i < f.length; i++) {
//     if (f.indexOf(f[i]) !== f.lastIndexOf(f[i])) {
//       return true;
//     }
//   }
//   return false;
// }

// console.log(findDoublers("hello")); tig log

// G-task
function getHighestIndex(arr) {
  let max = arr[0];
  let maxIndex = 0;

  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > max) {
      max = arr[i];
      maxIndex = i;
    }
  }

  return maxIndex;
}

console.log(getHighestIndex([5, 21, 12, 21, 8]));
