## Objects in javascript
In JavaScript, an object array is a data structure that allows you to store a collection of objects within an array. Each object can represent an entity with various attributes, making it easy to manage and manipulate complex data sets.

Example
Consider an array of objects representing a list of users. Each user object contains properties like id, name, and email.


## Array of user objects
const users = [
  {
    id: 1,
    name: 'John Doe',
    email: 'john.doe@example.com'
  },
  {
    id: 2,
    name: 'Jane Smith',
    email: 'jane.smith@example.com'
  },
  {
    id: 3,
    name: 'Emily Johnson',
    email: 'emily.johnson@example.com'
  }
];

##  Accessing objects in the array
console.log(users[0].name); // Output: John Doe
console.log(users[1].email); // Output: jane.smith@example.com

## Iterating over the array of objects
users.forEach(user => {
  console.log(`User ID: ${user.id}, Name: ${user.name}`);
});

## Advantages
Organized Data: Object arrays allow you to keep related data together, making it easier to understand and manage.
Easy Iteration: You can easily loop through an array of objects to perform operations on each object.
Flexible Structure: Objects can have different properties, providing flexibility in storing various types of data.
Use Cases
Storing a list of user profiles
Managing a collection of products in an inventory
Handling a set of tasks in a to-do list
Object arrays are a powerful feature in JavaScript, enabling you to work with complex data structures efficiently.

