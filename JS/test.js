const logNumber = (number) => {
    for (let i = 0; i <= number; i++) {
        // console.log(i);c
    }
}

const findVowels = (aString) => {

    let arr = aString.split('');
    console.log(arr);
    let arrVowels = ['e', 'u', 'o', 'a', 'i'];
    let count = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arrVowels.indexOf(arr[i]) != -1) count++
    }
    // console.log(count)
}

findVowels('eusdvsde dvcsdod');

//learn map method: return a  branch new array
let arrNumber = [8, 6, 5, 2, 23, 6, 5];
let newMapArr = arrNumber.map((number, i) => {
    return number + 1;
})
console.log(newMapArr);