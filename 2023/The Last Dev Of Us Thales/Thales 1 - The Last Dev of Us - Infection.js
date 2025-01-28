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
    const lignes = input.slice(- N).map(el => el.split(' ').map(el => parseInt(el)))
    
    const sortie = lignes.reduce((acc, curr) => {
        if(Math.sqrt(Math.pow(curr[0], 2) + Math.pow(curr[1], 2)) < 100) acc += 1
        return acc
    }, 0)
    
    console.log(sortie)
}