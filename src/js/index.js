import { renderResult } from "./ui.js";

document.querySelectorAll(".choice-btn").forEach(btn => {
  btn.addEventListener("click", () => {
    const choice = btn.dataset.choice;
    renderResult(choice);
  });
});
