//Our football team finished the championship. The result of each match looks like "x:y". Results of all matches are recorded in the collection.
function points(games) {
    let total = 0 
    for (let i = 0 ; i < games.length ; i++) {
        if (games[i][0] > games[i][2]){
            total += 3
        } else if (games[i][0] === games[i][2]){
            total += 1
        } else {
            total += 0
        }
    } return total
}
