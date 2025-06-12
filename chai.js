const readline = require("readline");

// set up interface
const rl = readline.createInterface({
  input: process.stdin, // it listens to the code that you have inserted in the vs code
  output: process.stdout // it displays the message in the vs code in the terminal 
});

// Ask user how many cups do they need to be made
rl.question("Karibu! How many cups of Chai Bora would you like to make? ", function(input) {
  const numberOfCups = Number(input);

 // input
  if (isNaN(numberOfCups) || numberOfCups <= 0) {
    console.log("Please enter a valid number of cups.");
    rl.close();
    return;
  }

  // Ingredient amounts per 1 cup
  const waterPerCup = 200; // ml
  const milkPerCup = 50; // ml
  const teaLeavesPerCup = 1; // tablespoon
  const sugarPerCup = 2; // teaspoons

  // calculate total cups 
  const totalWater = numberOfCups * waterPerCup;
  const totalMilk = numberOfCups * milkPerCup;
  const totalTeaLeaves = numberOfCups * teaLeavesPerCup;
  const totalSugar = numberOfCups * sugarPerCup;

  // output the results 
  console.log(`\nTo make ${numberOfCups} cups of Kenyan Chai, you will need:`);
  console.log(`Water: ${totalWater} ml`);
  console.log(`Milk: ${totalMilk} ml`);
  console.log(`Tea Leaves: ${totalTeaLeaves} tablespoons`);
  console.log(`Sugar : ${totalSugar} teaspoons`);
  console.log("\nEnjoy your Chai Bora!");

  rl.close(); // it closes the code 
  // meaning no other code can be accepted or after using rl 
});
