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
    
    const nombreLignes = parseInt(input[0].split(' ')[0])
    const nombreColonnes = parseInt(input[0].split(' ')[1])
    const bassin = input.slice(- nombreLignes).map(element => element.split(''))
    
    function findTime(y){
        var time = 0
        
        const visited = []
        
        var i = 0
        var j = y
        
        while(i < bassin.length){
            time++
            const element = bassin[i][j]
            
            if(visited.includes( i + '' + j )) return -1
            visited.push(i + '' + j)
            
            if(element === '>'){
                j++
            }else if(element === '<'){
                j--
            }else if(element === '^'){
                i--
            }else{
                i++
            }
 
        }
        return time
    }
    
    const tab = {}
    
    for(let i = 0; i < nombreColonnes; i++){
        
        tab[i + 1] = findTime(i)
    }
    
    const min = Math.min( ...(Object.values(tab)).filter(element => element !== -1) )

    const winners = (Object.keys(tab)).filter(element => tab[element] <= min && tab[element] !== -1).join(' ')

    console.log(winners)
}