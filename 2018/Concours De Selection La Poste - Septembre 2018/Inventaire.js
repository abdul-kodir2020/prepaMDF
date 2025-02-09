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
    const stock = input.slice(1, N + 1).map(el => el.split(' ')).reduce((acc, curr) => {
        acc[curr[0]] = (acc[curr[0]] ? acc[curr[0]] : 0) + Number(curr[1])
        return acc
    }, {})
    
    const sortie = Object.keys(stock).filter(el => stock[el] === Math.max(...Object.values(stock)))
    
    console.log(sortie.join(' '))
}