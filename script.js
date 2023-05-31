/*
 * Sintaxe básica do JavaScript
 * 1. Utilize ponto-e-vírgula ao final de cada instrução,
 * com exceção de blocos com chaves;
 * 2. Não utilize tipos de variáveis nas declaração, o 
 * javascript é dinamicamente tipado;
 * 3. Utilize as palavras reservadas 'let' e 'const'
 * sempre que for declarar uma variável;
 */

// Declaração de variável (utilizando uma convenção
// de nomenclatura (camelCase, por exemplo))
let nomeVariavel;

// Declaração de variável com inicialização
let nomeVariavelInicializada = 20;

// Declaração de constante (em maiúsculas e devem
// sempre ser inicializadas);
const NOME_CONSTANTE = 0;

// uso nos exemplos
let condicao = true;

// estrutura de decisão IF-ELSE (SE-SENAO)
if (condicao) {
    // instruções se a condição for verdadeira
} else if (condicao) {
    // instruções se a condição for verdadeira
} else {
    // instruções se as condições forem falsas
}

// estrutura de decisão SWITCH-CASE (ESCOLHA-CASO)
switch(condicao) {
    case 1:
        // instruções caso condicao == 1
        break;
    case 2:
        // instruções caso condicao == 2
        break;
    default:
        // instruções padrão ("caso contrário")
        break;
}

// estrutra de repetição WHILE (ENQUANTO)
while(condicao) {
    // código que será executado enquanto a
    // condição for verdadeira
}

// estrutura de repetição DO-WHILE (FAÇA-ENQUANTO)
do {
    // código que será executado na primeira
    // vez e enquanto a condição for verdadeira
} while(condicao)

// estrutura de repetição FOR (PARA)
for (let i = 0; i < 10; i++) {
    // código que será executado com base nos
    // parâmetros indicados da variável "i"
}

// escreve no terminal (console)
console.log();

// limpa as saídas do terminal (console)
console.clear();

// lê uma entrada do usuário no navegador
prompt();

// converte uma string em inteiro
parseInt();

// converte uma string em real
parseFloat();

// declara uma nova função
function exemplo() {
    // corpo da função
}
