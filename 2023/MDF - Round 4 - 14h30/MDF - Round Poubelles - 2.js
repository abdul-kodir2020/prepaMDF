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
    const capacite = parseInt(input[0])
    const [abricot, banane, carotte] = input[1].split(' ').map(el => parseInt(el))
    
    const a = abricot
    const b = capacite - a
    const c = capacite - b
    const d = capacite - c
    
    console.log([a, b, c, d].join(' '))
}
