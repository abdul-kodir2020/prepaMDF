/*******
* Read input from STDIN
* Use: console.log()  to output your result.
* Use: console.error() to output debug information into STDERR
* ***/

var input = [];

readline_object.on("line", (value) => { //Read input values
    input.push(value);
})
//Call ContestResponse when all inputs are read
readline_object.on("close", ContestResponse); 

function ContestResponse(){
    //implement your code here using input array
    const tab = input[0].split('').map(Number)
    
    const min = [...tab].sort((a,b) => a - b)
    const max = [...tab].sort((a,b) => b - a)
    
    if(min[0] === 0){
        for(let i = 1; i < min.length; i++){
            if(min[i] !== 0){
                min[0] = min[i]
                min[i] = 0
                break
            }
        }
    }
    
    console.log(min.join(''))
    console.log(max.join(''))
}