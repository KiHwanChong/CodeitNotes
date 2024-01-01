const subjectScores = {
  "Math": 94,
  "English": 80,
  "Science": 75
}

function minMaxScore (scoreObject){
let minMaxSubject = []
for (let subj in scoreObject){
  minMaxSubject.push(subj)
}
}

console.log(minMaxScore(subjectScores))