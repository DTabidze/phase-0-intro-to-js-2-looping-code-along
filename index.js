// Code your solutions in this file
//const gifts = ["teddy bear", "drone", "doll"];

function writeCards(nameArray, eventName) {
    let result = [...nameArray];
    for (let i = 0; i < nameArray.length; i++) {
        result[i] = `Thank you, ${nameArray[i]}, for the wonderful ${eventName} gift!`
    }
    return result;
}

console.log(writeCards(["Charlie", "Samip", "Ali"], "birthday"));

function countDown(number) {
    let counter = number;
    while (counter >= 0) {
        console.log(counter);
        counter--;
    }
}

countDown(10);