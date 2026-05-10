((scoresArr) => {
  let highestScore = scoresArr[0];
  let lowestScore = scoresArr[0];
  let highestScoreIncr = 0;
  let lowestScoreIncr = 0;
  for(let i=1; i<scoresArr.length; i++) {
    if (scoresArr[i] > highestScore) {
        highestScore = scoresArr[i];
        highestScoreIncr++;
    }
    if (scoresArr[i] < lowestScore) {
        lowestScore = scoresArr[i];
        lowestScoreIncr++
    }
  }
  return [highestScoreIncr, lowestScoreIncr]
})([10, 5 ,20, 20, 4, 5, 2, 25, 1])