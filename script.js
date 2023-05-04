
const reaction = document.getElementById("Reaction-score")
const memory = document.getElementById("Memory-score");
const verbal = document.getElementById("Verbal-score");
const visual = document.getElementById("Visual-score");

reaction.innerHTML = score[0].score
memory.innerHTML = score[1].score;
verbal.innerHTML = score[2].score;
visual.innerHTML = score[3].score;

