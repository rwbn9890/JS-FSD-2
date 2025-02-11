
// function main(n){
//     console.log("again");

//   return submain(n);
// }


// function submain(n){
//     return "submain gain " + n
// }

// let num = 20;
// let fun =  main(num);

// console.log(fun)



// function rec(n){

// if(n<1)
// {
//     return 1;
// }
// console.log(n)

//     return rec(n-1)
// }


// function rec(n){

// if(n<1)
// {
//     return 1;
// }
// console.log(n)

//     return rec(n-1)
// }


//  let rc = rec(4)

//  console.log(rc)



// lexical scope

// function outer()
// {
//     let name = "fsd"

//     function inner(){
//         console.log(name)
  
//     }

//    return inner(name);
// }   



// outer();


let one = document.getElementById("one").onclick = oning
let two = document.getElementById("two").onclick = twoing
let three = document.getElementById("three")
let four = document.getElementById("four")
let plus = document.getElementById("plus").onclick = plusing

let display = document.getElementById("display")
let equal = document.getElementById("equal").onclick = equaling

let erase = document.getElementById("erase").onclick = function(){
    display.innerHTML = ''
}



  function oning(){
    display.innerHTML += 1
}


function twoing(){
    display.innerHTML += 2
}

let first;
function plusing(){
     first = display.textContent;
     display.innerHTML = ""

}

function equaling(){
  let second = display.textContent;


  display.innerHTML = Number(first)+Number(second);
}







// let one = document.getElementById("one").onclick = one()
// let one = document.getElementById("one").onclick = one()
// let one = document.getElementById("one").onclick = one()
// let one = document.getElementById("one").onclick = one()
// let one = document.getElementById("one").onclick = one()
// let one = document.getElementById("one").onclick = one()
// let one = document.getElementById("one").onclick = one()
// let one = document.getElementById("one").onclick = one()
// let one = document.getElementById("one").onclick = one()
// let one = document.getElementById("one").onclick = one()
// let one = document.getElementById("one").onclick = one()
// let one = document.getElementById("one").onclick = one()















































