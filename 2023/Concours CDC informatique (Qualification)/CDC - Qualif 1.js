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
    const [parent1, parent2] = input
    
    var sortie = ""
    for(let i = 0; i < 3; i++){
        if(parent1[i] === parent2[i]){
            sortie += parent1[i]
        }else{
            if(i === 0) sortie += 'X'
            if(i === 1) sortie += 'Y'
            if(i === 2) sortie += 'Z'
        }
    }
    console.log(sortie)
}