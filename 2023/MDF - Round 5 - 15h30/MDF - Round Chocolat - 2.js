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
    var [N, P] = input[0].split(' ').map(el => parseInt(el))
    const lignes = input.slice(-N).map(el => parseInt(el)).sort((a,b) => b - a)
    
    var count = 0
    var isEnd = false
    
    for(let i = 0; i < N; i++){
        P -= lignes[i]
        count++
        if(P <= 0){
            break
        }
        if(i === N - 1) isEnd = true
    }
    isEnd ? console.log('IMPOSSIBLE') : console.log(count)
}