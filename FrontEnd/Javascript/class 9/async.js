// Async Operations
// console.log("Start");
// console.log("Middle");
// console.log("End");
// console.log("start");
//  setTimeout(() => {
//  console.log("Midle"); 
//  }, 2000);
//  console.log("End");
//Fetch()
const url="https://jsonplaceholder.typicode.com/users";
fetch(url)
.then((res)=>res.json())
.then((res)=>console.log(res))
.catch((error)=>console.log(err));


async function fetchdata(){
    try{
       const response=await fetch(url);
       const data=await response.json();
       console.log(data);
    }catch(err){
        console.log(err);
    }
    };;
    fetchdata();



   