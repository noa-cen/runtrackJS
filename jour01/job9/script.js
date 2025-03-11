let numbers = [5, 4, 7, 54, 1];
let order = "desc";

function tri(order) {
    if (order === "asc") {
        numbers.sort(function(a, b) {
            return a - b;
        });
    }
    else {
        numbers.sort(function(a, b) {
            return b - a;
        });
    }
}
tri(order);
console.log(numbers);