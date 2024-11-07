// Question-1 
let num=87654;
let sum=0;
while(num > 0){
    let rem=num%10;  
    sum+=rem;
    num=Math.floor(num/10);
}
console.log(sum);

//Question-2.
let Num=6;
let a=0;
let b=1;
console.log(a);
console.log(b);
for(let i=2;i<Num;i++){
    let c=a+b;
    console.log(c);
      a=b;
      b=c;
    
} 

//Question-3
// const readline=require('readline');
// const r1=readline.Interface({
//     input:process.stdin,
//     output:process.stdout
// })
// r1.question('Enter a number ',(input)=>{
//     const num=parseInt(input);
//     console.log(`Mulitiplication table for ${num}`)
//     for(let i=1;i<=10;i++){
//         console.log(`${num}*${i}=${num*i}`);
//     }
// });

 //Question-4
 const readline=require('readline');
function isPrime(num){
    if(num<=1)
         return false;
        if(num==2)
            return true;
   for(let i=2;i<=Math.sqrt(num);i++){
       if(num%i==0 )return false;
   }
   return true;
}
function printnum(n){
    let num=2;
    let count=0;
    while(count<n){
    if (isPrime(num)){
        console.log(num);
        count++;
    }
        num++;
    }
}
const r2=readline.Interface({
    input:process.stdin,
    output:process.stdout
});
r2.question('Enter a range ',(input)=>{
    const n=parseInt(input);
    if(isNaN(n)||n<=0){
        console.log('Please enter a valid positive number.');
    }
    else{
        printnum(n);
    }
    r2.close();
});

