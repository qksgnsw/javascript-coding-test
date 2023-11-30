const object1 = {
    a: 'somestring',
    b: 42,
    c: false,
  };
  
  console.log(Object.keys(object1)); // 키만 출력
  console.log(Object.values(object1));  // 값만 출력
  // 키 값 출력
  for (const [key, value] of Object.entries(object1)) {
    console.log(`${key}: ${value}`);
  }