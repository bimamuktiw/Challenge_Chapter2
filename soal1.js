function changeWord(selectedText, changedText, text) {
  return text.replace(selectedText, changedText);
}

const kalimat1 = 'ikan tuna ikan paus';
const kalimat2 = '-1 tuan raja ';

// Mengganti kata 'mencintai' dengan 'membenci' pada kalimat1
console.log(changeWord('paus', 'teri', kalimat1));
// Output: "Andini sangat membenci kamu selamanya"

console.log('cakep');

// Mengganti kata 'bromo' dengan 'semeru' pada kalimat2
console.log(changeWord('raja', 'putri', kalimat2));
// Output: "Gunung Semeru tak akan mampu menggambarkan besarnya cintaku padamu"
