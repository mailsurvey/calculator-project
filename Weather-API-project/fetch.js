//Fetching data to render weather data



const getWeatherData = async()=>{
    //const url = "https://freetestapi.com/api/v1/weathers";
    const url ="https://dummyjson.com/recipes";
    
try{
const response = await fetch(url);
if(response.ok){
    const json= await response.json();
   return json;
    
    
}else{
    throw new Error ("Not able to fetch the url");
}

}catch(e){
console.log(e);
}
}

const renderData = async()=>{
    const data =  await getWeatherData(); 
   // console.log(data);
//     console.log(data?.recipes?.map(({name})=>{
// console.log(name)
//     }));
    
    
    if(!data) return;
    
    data?.recipes?.map(({cuisine, name, rating,tags, ingredients})=>{
        let dataElement = document.querySelector(".data");
//console.log(dataElement.innerHTML);
       //console.log(dataElement.innerHTML+`<div>ratingggggggggg${rating}HIIIIIIIIIIIIIIIIIIIIII`)
 dataElement.innerHTML += `<div>
        <ul>
        <li>Cuisine: ${cuisine}</li>
        <li>Name:${name}</li>
        <li>Rating: ${rating}</li>
        <li>Tags: ${tags}</li>
        <li>Ingredients: ${ingredients}</li>
        </ul></div>`      
    
        

        ///1st+

    })
   

    
}
renderData();

