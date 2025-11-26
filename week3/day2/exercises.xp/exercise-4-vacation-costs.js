// Exercise 4 – vacation costs

function hotelCost(nights) {
    return 140 * nights;
}

function planeRideCost(destination) {
    if (destination === "London") return 183;
    if (destination === "Paris") return 220;
    return 300;
}

function rentalCarCost(days) {
    let cost = 40 * days;
    if (days > 10) cost *= 0.95; // 5% discount
    return cost;
}

function totalVacationCost() {
    const nights = parseInt(prompt("Number of hotel nights?"));
    const dest = prompt("Destination?");
    const days = parseInt(prompt("Number of car rental days?"));
    
    const hotel = hotelCost(nights);
    const plane = planeRideCost(dest);
    const car = rentalCarCost(days);
    
    console.log(`The car cost: $${car}, the hotel cost: $${hotel}, the plane tickets cost: $${plane}`);
    return hotel + plane + car;
}

totalVacationCost();
