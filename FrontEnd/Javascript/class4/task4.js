// 1. Task: Generate a random number between 1 and 100.
let randomNumber = Math.floor(Math.random() * 100) + 1;
    console.log(randomNumber);

// 2. Task: Round the number 6.75 down to the nearest integer.
   let num1=6.75;
   console.log(Math.floor(num1));

// 3. Task: Round the number 9.12 up to the nearest integer.
let num=9.12;
console.log(Math.ceil(num));

// 4. Task: Generate a random number between 5 and 27 (inclusive).
let start = 5;
let final = 27;
console.log(Math.floor(Math.random() * (final-start + 1) + start));

// 5. Task: Add 5 days to the current date.
let currentDate = new Date();
let newDate = new Date(currentDate);
newDate.setDate(currentDate.getDate() + 5);
console.log(newDate);
     
// 6. Task: Get the number of milliseconds between January 1, 2023, and today.
  let today=new Date();
  let startDay=new Date('2023-01-01');
  let millisecondsDiff=today-startDay;
  console.log(millisecondsDiff);

// 7. Task: Get the current hour.
 let date=new Date();
 let current_hr=date.getHours();
 console.log(current_hr);
// 8. Task: Create a date for January 1, 2025.
     let new_date=new Date('2025-01-01'); // as month is zero based  in js.
     console.log(new_date);

// 9. Task: Get the current day of the week (0 for Sunday, 6 for Saturday).
        let day=new Date();
        console.log(day.getDay());
// 10. Task: Get the current month (0-11).
     console.log(new Date().getMonth());

//  11. Task: What is the difference between getDate() and getDay()?
// getDate():- It will Return the day of the month (1-31) for a specific date.
//    getDay():-It will Returns the day of the week (0-6) for a specific date.