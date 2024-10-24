"use strict";

const usdCurr = 27;
const discount = 0.9;

function convert(curr, amount) {
    return curr * amount;
}

function promotion(result) {
    console.log(result * discount);
}

const res = convert(500, usdCurr);
promotion(res);


