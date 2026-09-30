export const CHOICES = ["rock", "paper", "scissors"];

export function getComputerChoice() {
  const index = Math.floor(Math.random() * CHOICES.length);
  return CHOICES[index];
}

export function determineWinner(player, computer) {
  if (player === computer) return "tie";

  const winConditions = {
    rock: "scissors",
    paper: "rock",
    scissors: "paper"
  };

  return winConditions[player] === computer ? "player" : "computer";
}
