const regex = /[\W_]/g;

function getNums(string) {
  let nums = [];

  if (!string.trim().length) {
    return nums;
  }
  nums = string
    .trim()
    .split(" ")
    .map((x) => x.replace(" ", ""))
    .map(Number)
    .filter((x) => !isNaN(x));
  return nums;
}

function getWords(text) {
  const aux = text.replace(regex, "");
  if (!aux.length) {
    return [];
  }
  const words = text.split(" ").filter(function (word) {
    return word.length > 0;
  });
  return words;
}

const analyzer = {
  getWordCount: (text) => {
    //TODO: esta función debe retornar el recuento de palabras que se encuentran en el parámetro `text` de tipo `string`.
    return getWords(text).length;
  },
  getCharacterCount: (text) => {
    //TODO: esta función debe retornar el recuento de caracteres que se encuentran en el parámetro `text` de tipo `string`.
    return text.length;
  },
  getCharacterCountExcludingSpaces: (text) => {
    //TODO: esta función debe retornar el recuento de caracteres excluyendo espacios y signos de puntuación que se encuentran en el parámetro `text` de tipo `string`.
    return text.replace(regex, "").length;
  },
  getAverageWordLength: (text) => {
    //TODO: esta función debe retornar la longitud media de palabras que se encuentran en el parámetro `text` de tipo `string`.
    const words = getWords(text);

    if (!words.length) {
      return 0;
    }

    return parseFloat(
      (
        words.reduce((acc, current) => acc + current.length, 0) / words.length
      ).toFixed(2)
    );
  },
  getNumberCount: (text) => {
    //TODO: esta función debe retornar cúantos números se encuentran en el parámetro `text` de tipo `string`.
    return getNums(text).length;
  },
  getNumberSum: (text) => {
    //TODO: esta función debe retornar la suma de todos los números que se encuentran en el parámetro `text` de tipo `string`.
    const nums = getNums(text);
    let suma = 0;
    for (let index = 0; index < nums.length; index++) {
      const num = nums[index];
      suma += num;
    }
    return suma;
  },
};

export default analyzer;
