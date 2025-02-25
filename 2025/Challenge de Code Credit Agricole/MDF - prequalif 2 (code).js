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
    const prefs = input[0].split(' ').map(Number)
    const nb = Number(input[1])
    const caracs = input.slice(2, 2 + nb).map(el => el.split(' ').map(Number))
    
    var max = 0
    var index = 0
    
    caracs.forEach((lignes, i) =>{
        var somme = 0
        lignes.forEach((num, j)=>{
            somme += Math.pow( prefs[j] - num ,2)
        })
        
        if(somme < max || i === 0){
            max = somme
            index = i
        }
    })
    
    console.log(index)
}