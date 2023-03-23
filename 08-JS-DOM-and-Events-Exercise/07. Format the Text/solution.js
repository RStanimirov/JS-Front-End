function solve() {
  let input = document.getElementById('input');
  let output = document.getElementById('output');

  let text = input.value;
  let splittedText = text.split('.');
  splittedText.pop()

  while (splittedText.length > 0) {
    let paragraphSentences = splittedText.splice(0, 3).map((p) => p.trim());
    let newParagraph = document.createElement('p');
    newParagraph.textContent = paragraphSentences.join('.') + '.';
    output.appendChild(newParagraph);
  }
}
