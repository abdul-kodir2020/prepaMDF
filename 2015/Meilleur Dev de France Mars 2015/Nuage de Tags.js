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
    const nbTags = Number(input[0])
    const lignes = input.slice(1, nbTags + 1)
    
    const save = lignes.reduce((acc, curr) => {
        acc[curr] = (acc[curr] || 0) + 1
        return acc
    }, {})
    
    Object.keys(save)
        .sort((a,b) => save[b] - save[a])
        .slice(0, 5)
        .forEach(el => console.log(el, save[el]))
}