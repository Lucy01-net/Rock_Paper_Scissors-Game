import { determineWinner } from "../src/js/game.js";

test("rock beats scissors", () => {
  expect(determineWinner("rock", "scissors")).toBe("player");
});

test("paper beats rock", () => {
  expect(determineWinner("paper", "rock")).toBe("player");
});

test("scissors beats paper", () => {
  expect(determineWinner("scissors", "paper")).toBe("player");
});

test("tie returns tie", () => {
  expect(determineWinner("rock", "rock")).toBe("tie");
});
