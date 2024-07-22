
const base_url = "https://dummyjson.com/";
 export async function handleData(endPoint,success,error,startLoading,endLoading){
    const res = await fetch(`${base_url}${endPoint}`);
    startLoading();
    try{    
        if(res.ok){
        const data = await res.json();
            success(data);
        // return data;
        }else{
            throw new Error("Error");
        }
    }catch(e){
        error(e);
    }finally{
        endLoading();
    }

 }
export function showCat(success){
 fetch('https://dummyjson.com/products/categories')
 .then(response => response.json())
 .then(data => success(data))
.catch(error => console.error('Error fetching products:', error));
}
//console.log(data.products[0].images[0])