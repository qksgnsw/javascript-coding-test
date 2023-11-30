// 배열 내에서 최댓값 찾기
function findMax(arr) {
    if (arr.length === 0) {
        return "배열이 비어 있습니다.";
    }

    let max = arr[0]; // 배열의 첫 번째 요소를 최댓값으로 설정

    for (let i = 1; i < arr.length; i++) {
        if (arr[i] > max) {
            max = arr[i]; // 최댓값보다 큰 값을 찾으면 최댓값 변경
        }
    }

    return `최댓값은 ${max}입니다.`;
}

function findMin(arr) {
    if (arr.length === 0) {
        return "배열이 비어 있습니다.";
    }

    let min = arr[0]; // 배열의 첫 번째 요소를 최솟값으로 설정

    for (let i = 1; i < arr.length; i++) {
        if (arr[i] < min) {
            min = arr[i]; // 현재 요소가 최솟값보다 작으면 최솟값 변경
        }
    }

    return `최소값은 ${min}입니다.`;
}

// 테스트용 배열
const testArray = [3, 7, 2, 9, 1, 11, 5];

// 최댓값 출력
console.log(findMax(testArray));
// 배열에서 최솟값 찾기
console.log(findMin(testArray));
