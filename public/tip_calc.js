var bill = prompt("How much is the bill?");
console.log(bill);

var tip_percent = prompt("What is the desired tip percentage?");
console.log(tip_percent);

var tip_percentage_as_decimal = tip_percent / 100;

var tip = (bill * tip_percentage_as_decimal);
console.log(tip);

var total = (+bill + +tip);
console.log("Your total is $" + total)
