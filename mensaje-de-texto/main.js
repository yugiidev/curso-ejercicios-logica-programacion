let numPad = {
  0: " ",
  1: "",
  2: "abc",
  3: "def",
  4: "ghi",
  5: "jkl",
  6: "mno",
  7: "pqrs",
  8: "tuv",
  9: "wxyz",
};

const buscarNumero = (letra) => {
  let numeros = Object.keys(numPad);
  let resultado = "";

  numeros.forEach((num) => {
    for (let i = 0; i < numPad[num].length; i++) {
      if (numPad[num][i] === letra) {
        for (let j = 0; j <= i; j++) {
          resultado = `${resultado}${num}`;
        }
      }
    }
  });

  return resultado;
};

const convertirTexto = (texto) => {
  let resultado = "";
  for (let i = 0; i < texto.length; i++) {
    resultado = `${resultado}${buscarNumero(texto[i])}`;
  }
  return resultado;
};

console.log(convertirTexto("Hola Mundo"));
