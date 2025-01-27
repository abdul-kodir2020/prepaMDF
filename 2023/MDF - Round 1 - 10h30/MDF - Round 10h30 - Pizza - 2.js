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
    const firstLine = input[0].split(' ')
    
    const restaurants = input.slice(1, parseInt(firstLine[0]) + 1).map(restaurant => restaurant.split(' '))
    const commandes = input.slice( - parseInt(firstLine[1])).map(commande => commande.split(' '))
    
    var distanceTotale = 0
    
    commandes.forEach(commande => {
        var distance = 0
        restaurants.forEach((restaurant, index) => {
            const dis = calculerDistance(commande[0], commande[1], restaurant[0], restaurant[1])
            if(index === 0 || dis < distance) distance = dis
        })
        distanceTotale += (distance * 2)
    })

    console.log(distanceTotale)
}

const calculerDistance = (x1, y1, x2, y2) => {
    return Math.abs(parseInt(x1) - parseInt(x2)) + Math.abs(parseInt(y1) - parseInt(y2))
}