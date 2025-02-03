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
    const [n, m] = input[0].split(' ').map(el => parseInt(el))
    const field = input.slice(- n).map(el => el.split(''))
    
    var isThere = false
    for(let i = 0; i< n; i++){
        for (var j = 0; j < m; j++) {
            if(field[i][j] === '.' && i < n - 1 && j < m - 1 && field[i][j + 1] === '.' && field[i + 1][j] === '.' && field[i + 1][j + 1] === '.'){
                isThere = true
                field[i][j] = 'O'
                field[i][j + 1] = 'O'
                field[i + 1][j] = 'O'
                field[i + 1][j + 1] = 'O'
                break
            }
        }
        if(isThere) break
    }
    
    isThere ? field.map(el => el.join('')).forEach(el => console.log(el)) : console.log('Impossible')
}


/*
ça marche avec ce code mais l'exécuteur affiche toujours impossible à la fin ( Néanmoins ça resout le problème ) du coup j'ai rajouté une variable isThere ( en haut ) pour éviter ça
function ContestResponse(){
    //implement your code here using input array
    const [n, m] = input[0].split(' ').map(el => parseInt(el))
    const field = input.slice(- n).map(el => el.split(''))
    
    for(let i = 0; i< n; i++){
        for (var j = 0; j < m; j++) {
            if(field[i][j] === '.' && i < n - 1 && j < m - 1 && field[i][j + 1] === '.' && field[i + 1][j] === '.' && field[i + 1][j + 1] === '.'){
                field[i][j] = 'O'
                field[i][j + 1] = 'O'
                field[i + 1][j] = 'O'
                field[i + 1][j + 1] = 'O'
                field.map(el => el.join('')).forEach(el => console.log(el))
            }
        }
    }
    
    console.log('Impossible')
}
*/
