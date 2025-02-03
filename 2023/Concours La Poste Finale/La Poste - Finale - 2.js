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
    const [largeurStatue, hauteurStatue, largeurPiece, hauteurPiece] = input[0].split(" ").map(el => parseInt(el))
    const piece = input.slice(-hauteurPiece).map(el => el.split(''))
    
    var isAvailable = false
    
    for(let i = 0; i < hauteurPiece; i++){
        const ligne = piece[i]
        
        for(let j = 0; j < largeurPiece; j++){
            const colonne = ligne[j]
            
            if(colonne == '.' && i > 0 && i + hauteurStatue < hauteurPiece && j > 0 && j + largeurStatue < largeurPiece){
                
                const extract = piece.slice(i - 1, i + hauteurStatue + 1).map(el => el.slice(j - 1, j + largeurStatue + 1 ))
                isAvailable = extract.flat().every(el => el === '.')
                
                if(isAvailable){
                    for(let a = i; a < i + hauteurStatue; a++){
                        for(let b = j; b < j + largeurStatue; b++){
                            piece[a][b] = 'x'
                        }
                    } 
                    break
                }
            }
            
        }
        if(isAvailable) break
    }
    
    piece.map(el => el.join('')).forEach(el => console.log(el))
}