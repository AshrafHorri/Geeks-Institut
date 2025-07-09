// Exercise 4: Vacations Costs

function hotelCost() {
    let nights;
    while (true) {
        nights = prompt("How many nights would you like to stay in the hotel?");
        if (nights !== null && !isNaN(nights) && Number(nights) > 0) {
            nights = Number(nights);
            break;
        }
        alert("Please enter a valid number of nights.");
    }
    return nights * 140;
}

function planeRideCost() {
    let destination;
    while (true) {
        destination = prompt("What is your destination?");
        if (destination && isNaN(destination)) {
            destination = destination.trim();
            break;
        }
        alert("Please enter a valid destination.");
    }
    if (destination.toLowerCase() === "london") {
        return 183;
    } else if (destination.toLowerCase() === "paris") {
        return 220;
    } else {
        return 300;
    }
}

function rentalCarCost() {
    let days;
    while (true) {
        days = prompt("How many days would you like to rent the car?");
        if (days !== null && !isNaN(days) && Number(days) > 0) {
            days = Number(days);
            break;
        }
        alert("Please enter a valid number of days.");
    }
    let cost = days * 40;
    if (days > 10) {
        cost *= 0.95; // 5% discount
    }
    return cost;
}

function totalVacationCost() {
    const car = rentalCarCost();
    const hotel = hotelCost();
    const plane = planeRideCost();
    alert(`The car cost: $${car}, the hotel cost: $${hotel}, the plane tickets cost: $${plane}.`);
    return car + hotel + plane;
}

totalVacationCost();



