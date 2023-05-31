function exemploVar() {
    var x = 10;
  
    if (true) {
      var x = 20;
      console.log(x); // Saída: 20
    }
  
    console.log(x); // Saída: 20 (em vez de 10)
  }
  
exemploVar();
  
function exemploLet() {
    let x = 10;
  
    if (true) {
      let x = 20;
      console.log(x); // Saída: 20
    }
  
    console.log(x); // Saída: 20 (em vez de 10)
  }
  
  exemploLet();
  