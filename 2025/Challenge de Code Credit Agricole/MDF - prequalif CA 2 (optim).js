/*******
* Read input from STDIN
* Use: console.log()  to output your result.
* Use: console.error() to output debug information into STDERR
* ***/

var input = [];

readline_object.on("line", (value) => {
    input.push(value);
});

readline_object.on("close", ContestResponse);

function distanceSquared(vin, target) {
    return vin.reduce((sum, v, i) => sum + Math.pow(v - target[i], 2), 0);
}

function computeAverage(vins) {
    let avg = new Array(10).fill(0);
    vins.forEach(vin => vin.forEach((val, i) => avg[i] += val));
    return avg.map(val => val / vins.length);
}

function ContestResponse(){
    const prefs = input[0].split(' ').map(Number);
    const nb = Number(input[1]);
    const caracs = input.slice(2, 2 + nb).map(el => el.split(' ').map(Number));

    // Trouver le vin initial le plus proche
    let bestIndex = 0;
    let minDist = distanceSquared(caracs[0], prefs);
    
    for (let i = 1; i < nb; i++) {
        let dist = distanceSquared(caracs[i], prefs);
        if (dist < minDist) {
            minDist = dist;
            bestIndex = i;
        }
    }

    let selectedVins = [caracs[bestIndex]];
    let selectedIndices = [bestIndex];

    // Ajouter d'autres vins jusqu'à 50 en améliorant progressivement la moyenne
    while (selectedIndices.length < 50) {
        let bestAddition = -1;
        let bestDist = minDist;

        for (let i = 0; i < nb; i++) {
            let newVins = [...selectedVins, caracs[i]];
            let avgVin = computeAverage(newVins);
            let newDist = distanceSquared(avgVin, prefs);

            if (newDist < bestDist) {
                bestDist = newDist;
                bestAddition = i;
            }
        }

        if (bestAddition === -1) break; // Plus d'amélioration possible

        selectedVins.push(caracs[bestAddition]);
        selectedIndices.push(bestAddition);
        minDist = bestDist;
    }

    console.log(selectedIndices.join(" "));
}