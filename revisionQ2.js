// Q2. 철근 1ft 당 가격은 $3.5 || 1ft 는 30.48cm || 창문의 높이 300cm * 200cm
// 로직 : 가격을 창문의 높이만큼의 철근 가격을 구하시오.
// 주어진 데이타 : 철근 1ft당 가격 $3.5 & 창문의 높이 300cm * 200cm

// 변수 선언
const perFeet = 3.5
const width = 300
const height = 200

const totalLength = (width * 2) + (height * 2)
const totalFeet = totalLength / 30.48
console.log(totalFeet)

// const totalPrice = totalFeet * perFeet
// console.log(totalPrice)

// console.log(`철근의 총 가격은 ${totalPrice}달러 입니다.`)
// 참고사항 반올림 / 올림 / 내림
// Math.round() -> 반올림
// Math.ceil() -> 올림
// Math.floor() -> 내림
const totalPrice = Math.ceil(totalFeet * perFeet)
console.log(`철근의 총 가격은 ${totalPrice} 달러 입니다.`)