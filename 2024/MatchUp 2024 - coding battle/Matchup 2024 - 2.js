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
    var test = []
    
    for(let i = 1; i < input.length; i++){
        const [pays, or, argent, bronze] = input[i].split(' ')
        test.push({
            'pays': pays,
            'or': parseInt(or),
            'argent': parseInt(argent),
            'bronze': parseInt(bronze)
        })
    }
    
    const maxOr = Math.max(...test.map(element => parseInt(element.or)))
    
    test = test.filter(element => element.or >= maxOr)
    
    const maxArgent = Math.max(...test.map(element => parseInt(element.argent)))
    
    test = test.filter(element => element.argent >= maxArgent)
    
    const maxBronze = Math.max(...test.map(element => parseInt(element.bronze)))
    
    test = test.filter(element => element.bronze >= maxBronze)
    
    console.log(test[0]['pays'])
    
}