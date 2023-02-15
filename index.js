let A = "GopalaOfRaja";
let B = "GopalaOf";

// const CommonSubString = (s, t) => {
//   let m = s.length;
//   let n = t.length;

//   var dp = Array(2)
//     .fill()
//     .map(() => Array(m + 1).fill(0));
//   var res = 0;

//   for (var i = 1; i <= n; i++) {
//     for (var j = 1; j <= m; j++) {
//       if (s.charAt(i - 1) == t.charAt(j - 1)) {
//         dp[i % 2][j] = dp[(i - 1) % 2][j - 1] + 1;
//         if (dp[i % 2][j] > res) res = dp[i % 2][j];
//       } else dp[i % 2][j] = 0;
//     }
//   }
//   return res;
// };

// console.log(CommonSubString(A, B));

const obj1 = [
  {
    id: 1,
    name: "ishan",
    age: 23,
    fullTimeEmployee: true,
    designation: "SD2",
  },
  {
    id: 2,
    name: "akshay",
    age: 21,
    fullTimeEmployee: true,
    designation: "SD2",
  },
  {
    id: 3,
    name: "parth",
    age: 20,
    fullTimeEmployee: false,
    designation: "Intern",
  },
  {
    id: 4,
    name: "karan",
    age: 30,
    fullTimeEmployee: true,
    designation: "Tester",
  },
];

// const findEmployee = obj.filter((el) => {
//   if (el.fullTimeEmployee == true && el.designation === "SD2") {
//     return el;
//   }
// });
// console.log(findEmployee);

let arr = [1, 2, 3, 4, 4,]; 

  
let sum = arr.reduce((el,acc)=>{
    return (el+acc)
})
// console.log("sum",sum);

let n = arr.length;

const reapeateArr = (arr, n) => {
  for (var i = 1; i <= n; i++) {
    if (arr[i] == i) {
      return arr[i];
    }
  }
};
// console.log("Repeat",reapeateArr(arr, n));

const MissingEL = (arr, N) => {
  let n = arr;
   
      let total = Math.floor((N + 1) * (N + 2) / 2);
      for (let i = 0; i < n.length; i++){
           total -= n[i];
      }
         
      return(total);
};
console.log("Missing",MissingEL(arr, n));

let nums = [0,0,1,1,1,2,2,3,3,4]



 const Duplicates = nums.filter((el,index)=> {
   return nums.indexOf(el)==index
  //
})
  //  console.log(Duplicates);

