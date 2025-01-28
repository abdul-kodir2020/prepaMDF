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
    var lignes = input.slice(-N).map(el => el.split(' '))
    
    var count = 0
    while(lignes.length){
        count++
        const commun = lignes.reduce((acc, curr) => {
            curr.forEach(el => {
                acc[el] = (acc[el] || 0) + 1
            })
            return acc
        }, {})
        
        const max = Object.keys(commun).find(el => commun[el] === Math.max(...Object.values(commun)))
        lignes = lignes.filter(el => !el.includes(max))
    }
    
    console.log(count)
}