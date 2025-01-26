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
    //Focntion de recherche en profondeur - DFS - ou une recherche en largeur - BFS) pour compter les régions noires distinctes dans l'image.
    /* 
    
    DFS - Depth-First Search (Recherche en profondeur)
    L'algorithme DFS explore autant que possible un chemin avant de revenir en arrière pour explorer d'autres chemins. C'est comme suivre un labyrinthe en s'engageant toujours dans un couloir jusqu'à atteindre un cul-de-sac, puis en revenant en arrière pour essayer un autre chemin.
    
    Fonctionnement :
    Choisir un point de départ.
    Marquer le nœud comme visité.
    Visiter un voisin non visité (dans un ordre spécifique, par exemple de gauche à droite).
    Répéter le processus récursivement pour chaque voisin non visité.
    Si tous les voisins d'un nœud sont visités, revenir au précédent (backtracking).
    
    
    BFS - Breadth-First Search (Recherche en largeur)
    L'algorithme BFS explore tous les nœuds à un niveau de profondeur donné avant de passer au niveau suivant. C'est comme explorer un labyrinthe en vérifiant toutes les intersections accessibles avant de passer à la suivante.
    
    Fonctionnement :
    Choisir un point de départ.
    Mettre ce nœud dans une file d'attente.
    Tant que la file n'est pas vide :
    Retirer un nœud de la file.
    Le marquer comme visité.
    Ajouter tous ses voisins non visités à la file.
    
    */
    const dimension = parseInt(input[0])
    const image = input.slice(- dimension).map(line => line.split(''))
    
    const recherche = (x, y) => {
        
        if(x < 0 || x >= dimension || y < 0 || y >= dimension || image[x][y] === '.'){
            return
        }
        
        image[x][y] = '.'
        
        recherche(x - 1, y)
        recherche(x + 1, y)
        recherche(x, y - 1)
        recherche(x, y + 1)
    }
    
    var nombreDePart = 0
    
    for(let i = 0; i < dimension; i++){
        for(let j = 0; j < dimension; j++){
        
            if(image[i][j] === "#"){
                nombreDePart++
                recherche(i, j)
            }
        }
    }
    
    console.log(nombreDePart)
}