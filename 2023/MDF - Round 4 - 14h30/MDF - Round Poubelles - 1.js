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
    const nbPoubelles = parseInt(input[0])
    const lignes = input.slice(- nbPoubelles).map(el => el.split(' ').map(el => parseInt(el))).filter(el => el[0] >= 20).map(el => el[1])
    
    console.log(Math.max(...lignes))
}