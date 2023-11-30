// const rFibonacci = (n) => {
//     if (n <= 1) {
//       return n;
//     } else {
//       return rFibonacci(n - 1) + rFibonacci(n - 2);
//     }
//   }

// // 피보나치 수열 출력
// const n = 10; // 출력할 항 개수
// for (let i = 0; i < n; i++) {
//     console.log(rFibonacci(i));
// }


const dpFibonacci = (n, memo = {}) => {
    if (n in memo) return memo[n];
    if (n <= 1) return n;
    
    memo[n] = dpFibonacci(n - 1, memo) + dpFibonacci(n - 2, memo);
    return memo[n];
}
  
// 피보나치 수열 출력
const count = 10; // 출력할 항 개수
for (let i = 0; i < count; i++) {
  console.log(dpFibonacci(i));
}