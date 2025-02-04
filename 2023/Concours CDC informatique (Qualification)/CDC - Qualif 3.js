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
    const lignes = input.slice(1, N + 1).map(el => el.split('x').map(Number))
    
    const save = lignes.reduce((acc, curr) => {
        
        const dimension = curr[0] * curr[1] * curr[2]
        acc[dimension] = (acc[dimension] || 0) + 1
        
        return acc
    }, {})
    
    console.log(Object.keys(save).filter(key => save[key] !== 1).length)
}