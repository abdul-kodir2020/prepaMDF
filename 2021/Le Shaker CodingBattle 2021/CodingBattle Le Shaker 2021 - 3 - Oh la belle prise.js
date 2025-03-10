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
    var [H, L] = input[0].split(" ").map(Number)
    const lignes = input.slice(1, 1 + H).map(el => el.split(''))
    
    var max = 0
    var sortie = "1 1"
    
    lignes.forEach((ligne, i)=>{
        ligne.forEach((_, j)=>{
            if(i < H - 2 && j < L - 2){
                const photo = lignes.slice(i, i + 3).map(el => el.slice(j, j + 3)).flat()
                
                const count = photo.reduce((acc, curr) =>{
                    if(curr === 'X') acc += 1
                    return acc
                }, 0)
                
                if(count > max){
                    max = count
                    sortie = (i + 1) + " " + (j + 1)
                }
            }
        })
    })
    
    console.log(sortie)
}