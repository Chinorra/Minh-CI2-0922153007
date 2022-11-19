// Prints help message to the console
// Returns a string


function allLongestStrings(inputArray) {
    
    let inputArrayLen = inputArray.length
    let longestString = inputArray[0]
    let answer = []
    
    for (i = 0; i < inputArrayLen; i++) {
        if (inputArray[i].length >= longestString.length) {
         longestString = inputArray[i]
        }
    }
  
    answer.push(longestString)
   console.log(answer)

}

allLongestStrings(['BINH','HUNG','PHUOC','CAO','KHANH'])



//////////////////////////////////////



function alternatingSums(a) {
    let aLen = a.length
    let sum1 = 0
    let sum2 = 0
    let answer = []

    for (i = 0; i < aLen; i++) {
        if ( i % 2 == 0) {
            sum1 += a[i]
        } else if ( i % 2 != 0) {
            sum2 += a[i]
        }
    }

    answer.push(sum1)
    answer.push(sum2)
   console.log(answer)
   return answer
}


alternatingSums( [60, 40, 55, 75, 64])
