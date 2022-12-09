let low = 1;
let high = 10;
let correct_ans = Math.floor(Math.random() * (high - low) + low);
let notMatched = true;
for (let i = 1; i <= 3; i++) {
  let userInput = Number(prompt(`Enter a number between (${low}-${high}):`));
  if (correct_ans > userInput) {
    alert("correct answer is greater!");
  } else if (correct_ans < userInput) {
    alert("corrent answer is smaller!");
  } else {
    alert("you win!!!");
    notMatched = false;
    break;
  }
}
