import fetchApiData from "./modules/fetchApi.js"
import { filt} from "./filt.js"

let url1 = 'https://dummyjson.com/products'
let url2 = 'https://randomuser.me/api?results=5'
let url3 = 'https://www.themealdb.com/api/json/v1/1/categories.php'




let prodData = await fetchApiData(url1);
console.log(prodData)

let newProdData = filt(prodData.products, "category", "beauty")
console.log(newProdData)

let userData  = await fetchApiData(url2);
console.log(userData)

let newUserData = filt(userData.results, "gender", "female")
console.log(newUserData)

// let foodData = await fetchApiData()