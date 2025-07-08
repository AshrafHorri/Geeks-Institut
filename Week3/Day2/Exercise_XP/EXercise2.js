const colors = ["Blue", "Green", "Red", "Yellow", "Purple"];

for (let i = 0; i < colors.length; i++) {
    console.log(`My #${i + 1} choice is ${colors[i]}`);
}

const suffixes = ["st", "nd", "rd", "th", "th"]; // For 1st, 2nd, 3rd, 4th, 5th

for (let i = 0; i < colors.length; i++) {
    let suffix;
    if (i + 1 >= 11 && i + 1 <= 13) {
        suffix = "th";
    } else {
        const lastDigit = (i + 1) % 10;
        switch (lastDigit) {
            case 1:
                suffix = "st";
                break;
            case 2:
                suffix = "nd";
                break;
            case 3:
                suffix = "rd";
                break;
            default:
                suffix = "th";
        }
    }
    console.log(`My ${i + 1}${suffix} choice is ${colors[i]}`);
}