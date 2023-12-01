// Scenario 1
// Function to simulate buying groceries
function buyGroceries(item: string, quantity: number): number {
    let totalPrice = 0;

    // Check if the customer wants fruits or vegetables
    if (item.toLowerCase() === 'fruits') {
        // Display available fruits and their prices
        const fruitPrices: { [key: string]: number } = {
            apple: 1.5,
            banana: 0.8,
            orange: 1.2,
        };

        // Calculate total price for fruits
        if (fruitPrices[item.toLowerCase()]) {
            totalPrice = fruitPrices[item.toLowerCase()] * quantity;
            console.log(`You have purchased ${quantity} ${item}(s) for $${totalPrice.toFixed(2)}.`);
        } else {
            console.log(`Sorry, ${item} is not available.`);
        }
    } else if (item.toLowerCase() === 'vegetables') {
        // Display available vegetables and their prices
        const veggiePrices: { [key: string]: number } = {
            tomato: 2,
            potato: 1.5,
            cucumber: 1,
        };

        // Calculate total price for vegetables
        if (veggiePrices[item.toLowerCase()]) {
            totalPrice = veggiePrices[item.toLowerCase()] * quantity;
            console.log(`You have purchased ${quantity} ${item}(s) for $${totalPrice.toFixed(2)}.`);
        } else {
            console.log(`Sorry, ${item} is not available.`);
        }
    } else {
        console.log(`We don't sell ${item}.`);
    }

    return totalPrice;
}

// Simulate buying fruits
const fruitsTotal = buyGroceries('Apple', 3); // Change the item and quantity as needed

// Simulate buying vegetables
const veggiesTotal = buyGroceries('Tomato', 2); // Change the item and quantity as needed

// Display total bill
const totalBill = fruitsTotal + veggiesTotal;
console.log(`Your total bill is $${totalBill.toFixed(2)}.`);
// Scenario 2
// Function to calculate discounted total
function applyDiscount(totalBill: number): number {
    let discountedTotal = totalBill;

    // Apply discount based on total bill amount
    if (totalBill > 50) {
        // Apply a 10% discount
        const discount = 0.1 * totalBill;
        discountedTotal = totalBill - discount;
        console.log(`Congratulations! You've earned a 10% discount. Your discounted total is $${discountedTotal.toFixed(2)}.`);
    } else {
        console.log(`No discount applied. Your total bill is $${totalBill.toFixed(2)}.`);
    }

    return discountedTotal;
}

// Simulate buying fruits
const fruits_Total = buyGroceries('Apple', 3); // Change the item and quantity as needed

// Simulate buying vegetables
const veggies_Total = buyGroceries('Tomato', 2); // Change the item and quantity as needed

// Calculate total bill
const total_Bill = fruits_Total + veggies_Total;

// Apply discount if applicable
const discountedTotal = applyDiscount(total_Bill);
// Scenario3
