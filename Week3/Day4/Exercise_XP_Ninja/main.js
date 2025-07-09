function calculateTip() {
    // Get the values from the inputs
    const billAmount = document.getElementById("billAmt").value;
    const serviceQuality = document.getElementById("serviceQual").value;
    const numberOfPeople = document.getElementById("numOfPeople").value;
    
    // Validate the inputs
    if (serviceQuality == 0 || billAmount === "") {
        alert("Please enter bill amount and select service quality");
        return;
    }
    
    // Check if number of people is empty or less than 1
    let people = numberOfPeople;
    if (people === "" || people < 1) {
        people = 1;
        document.getElementById("each").style.display = "none";
    } else {
        document.getElementById("each").style.display = "inline";
    }
    
    // Calculate the tip
    let total = (billAmount * serviceQuality) / people;
    
    // Round to two decimal points
    total = total.toFixed(2);
    
    // Display the tip
    document.getElementById("totalTip").style.display = "block";
    document.getElementById("tip").innerHTML = total;
}