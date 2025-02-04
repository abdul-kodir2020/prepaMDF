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
    const N = Number(input[0])
    const lignes = input.slice(-N).map(el => el.split(' ').map(Number))
    
    const number = lignes.reduce((acc, curr) => {
        if( (curr[0]**2) + (curr[1]**2) <= 1) acc++
        return acc
    }, 0)
    
    console.log((4 * ( number / N)).toFixed(3))
}