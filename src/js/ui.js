import { determineWinner, getComputerChoice } from "./game.js";

export function renderResult(playerChoice) {
  const computerChoice = getComputerChoice();
  const result = determineWinner(playerChoice, computerChoice);

  const resultBox = document.getElementById("result");
  resultBox.innerHTML = `
    <p>You chose <strong>${playerChoice}</strong></p>
    <p>Computer chose <strong>${computerChoice}</strong></p>
    <h2>${formatResult(result)}</h2>
  `;
}

function formatResult(result) {
  if (result === "tie") return "It's a tie!";
  if (result === "player") return "You win!";
  return "Computer wins!";
}
