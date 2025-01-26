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