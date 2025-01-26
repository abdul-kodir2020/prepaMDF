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
    const save = input[0].split('')
  
    while(save.length > 1){
        const [gauche, droite] = save.slice(0, 2)
     
        if((gauche === 'P' && droite === 'C') || (gauche === 'F' && droite === 'P') || (gauche === 'C' && droite === 'F')){
            save.splice(1,1)
        }else{
            save.shift()
        }
    }
    
    console.log(save[0])
}