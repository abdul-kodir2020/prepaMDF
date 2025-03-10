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
    var [TF, TP, TA] = input[0].split(" ").map(Number)
    const nbLivre = Number(input[1])
    const lignes = input.slice(2, 2 + nbLivre).map(el => el.split(" "))
    
    var sortie = true
    
    for(let i = 0; i < nbLivre; i++){
        if(lignes[i][0] === 'F') TF -= Number(lignes[i][1])
            
        if(lignes[i][0] === 'P') TP -= Number(lignes[i][1])
        
        if(lignes[i][0] === 'A') TA -= Number(lignes[i][1])
        
        if(TF < 0 || TP < 0 || TA < 0){
            sortie = false
            break
        }
    }
    
    console.log(sortie ? "oui" : "non")
}