// function w/ base #5 as argument -> return new function that take new argument & returns the sum of both numbers 
function makePlusFunction(num) {
    return (num2) => {
        let results = num + num2
        return results
    }
}

const plusFive = makePlusFunction(5)
plusFive(2);

