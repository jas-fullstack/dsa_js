//find the largest element from array.. [10,22,99,81,77]
/*******1St Solution.****-->Sort the element and get 0 index*/
let firstSolution = (arr)=>{
    return arr.sort((a,b) => b-a )[0]
}

/*******2Nd Solution.****-->Create variable and store max value in it*/
let secSolution = (arr) =>{
    let max = arr[0];
    let sec = arr[0];
    for (let i = 0; i < arr.length; i++) {
      if (max < arr[i]) {  
        max = arr[i];
        sec = max;
      }
      if (max <= sec ) {
           sec = arr[i];
      }

    }
    return sec;
  
}

let arr = [10,22,99,81,77]
console.log("result--->",firstSolution(arr),"Time Complexty O(N log N) Space Complexty O(1)");
console.log("result--->",secSolution(arr),"Time Complexty O(N) Space Complexty O(1)");




