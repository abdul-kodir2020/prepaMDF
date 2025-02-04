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
    const sashaCartes = input[1].split(' ').map(Number)
    const myCartes = input[2].split(' ').map(Number)
    
    while(myCartes.length && sashaCartes.length){
        
        const myLastCard = myCartes.pop()
        const sashaLastCard = sashaCartes.pop()
        
        if(myLastCard > sashaLastCard) myCartes.unshift( myLastCard )
        if(myLastCard < sashaLastCard) sashaCartes.unshift( sashaLastCard )

    }
    
    if(!myCartes.length && !sashaCartes.length){
        console.log('N')
    }else if (myCartes.length){
        console.log('G')
    }else{
        console.log('P')
    }

}