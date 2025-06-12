const readline = require("readline");

// Set up rfor theeadline interface
const rl = readline.createInterface({
  input: process.stdin,   // it displays the code written in the vs code 
  output: process.stdout  // it displays the message in the vs code in the terminal 
});

// Prompt user for amount
rl.question("Unatuma Ngapi? (KES): ", function(input) {
  const amountToSend = Number(input);

  // Validate input
  if (isNaN(amountToSend) || amountToSend <= 0) {
    console.log("Tafadhali weka kiasi halali cha kutuma.");
    rl.close();
    return;
  }

  estimateTransactionFee(amountToSend);
  rl.close();
});

// to calculate fee
function estimateTransactionFee(amountToSend) {
  const percentageFee = amountToSend * 0.015;

  // Apply rules
  const transactionFee = Math.min(Math.max(percentageFee, 10), 70);
  const totalDebited = amountToSend + transactionFee;

  // result
  console.log(`\nSending the money KES ${amountToSend}:`);
  console.log(`the transaction fee KES ${transactionFee}`);
  console.log(`the total amount that was debited : KES ${totalDebited}`);
  console.log("\nSend you money safely!");
}