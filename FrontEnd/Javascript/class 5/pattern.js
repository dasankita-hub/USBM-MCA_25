//Question-1

for(let i=1;i<=5;i++){
    let pattern=" ";
    for(let j=1;j<=i;j++){
      pattern += "*";
    }
    console.log(pattern)
}


//Question-2
for(let i=5;i>=1;i--){
    let pattern=" ";
    for(let j=1;j<=i;j++){
      pattern += "*";
    }
    console.log(pattern)
}


//Question-3
let r=5;
for(let i=1;i<=r;i++){
    let pattern=" ";
    for(let j=1;j<=r-i;j++){
        pattern+=" ";
    }
    for(let j=i;j>=1;j--){
      pattern += "*";
    }

    for(let j=2;j<=i;j++){
        pattern += "*";
      }
      console.log(pattern);
}


//Question-4
let n1=5;
for(let i=1;i<=n1;i++){
    let pattern=" ";
    for(let j=1;j<=n1-i;j++){
        pattern+=" ";
    }
    for(let j=i;j>=1;j--){
      pattern += "*";
    }

    for(let j=2;j<=i;j++){
        pattern += "*";
      }
      console.log(pattern);
}
for(let i=n1-1;i>=1;i--){
    let pattern=" ";
    for(let j=1;j<=n1-i;j++){
        pattern+=" ";
    }
    for(let j=i;j>=1;j--){
      pattern += "*";
    }
    for(let j=2;j<=i;j++){
        pattern += "*";
      }
      console.log(pattern);
}

 //Question-5
 
 let n = 5;
for (let i = 1; i <= n; i++) {
    let pattern = "";
    for (let j = 1; j <= n; j++) {
        if (i == 1 || i == n || j == 1|| j == n) {
            pattern += "*";
        } else {
            pattern += " ";
        }
    }
    console.log(pattern);
}


//Question-6 : Floyd's Triangle
let row=5;
let num=1;

for(let i=1;i<=5;i++){
        let pattern=" ";
        for(let j=1;j<=i;j++){
          pattern += num+" ";
          num++;
        }
        console.log(pattern)
    }