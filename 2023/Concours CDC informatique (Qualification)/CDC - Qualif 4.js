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
    const N = parseInt(input[0])
    const lignes = input.slice(1, N + 1).map(el => el.split(' '))
    var i = 0
    
    var bac1 = bac2 = 0
    
    while(i < N){
        const ligne = lignes[i]
        switch(ligne[0]){
            case 'ADD': 
                bac2 += Number(ligne[1])
                i++
                break
            case 'SWAP':
                const tmp = bac1
                bac1 = bac2
                bac2 = tmp
                i++
                break
            case 'TRANSFER':
                bac1 += bac2
                bac2 = 0
                i++
                break
            case 'JUMP':
                if(ligne[1] !== 'error'){
                    i += Number(ligne[1])
                    ligne[1] = 'error'
                }else{
                    i++
                }
                break
        }
    }
    console.log(bac1, bac2)
}