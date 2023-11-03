const brac = "()";
const stack = []
console.log("brac--->",brac.length)
for(i=0; i < brac.length - 1;i++){
        
    stack.push("(")
    stack.push(")")     
    stack.splice(0,1)
    stack.splice(brac.length-1,1)
    
    
    
}
console.log("--->",stack)