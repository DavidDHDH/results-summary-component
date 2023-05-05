const result = document.getElementById('moyenne')
const notes = scores.map(score => score.score)



// Affichage des scores individuels
scores.forEach(score => {
    const idElem = score.category
    document.getElementById(idElem).innerHTML = score.score
})

// Calcul et affichage de la moyenne

const moyenne = (notes) => {
  let sum = 0;
  let count = 0;
  for (var note of notes) {
    sum = sum + note;
    count++;
  }
  return sum / count;
};

const res = Math.round(moyenne(notes))
result.textContent = res
