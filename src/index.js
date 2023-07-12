import analyzer from "./analyzer.js";

const resetButton = document.getElementById("reset-button");
const textArea = document.getElementsByName("user-input")[0];
const statsLi = document.getElementsByTagName("li");

function displayStat(index, title, value) {
  const element = statsLi[index];
  element.textContent = `${title}: ${value}`;
}

function displayStats(text) {
  displayStat(0, "Caracteres", analyzer.getCharacterCount(text));
  displayStat(
    1,
    "Caracteres sin espacios",
    analyzer.getCharacterCountExcludingSpaces(text)
  );
  displayStat(2, "Palabras", analyzer.getWordCount(text));
  displayStat(3, "Numeros", analyzer.getNumberCount(text));
  displayStat(4, "Suma numeros", analyzer.getNumberSum(text));
  displayStat(5, "Promedio longitd", analyzer.getAverageWordLength(text));
}

textArea.addEventListener("keyup", function () {
  const text = textArea.value;
  displayStats(text);
});

function resetStats() {
  displayStats("");
}

resetButton.addEventListener("click", function () {
  textArea.value = "";
  resetStats();
});
