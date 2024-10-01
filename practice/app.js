//callback function
function displayer(result) {
    console.log(result);
}

function calculate(a, b) {
    const sum = a + b;
    displayer(sum)
}

calculate(7, 2)