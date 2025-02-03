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
    var donnees = input.map(el => parseInt(el))
    const diagonale = Math.max(...donnees)
    donnees = donnees.filter(el => el !== diagonale)
    
    const cos = ( donnees[0]**2 + donnees[1]**2 - diagonale**2 ) / ( 2 * donnees[0] * donnees[1] )
    const angle = Math.acos(cos) * (180 / Math.PI)
    
    angle == 90 ? console.log('OUI') : console.log('NON')
}