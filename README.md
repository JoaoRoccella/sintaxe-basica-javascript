# Sintaxe básica do JavaScript

## Declaração de variáveis

Para declarar uma variável com escopo de função e bloco, use as palavras reservadas ```let``` (pode ser reatribuída) e ```const``` (não pode ser reatribuída). Utilize sempre uma convenção de nomenclatura como camelCase ou PascalCase, por exemplo. Evite o uso da palavra ```var```, pois ela não obedece às regras convencionais de escopo de variáveis. Não é preciso declarar o tipo das variáveis, pois o JavaScript é **dinamicamente tipado**.

Exemplos:

```js
// declaração de variável
let nomeVariavel;

// declaração de constante
const nomeConstante = 0;

// Declaração de variável com inicialização
let nomeVariavelInicializada = 20;
```

## If-else (se-senao)

```js
// condicao 
let condicao = true;

if (condicao) {
    // instruções se a condição for verdadeira (true)
    console.log("verdadeiro");
} else {
    // instruções se a condição for falsa (false)
    console.log("falso");
}
```

## If-elseIf-else (se-senaoSe-senao)

```js

if (condicao) {
    // instruções se a condição for verdadeira (true)
    console.log("verdadeiro1");
} else if (condicao) {
    // instruções se a condição for verdadeira (true)
    console.log("verdadeiro2");
} else {
    // instruções se a condição for falsa (false)
    console.log("falso");
}
```

## Switch-case (escolha-caso)

```js
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
```

## While (enquanto)

```js
while(condicao) {
    // código que será executado enquanto a
    // condição for verdadeira
}
```

## Do-While (Faca-Enquanto)

```js
do {
    // código que será executado na primeira
    // vez e enquanto a condição for verdadeira
} while(condicao);
```

## For (Para)

```js
for (let i = 0; i < 10; i++) {
    // código que será executado com base nos
    // parâmetros indicados da variável "i"
}
```

## console

```js
console.log(); // escreve texto e variáveis
console.clear(); // limpa o console
```

## prompt

Faz a leitura de uma entrada do usuário
```js
// faz a leitura de uma entrada, simplesmente
prompt(); 

// exibe uma mensagem para o usuário antes de fazer a leitura
prompt("Mensagem para o usuário");

// exibe a mensagem e faz a leitura da entrada, atribuindo o
// valor para a variável
let variavel = prompt("Mensagem para o usuário");
```

## Conversões

```js
// converte uma string em inteiro (tipo number)
parseInt();

// converte uma string em real (tipo number)
parseFloat();
```

## function (funcao)

```js
// declara uma nova função
function nomeDaFuncao(parametro) {
    // corpo da função
    return valorDeRetorno;
}
```

## Operadores lógicos

```js
&& // operador E
|| // operador OU
!  // operador NAO
```

## Operadores de comparação

```js
>  // maior
<  // menor
>= // maior ou igual
<= // menor ou igual
== // igual
!= // diferente
=== // estritamente igual (valor e tipo)
!== // estritamente diferente (valor e tipo)
```

## Incremento e decremento

```js
variavel++; // pós-incremento
++variavel; // pré-incremento
variavel--; // pós-decremento
--variavel; // pré-incremento
```

## Concatenação

```js
console.log("Texto", variavel); // concatena mantendo os tipos de cada termo
console.log("Texto" + variavel); // concatena todos os termos como string
```