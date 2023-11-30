const array = [1,2,3,4,5,6,7]
// 순회하며 인덱스, 원소 출력
array.forEach((e,index) => console.log(index, e))

// 조건을 만족하는 첫번째 원소찾기
console.log(array.find((element) => element > 5))

// 조건을 만족하는 첫번째 원소 인덱스찾기
console.log(array.findIndex((element) => element > 5))

// 값이 포함되어 있는지 판단
console.log(array.includes(2));

// 첫번째 요소를 삭제하고 반환: 큐
console.log(array.shift(), array)

// 마지막 요소를 삭제하고 반환: 스택
console.log(array, array.pop())

// 마지막에 해당 요소를 추가하고 길이 반환: 스택, 큐
console.log(array.push(7))

// 모든 요소에 함수를 각 호출하여 새로운 배열 반환
console.log(array.map((e) => e * 2))

// 해당 조건을 만족하는 요소로 새로운 배열 반환.
console.log(array.filter((e) => e > 3))

// 오름차순 정렬
console.log(array.sort((a,b) => a - b))

// 내림차순 정렬
console.log(array.sort((a,b) => (a - b) * -1))

// 배열 안에 있는 모든 함수에 대한 연산: 초기값 = 0, total에 요소를 더한다.
console.log(array.reduce((total, e) => total + e, 0))

// 같은 값으로 채워서 만들기
console.log(Array(10).fill(0))
// 같은 값으로 이중배열 만들기 5 * 5 배열
console.log(Array(5).fill().map(e => Array(5).fill(0)))