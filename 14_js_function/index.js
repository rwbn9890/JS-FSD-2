


// function data1(){
//     return "this is data";
// }
// data1();


// let data2  = function(){
//     return "this is data";
// }
// data2();




// // explicite

// let data = ()=> {
//     return  "this is data"
// }

// console.log(data())



// // implicite


// let el = 200;
// let data3 = (el)=>  200*200

// console.log(data3())


// function take(name){
//     return `this is ${name} wanna take selfy`;
    
//  }


// let bigObj = {
//      username : "lonardo messi",
//      email : "leo@gmail.com",
//      data : take(this.username)
// }
// console.log(bigObj.data())





// let prod = {
//     name : "Iphone",
//     pic: "https://www.imagineonline.store/cdn/shop/files/iPhone_15_Blue_PDP_Image_Position-1__en-IN.jpg?v=1694605184",
//     price :120000,
//     rating : 4.2,
//     emi : () => `<h4>phone: ${this.name}</h4>
//                     <b>rpice:$ ${this.price} </b>`
// }

// document.write(prod.emi())


let arr = [1, 2, 3, 4, 5];


// for(let i=0; i<arr.length; i++){
//     print(arr[i])
// }


const print = (ele) => {
    console.log(ele)
}

arr.forEach(print)

arr.forEach((ele)=> console.log(ele*ele))




