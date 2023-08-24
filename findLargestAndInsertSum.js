//find the largest value and insert element sum at place of value..
let arr = [7,8,6,5,2,10,5];
let largest = arr[0];
let itemOne = 0
let itemTwo = 0
for (let i = 0; i < arr.length; i++) {
    if(arr[i] > largest){
        largest = arr[i]
    }
}

for (let i = 0; i < arr.length -1 ; i++) {

    for (let j = i + 1; j < arr.length; j++) {
        if (arr[i] + arr[j] == largest) {
           itemOne = arr[i]
           itemTwo = arr[j]
        }
    }  
}

arr.splice(arr.indexOf(largest),1,itemOne);
arr.splice(arr.indexOf(itemOne),0,itemTwo);

console.log(arr)
