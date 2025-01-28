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
    var [n, k] = input[0].split(' ').map(el => parseInt(el))
    const pieces = input[1].split(' ').map(el => parseInt(el))
    
    const accessibles = {}
    
    pieces.forEach((piece, index) => {
        accessibles[index + 1] = piece
    })
    
   
    if(k > n && k % 2 !== 0){
        k = k - (parseInt(k / n) * n)    
    }
    
    var piece = 1
    while(k > 0){
        const acce = accessibles[piece]
        piece = acce
        k--
    }
    
    console.log(piece)
}
