// Task 1: Store Inventory

// Creates the array of products.
let products = ["Beanie","Hoodie","Gloves","Sweatpants","Longsleeve"];
// Pushed a new item onto the end of the list.
products.push("Earmuffs"); 
// Removes the last item on the list.
products.pop();
// Prints the list of the current inventory.
console.log("Current Inventory:",products);

// Task 2: Student Scores
// Created an array of student scores.
let scores = [95,78,84,45,62];
// Edits the second score entry.
scores[1] = 75;
// Calculates the average between the scores.
let average = (scores[0] + scores[1] + scores[2] + scores[3] + scores[4])/scores.length;
// Posts the Updated and Average scores to the console.
console.log("Updated Scores:", scores);
console.log("Average Scores:", average);

// Task 3: Employee Records
// Creates the employee ID with all employee information displayed.
let employee = {
    name: "John Smith",
    age: 25,
    department: "Customer Service",
    isActive: true
};
// Modified the department to display "produce" in the console with the specific position name included.
employee.department = "Produce";
employee.position = "Produce Stocker";
// Displays the information in the console.
console.log(employee);

// Task 4: Customer Data
// Created an array of customers.
let customers = [
    {name: "Sydney Sweeney", email: "ssweeney@gmail.com", purchaseAmount: 500},
    {name: "Jayden Daniels", email: "jdaniels@gmail.com", purchaseAmount: 250},
    {name: "Ken Carson", email: "kcarson@gmail.com", purchaseAmount: 450}
];
// Added a new customer to the array.
customers.push({name: "Juice WRLD", email: "wrld@gmail.com", purchaseAmount: 1000});
//Displays the updated array.
console.log("Guest List:", customers);