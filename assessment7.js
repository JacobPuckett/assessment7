let arrayOne = [1, 3, 5, 6, -3]
let arrayTwo = [1, 2, 3, 4, 5, 6]

const addToZero = arr => {
    for(let i = 0; i < arr.length; i ++){
        for(let j = i + 1; j < arr.length; j ++){
            let iValue = arr[i]
            let jValue = arr[j]
            if(iValue + jValue === 0){
                return true
            }

        }
    }
    return false
}

console.log(addToZero(arrayOne))
console.log(addToZero(arrayTwo))

// has a run of constant time so O(1) I think

function hasUniqueCharaters(word) {
    let uniqueCharaters = new Set([])
    for (let i = 0; i < word.length; i++){
        uniqueCharaters.add(word[i])
    }
    return uniqueCharaters.size === word.length
}
console.log(hasUniqueCharaters("monday"))
console.log(hasUniqueCharaters("moonday"))

//has a linear run time O(n)

function pangrams(num) {
    let alphabet = "abcdefghijklmnopqrstuvwxyz"
    let lowercase = num.toLowerCase()
    for(let i = 0; i < alphabet.length; i++){
     if(lowercase.indexOf(alphabet[i]) === -1){
       return "not pangram"
     }
    }
   return "pangram"
 }

 console.log(pangrams("The quick brown fox jumps over the lazy dog!"))
 console.log(pangrams('I like cats, but not mice'))

 //has a linear run time O(n)

const findLongestWord = (arr) => {
    let large = 0
    for(let i = 0; i < arr.length; i++){
        if(arr[i].length > large){
            large = arr[i].length
        }
    }
    return large
}

console.log(findLongestWord(['hi', 'hello']))


//has a linear run time O(n)