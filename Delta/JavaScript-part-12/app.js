let url='https://catfact.ninja/fact'
// fetch(url)
// .then((response)=>{
//     console.log(response);
//     return response.json();
// })
// .then((data)=>{
//     console.log('Data is :');
//     console.log(data.fact);
//     return fetch(url);
// })
// .then((res)=>{
//     console.log('again fetching...');
//     return res.json();
// })
// .then((data)=>{
//     console.log("Data 2 is:");
//     console.log(data.fact);
// })
// .catch((err)=>{
//     console.log(err);
// })

// --- (using fetch with async wait)
// async function getFacts(){
//     let response = await fetch(url);
//     let data = await response.json();
//     console.log('fact is 1:');
//     console.log(data.fact);
//     console.log('fact is 2:');

//     let response2= await fetch(url);
//     let data2=await response2.json();
//     console.log(data2.fact);

// }
// getFacts();
let url2 ='https://dog.ceo/api/breeds/image/random';
let btn = document.querySelector('button').addEventListener('click',async ()=>{
    console.log('button was clicked.');
    let fact=await getData();
    let output=document.getElementById('fact');
    output.innerText=fact;
})



//-----(using axios)
async function getData(){
    try{
    let response = await axios.get(url);
    
    return response.data.fact;

    }catch(err){
        console.log(err);
    }
    
}
