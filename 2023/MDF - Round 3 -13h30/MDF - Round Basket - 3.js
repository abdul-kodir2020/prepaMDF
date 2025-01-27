/*******
* Read input from STDIN
* Use: console.log()  to output your result.
* Use: console.error() to output debug information into STDERR
* ***/

var input = [];

readline_object.on("line", (value) => { //Read input values
    input.push(value);
})
//Call ConcurrentPossibleResponse when all inputs are read
readline_object.on("close", ConcurrentPossibleResponse); 


function ConcurrentPossibleResponse(){
    //implement your code here using input array
    const numbers = input[0].split(' ').map(el => parseInt(el))
    
    const possibles = {
        '1' : [7],
        '2' : [6],
        '3' : [9],
        '4' : [],
        '5' : [9, 6],
        '6' : [8, 5],
        '7' : [1],
        '8' : [0, 9, 6],
        '9' : [8, 5, 3],
        '0' : [8]
    }
    
    numbers.forEach((number, index) => {
        const possible = possibles[number]

        if (index === 0) {
            possible.forEach(currentPossible => {
                if(currentPossible + numbers[1] === numbers[2]) console.log(currentPossible + ' ' + numbers[1] + ' ' + numbers[2])
            })
        }else if(index === 1){
            possible.forEach(currentPossible => {
                if(numbers[0] + currentPossible === numbers[2]) console.log(numbers[0] + ' ' + currentPossible + ' ' + numbers[2])
            })
        }else{
            possible.forEach(currentPossible => {
                if(numbers[0] + numbers[1] === currentPossible) console.log(numbers[0] + ' ' + numbers[1] + ' ' + currentPossible)
            })
        }
    })

    console.log('Impossible')
}