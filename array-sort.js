const numbers = [7, 6, 3, 2, 1, 5, 6, 9];
const sortedNumbers = numbers.sort();
// console.log(sortedNumbers);


const friends = ['shishir', 'akash', 'oli', 'thuin', 'sharon', 'choion', 'dolar'];
const shortedFriends = friends.sort();
// console.log(shortedFriends);
const reverseFriends = friends.reverse();
// console.log(reverseFriends);

// Number sorting fun
const bigNumbers = [40, 44, 60, 80, 2, 30, 443, 300, 30]
const shortedBigNumbers = bigNumbers.sort(function (a, b) {
    return a - b;
});
console.log(shortedBigNumbers);

