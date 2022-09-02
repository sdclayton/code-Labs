// Function - Convert hours to minutes
function convertToMinutes(hours) {
    const seconds = hours * 60;
    return hours + 'hours is ' + seconds + " seconds"
}

console.log(convertToMinutes(5));

