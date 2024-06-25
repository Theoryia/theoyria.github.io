

let arr = [];
function toArray(text){
    
    for (const letter of text) {
        console.log(letter)
        arr.push(letter);

    }
    console.log(`array: ${arr}`)
    return;
}