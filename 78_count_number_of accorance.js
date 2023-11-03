//with regix..
let data = "sanjeeeev";
let regix = /\e/g; // if add + it will show combined result.
let res = data.match(regix);
//console.log("Res---->",res)

//method 2
let data1 = "sanjeeeev";
let count = 0;
for(i=0; i < data1.length;i++){
    if(data1[i] == 'e'){
        count += 1
    }
}
//console.log("count--->",count)

//Method 3
let data2 = 'sanjeev';
let hash = {};
data2.split("").map(data=>{
             if(hash[data] == undefined)
             {
                hash[data] = 1
             }
             else
             {
                hash[data]++
             }
        });
console.log("ans--->",hash);