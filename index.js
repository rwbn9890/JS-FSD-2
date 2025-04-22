

// function fun(n = 1){
//     return n*n
// }


// console.log(fun(10))
// console.log(fun())




// function call(name = "guest", message = "hi", money = 0){
//     console.log(message + ", " + name + " your left " + money + " $.")
// }

// call("hitisha", "welcome", 100)
// call("Vibhuti", "good morning ")
// call()





// let arr = [1, 2, 3, 4]

// let newArr = arr.splice(1, 2)

// console.log(arr)



// let arr = ["a", "b", "c", "d"]

// // arr[0]= "z"

// // arr.splice(0, 4, "x", 'y', 'z')

// arr.splice(-2, 2)

// console.log(arr)





// let arr = [ 1, 2, 3, 4]

// console.log(arr.slice(-2, 0))



// let arr = [[1, 2], [3, 4], [5, 6], [7, 8], 9]   /// let arr = [[1, 2, 3], [4, 5, 6],[7, 8, 9]]


// let newArr = arr.flat()

// let chunk = []

// for(let i=0; i<newArr.length; i=i+3) 
// {
//     let sub = []
//    for(let j=i; j<i+3; j++) 
//    {
//      sub.push(newArr[j])
//     }
//     chunk.push(sub)
// }

// console.log(chunk)



//[ 1, 2, 3, 4, 5, 6, 7, 8, 9 ]
//[4, 5, 6, 7, 8, 9 ]
//[7, 8, 9 ]

// for(let i=0; i<newArr.length; i++) // i=0
// {
//         chunk.push(newArr.splice(0, 3)) // 1, 2, 3
// }
// //[[1 2 3], [4, 5, 6,]]
// console.log(chunk)





// let arr = [ 1, 2, 3]
// let arr2 = [ 4, 5, 6]
// let arr3 = [ 7, 8, 9 ]

// // let big = arr.concat(arr2, arr3)

// let big = [...arr, ...arr2, ...arr3]



// console.log(big)


// function rest(...name){

//     console.log(name)

//     let [...re] = name;

//     console.log(...re)
// }

// let arr = []
// rest("hitisha", "vibhuti", "aara", "vaishali")


let obj = {
    name: "hitisha",
    age : 22, 
    marks : 80,
    city : "PUne",
    country : "India",
    pin : 1234,
    nums : [1, 2, 3, 4]
}


for(let key in obj)
{
    console.log( key + " : " +obj[key])
}

let name = "lorem2"
for(let val of name)
{
    console.log(val)
}
