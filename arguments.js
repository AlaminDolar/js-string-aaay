function Addnumbers(num1, num2) {
    let result = 0;
    for (const num of arguments) {
        result = result + num;
    }

    return result;
}
const sum = Addnumbers(100, 200, 100, 12, 20, 30, 10, 10, 500);
console.log(sum);
