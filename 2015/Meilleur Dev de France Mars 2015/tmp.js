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
    const N = Number(input[0])
    const pays = input[1].split(';')
    const lignes = input.slice(2, N + 2).reduce((acc, curr) => {
        const [nom, prenom, societe, telephone, pays] = curr.split(';')
        acc.push({nom, prenom, societe, telephone, pays})
        return acc
    }, [])
    
    console.error(lignes)
    
    const isValid = (ligne) => {
        
        
        return true
    }
}