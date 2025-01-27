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
    const nombreDeLigne = parseInt(input[0])
    var liste = input.slice(- nombreDeLigne).map(element => element.split(' '))
    
    const occurences = liste.reduce((acc, curr) => {
        acc[curr[1]] = (acc[curr[1]] || 0) + 1
        return acc
    }, {})
    
    liste.filter(element => occurences[element[1]] === 1).map(element => parseInt(element[0])).sort((a, b) => a - b).forEach(element => {
        console.log(element)
    })
}