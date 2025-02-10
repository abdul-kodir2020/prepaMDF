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
    const depart = Number(input[0])
    const nbTour = Number(input[1])
    const lignes = input.slice(2, nbTour + 2).map(el => el.split(' ').map(Number))
    
    console.log(
        lignes.reduce((acc, curr) => {
            acc += curr[1] - curr[0]
            return acc
        }, depart)    
    )
}