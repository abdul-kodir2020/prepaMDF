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
    const WORD_CHECK = "ALIMENTATION"
    const N = parseInt(input[0])
    const lignes = input.slice(- N)
    
    for(let i = 0; i < N; i++){
        if(lignes[i].length !== WORD_CHECK.length) continue
        
        for(let j = 0; j < WORD_CHECK.length; j++){
            
            if(lignes[i][j] !== '_' && lignes[i][j] !== WORD_CHECK[j]) break
            if(j === WORD_CHECK.length - 1) console.log(i + 1)
            
        }
    }
}
