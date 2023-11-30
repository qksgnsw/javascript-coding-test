// 문자열 뒤집기
function reverseString(str) {
    // 문자열을 배열로 변환 후 뒤집기
    // split(''): 문자열을 각 문자로 나누어 배열로 변환합니다.
    // reverse(): 배열을 뒤집습니다.
    // join(''): 뒤집어진 배열을 다시 문자열로 합칩니다.
    const reversed = str.split('').reverse().join('');
    return reversed;
}

// 테스트용 문자열
const testString = "Hello, world!";

// 문자열 뒤집기
const reversedString = reverseString(testString);
console.log(reversedString); // 결과 출력
