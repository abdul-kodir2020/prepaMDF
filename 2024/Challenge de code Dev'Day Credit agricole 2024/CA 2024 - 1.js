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
    const n = parseInt(input[0])
    const lignes = input.slice(-n).map(element => element.split(' '))
    
    const scores = lignes.reduce((acc, curr) => {
        value = curr.slice(-3)
        acc[curr[0]] = value.map(element => parseFloat(element)).reduce((acc, curr) => acc + curr) / 3
        return acc
    }, {})
    
    const max = Math.max(...Object.values(scores))
    
    console.log(Object.keys(scores).find(key => scores[key] === max))
}