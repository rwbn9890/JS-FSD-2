



const fetchApiData = async (url) =>{

    let resp = await fetch(url)

    let data = await resp.json()

   return data
}

export default fetchApiData
