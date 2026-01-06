Lesson 1: Academic Performance Classification
    
function classifyScore(score) {
  if (score < 0 || score > 10) {
    console.log("Invalid score. Please enter a score between 0 and 10.");
    return;
  }

  if (score >= 9) {
    console.log("Excellent");
  } else if (score >= 8) {
    console.log("Very Good");
  } else if (score >= 6.5) {
    console.log("Good");
  } else if (score >= 5) {
    console.log("Average");
  } else {
    console.log("Weak");
  }
}


Lesson 2: Days in a Month Calculator

function getDaysInMonth(month) {
  switch (month) {
    case 1:
    case 3:
    case 5:
    case 7:
    case 8:
    case 10:
    case 12:
      console.log("31 days");
      break;

    case 4:
    case 6:
    case 9:
    case 11:
      console.log("30 days");
      break;

    case 2:
      console.log("28 days");
      break;

    default:
      console.log("Invalid month. Please enter a number from 1 to 12.");
  }
}


Lesson 3: Even/Odd Check	

const result = n % 2 === 0 ? "Even" : "Odd";


Lesson 4: Movie Ticket Price Calculation	

let age = 10;
const basePrice = 100000;
const ticketPrice = age < 13 ? basePrice * 0.5 : basePrice;

console.log(ticketPrice);


Lesson 5: Temperature Conversion	

function celsiusToFahrenheit(celsius) {
  return celsius * 1.8 + 32;
}

console.log(celsiusToFahrenheit(25));


Lesson 6: Household Electricity Bill Calculation	

function calculateElectricityBill(kWh) {
  let total = 0;

  if (kWh <= 50) {
    total = kWh * 1678;
  } else if (kWh <= 100) {
    total = 50 * 1678 + (kWh - 50) * 1734;
  } else if (kWh <= 200) {
    total = 50 * 1678 + 50 * 1734 + (kWh - 100) * 2014;
  } else {
    total = 50 * 1678 + 50 * 1734 + 100 * 2014 + (kWh - 200) * 2536;
  }

  return total;
}

console.log(calculateElectricityBill(250));

