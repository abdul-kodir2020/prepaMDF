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
    const N = parseInt(input[0])
    const sections = input[1].split(' ').map(Number)
    
    for(let i = 0; i < N - 1; i++){
        if((sections[i] - sections[i + 1]) * 60 > 120) console.log('POLLUTION')
    }
    
    console.log('OK')
}