
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
    const [equipe1, equipe2] = input[0].split('-').map(el => parseInt(el))
    
    const points = equipe2 - equipe1

    points < 0 ? console.log(0) : console.log(Math.floor(points / 3) + 1)
}