#! /usr/bin/env node
import inquirer from "inquirer";
const currency = {
    USD: 1,
    INR: 83.32,
    AUD: 1.52,
    CAD: 1.36,
    CNY: 7.23,
    EUR: 0.92,
    JPY: 151.86,
    SAR: 3.75,
    AED: 3.67,
    GBP: 0.79,
    PKR: 278.12,
};
let userAnswer = await inquirer.prompt([
    {
        name: "from",
        message: "Please Select FROM Currency",
        type: "list",
        choices: ["USD", "INR", "AUD", "CAD", "CHY", "EUR", "JPY", "SAR", "AED", "GBP", "PKR"],
    },
    {
        name: "to",
        message: "Please Select TO Currency",
        type: "list",
        choices: ["USD", "INR", "AUD", "CAD", "CHY", "EUR", "JPY", "SAR", "AED", "GBP", "PKR"],
    },
    {
        name: "amount",
        message: "Please enter amount you want to convert",
        type: "number",
    }
]);
let fromAmount = currency[userAnswer.from];
let toAmount = currency[userAnswer.to];
let amount = userAnswer.amount;
let baseAmount = amount / fromAmount;
let convertedAmount = baseAmount * toAmount;
console.log(`From Amount = ${fromAmount}`);
console.log(`To Amount = ${toAmount}`);
console.log(`Amount to br Converted = ${amount}`);
console.log(`Converted Amount = ${convertedAmount}`);
