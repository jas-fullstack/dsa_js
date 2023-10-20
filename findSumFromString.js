let str = "1ab2d4hj6";
let cur;
let sum = 0;
for(i=0;i < str.length;i++)
{    
    cur = str[i];
    if(Number(cur) == String(Number(cur)))
    {
        sum += Number(cur)
    }
}
console.log("sum--->",sum)