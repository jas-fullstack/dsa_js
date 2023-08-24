//How can you count the number of occurrences of a particular character in a JavaScript String,and what are some different approaches that can be used to achieve this?

let data = "sanjeev";
data = data.split("");
let hash = {}
for(i=0;i<=data.length - 1 ; i++){
		if(hash[data[i]] == undefined){
    		hash[data[i]] = 1 
        }
        else
        {
            hash[data[i]]++
        }
}
console.log(hash.e)