const fetchDataBtn=document.querySelector("#fetchdata");
const result1 =document.querySelector("#result1");
const result2 =document.querySelector("#result2");
async function getData(){
    result1.innerText="Loading....";
    result2.innerText="Loading....";
    try{
        //Fetch of data code
        const res1=await fetch("https://pokeapi.co/api/v2/pokemon/");
        const data1=await res1.json();
        console.log(data1);
        result1.innerText=JSON.stringify(data1);
        console.log(result1.innerText);
        const res2=await fetch("https://pokeapi.co/api/v2/ability/9/");
        const data2=await res2.json();
        console.log(data2);
        result2.innerText=JSON.stringify(data2);
        console.log(result2.innerText);
    }
    catch(error){
        result1.innerText="Error";
        result2.innerText="Error";
    }
}
fetchDataBtn.addEventListener("click",getData);

