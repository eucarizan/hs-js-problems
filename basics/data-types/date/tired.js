let milli = (20 * 24 * 60 * 60 * 1000);
let date = new Date(milli);

function numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
};

console.log("milli " + numberWithCommas(milli));
console.log(date);
