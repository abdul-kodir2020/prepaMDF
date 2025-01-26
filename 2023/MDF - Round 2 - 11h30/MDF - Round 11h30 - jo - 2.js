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
    const nombreDeSaison = parseInt(input[0])
    var jourJ = parseInt(input[1]) + 1
    const joursSaison = input[2].split(' ').map(jour => parseInt(jour))
    if(nombreDeSaison === 1){
        console.error(nombreDeSaison)
        console.log(1)
    }else{
        var test = 0
        
        
        while(jourJ >= 0){
            
            for(let i = 0; i < nombreDeSaison; i++){
                jourJ -= joursSaison[i]
            
                if(jourJ <= 0){ 
                    test = i + 1
                    break;
                }
            }
        }
        
        
        console.log(test)
    }
}