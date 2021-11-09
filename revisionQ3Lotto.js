// 로또 번호 6자리 생성
// 로직 : 숫자 1~45에서 중복하지않는 랜덤 6자리의 로또 숫자 생성
// 배열 생성 > 1~45 사이의 랜덤 숫자 생성 > 생성 된 숫자 확인 > 중복 숫자시 다시 뽑기

const arr = []

while(true) {
    // 1~45 사이의 숫자 생성
    const num = parseInt(Math.random() * 45) + 1
    console.log(num)

    // 생성 된 숫자 확인
    const index = arr.indexOf(num)
    // 중복 코드 확인
    console.log(`NUM: ${num}   INDEX: ${index}`)

    if (index >= 0) { // index 0 1 2 3 4 5 중에서 0보다 크면 다시 위로 올라가서
        continue
    }
    // console.log(`배열의길이는 ${arr.length} 입니다.`)
    const newLength = arr.push(num)
    if (newLength === 6) {
        break
    }
}
console.log(arr)