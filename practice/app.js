//callback function
function displayer(result) {
    console.log(result);
}

function calculate(a, b) {
    const sum = a + b;
    return sum;
}

const result = calculate(10, 5);
displayer(result)