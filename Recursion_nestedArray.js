function rec(items) {
    const result = [];
    items.forEach(item => {
        if(Array.isArray(item)){
           result.push(...rec(item))        
        }
        else
        {
            result.push(item)
        }
      
    }); 
    return result;
}
console.log(rec([10,20,[[[30]]]]))