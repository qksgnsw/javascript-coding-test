const str = "Hello World"
const ret = str.split(" ") // [ 'Hello', 'World' ]
const ret2 = ret.join(' [ add str ] ') // Hello [ add str ] World
console.log(str.substring(0, 4))
console.log(str.slice(7));  // 앞에서 7번째부터
console.log(str.slice(-4)); // 뒤에서 4번째부터