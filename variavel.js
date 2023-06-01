function exemploVar() {
  console.log("\n", "** Exemplo com 'var'")
  
  var x = 10;

  if (true) {
    var x = 20;
    console.log("Valor de 'x' dentro do if: ", x); // Saída: 20
  }

  console.log("Valor de 'x' fora do if: ", x); // Saída: 20 (em vez de 10)
}

exemploVar();

function exemploLet() {
  console.log("\n", "** Exemplo com 'let'")

  let x = 10;

  if (true) {
    let x = 20;
    console.log("Valor de 'x' dentro do if: ", x); // Saída: 20
  }

  console.log("Valor de 'x' fora do if: ", x); // Saída: 20 (em vez de 10)
}

exemploLet();
