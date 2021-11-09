
// Q1. 반지름 10, 20의 도넛 모양의 넓이 구하기
// 로직 : 큰 원의 넓이 - 작은 원의 넓이
// 주어진 데이터 : 반지름 2개 10, 20
// 변수 선언 어떻게? || 큰원과 작은원 사이의 갭 구하기

// 변수 선언
const round1 = 10
const round2 = 20

// 넓이 계산
// 거듭제곱 Math 메소드인 Math.pow(x, y)와 Math.PI 사용
const area1 = Math.pow(round1,2) * Math.PI
const area2 = Math.pow(round2,2) * Math.PI

// 갭 계산
let gap = area1 - area2
console.log(gap)

// 문제점 => 음수가 발생한다면?
// 해결1 * -1
// console.log(gap * -1)

// 해결2 if문을 활용한 -1곱하기
// if (gap < 0) {
//     gap *= -1
// }
// console.log(gap)

// 해결3 삼항연산자 활용
gap = gap < 0 ? gap * -1 : gap
console.log(`"이 도형의 넓이는 ${gap} 입니다."`)