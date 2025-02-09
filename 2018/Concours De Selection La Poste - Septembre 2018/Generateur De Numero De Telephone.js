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
    const complexite = Number(input[0])
    
    const numbers = []
    
    const generate = (numero ,save) => {
        if(numero.length === 10){
            if(numbers.includes(numero)){
                numero = "0"
            }else{
                numbers.push(numero)
                return
            }
        }
        
        var random = Math.floor(Math.random() * 10)
        
        if(numero.length === 1){
            random = [6, 7][Math.floor(Math.random() * 2)]
        }else if(save.length > 6 || complexite === 0){
            random = save[Math.floor(Math.random() * save.length)]
        }else{
            random = Number(numero[Math.floor(Math.random() * numero.length)])
        }
        
        save = save.filter(el => el !== random)
        generate(numero + random, save)
        
    }
    
    while(numbers.length !== 1000){
        generate("0", [1, 2, 3, 4, 5, 6, 7, 8, 9])
    }
    
    console.log(numbers.join(' '))
}


/*
function ContestResponse(){
    const complexite = Number(input[0]);
    
    const numbers = new Set();
    const maxNumbers = 1000;

    while (numbers.size < maxNumbers) {
        let numero = "0";
        let save = [1, 2, 3, 4, 5, 6, 7, 8, 9];

        // Premier chiffre après le 0 : doit être 6 ou 7
        numero += [6, 7][Math.floor(Math.random() * 2)];

        while (numero.length < 10) {
            let random;
            
            if (numero.length === 1) {
                random = [6, 7][Math.floor(Math.random() * 2)];
            } else if (save.length > 6 || complexite === 0) {
                random = save[Math.floor(Math.random() * save.length)];
            } else {
                random = Number(numero[Math.floor(Math.random() * numero.length)]);
            }

            save = save.filter(el => el !== random);
            numero += random;
        }

        numbers.add(numero);
    }

    console.log([...numbers].join(' '));
}

*/