// 이진탐색
const binarySearch = (arr, target) => {
    let left = 0;
    let right = arr.length - 1;
    let count = 0
  
    while (left <= right) {
      let mid = Math.floor((left + right) / 2);
      count++  

      // 중간값이 찾고자 하는 값인 경우
      if (arr[mid] === target) {
        console.log(`찾는데 ${count}번 비교했습니다.`);
        return mid;
      }
  
      // 중간값이 찾고자 하는 값보다 작은 경우
      if (arr[mid] < target) {
        left = mid + 1;
      }
      // 중간값이 찾고자 하는 값보다 큰 경우
      else {
        right = mid - 1;
      }
    }
  
    // 찾고자 하는 값이 배열에 없는 경우
    return -1;
  }
  
  // 예시 배열과 타겟 값
  const arr = [2, 4, 6, 8, 10, 12, 14, 16, 18, 20, 22];
  const target = 2;
  
  // 이진 탐색 실행
  const resultIndex = binarySearch(arr, target);
  
  if (resultIndex !== -1) {
    console.log(`찾고자 하는 값 ${target}은(는) 배열의 인덱스 ${resultIndex}에 위치해 있습니다.`);
  } else {
    console.log(`찾고자 하는 값 ${target}은(는) 배열에 존재하지 않습니다.`);
  }
  