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
    const [n, m, e] = input[0].split(' ').map(el => parseInt(el))
    
    const lignes = input.slice(-m).map(element => element.split(' ').map(el => parseInt(el)))
    
    var current = e 
    
    var response = 'NO'
    
    for(let i = 0; i < m; i++){
        const ligne = lignes[i]
        
        if(current >= ligne[0] && current <= ligne[1]) current = ligne[1]
        
        if(current >= n) response = 'YES'
    }
    
    console.log(response)
}