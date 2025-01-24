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
    
    var seconds = 0
    
    var position = 0
    
    var ligne = 1
    
    var colonne = position
    console.error(parseInt((input[0].split(' '))[0]))
    
    while(ligne < parseInt((input[0].split(' '))[0])){
        const signes = input[ligne].split('')
        console.error(signes[colonne])
        if( signes[colonne] == 'v'){
            ligne++
            seconds++
        }else if(signes[colonne] == '>'){
            colonne++
            seconds++
        }else if(signes[colonne] == '<'){
            colonne--
            seconds++
        }else if(signes[colonne] == '^'){
            ligne--
            seconds++
        }
    }
    
    console.log(seconds)
}