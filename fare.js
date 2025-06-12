const readline = require("readline");

// Create interface for input
const rl = readline.createInterface({
  input: process.stdin,  // it listens to the code that you have inserted in the vs code
  output: process.stdout // it displays the message in the vs code in the terminal 
});

// Ask user for distance
rl.question("Unafika wapi? Hiyo ni km ngapi?: ", function(input) {
  const distanceInKm = Number(input);

  // Validate user input
  if (isNaN(distanceInKm) || distanceInKm < 0) {
    console.log("Weka nambari sahihi ya kilomita.");
    rl.close();
    return;
  }

  calculateBodaFare(distanceInKm);
  rl.close();
});

// Fare calculation 
function calculateBodaFare(distanceInKm) {
  const baseFare = 50;
  const perKmCharge = 15;
  const distanceFare = distanceInKm * perKmCharge;
  const totalFare = baseFare + distanceFare;

  console.log(`\nDistance ${distanceInKm} km:`);
  console.log(`Starting the journey: KES ${baseFare}`);
  console.log(`Kwa ${distanceInKm} km: KES ${distanceFare}`);
  console.log(`Total Amount: KES ${totalFare}`);
  console.log("\nTuwache story, panda boda!");
}