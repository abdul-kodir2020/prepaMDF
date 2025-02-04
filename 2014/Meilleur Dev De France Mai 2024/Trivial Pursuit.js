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
    var forward = input.map(Number).reduce((acc, curr) => acc + curr)
    forward = forward - ( parseInt(forward / 6 ) * 6 )
    
    const parcours = [
            'violet',
            'jaune',
            'orange',
            'vert',
            'rose',
            'bleu'
        ]
        
    console.log(parcours[forward])
}