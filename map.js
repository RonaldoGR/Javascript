// Exercício - 01
// const numeros = [1, 2, 3, 4, 5];

// const dobro = numeros.map((numero) => numero * 2)
// console.log(dobro)

// Exercício - 02 
// const numeros = [10, 20, 30, 40];
// const numerosConvertidos = numeros.map((numero) => numero.toString())
// console.log(numerosConvertidos)

// Exercício - 03
// const produtos = [
//     { nome: "Teclado", preco: 100 },
//     { nome: "Mouse", preco: 50 },
//   ];
//   produtos.map((elemento) => {
//     elemento.disponivel = true;
// });

//   console.log(produtos);
  
// Exercício - 04
// const pessoas = [
//     { nome: "Alice", idade: 25 },
//     { nome: "Bob", idade: 30 },
//   ];
// let nomes = pessoas.map((elemento) => elemento.nome)
// console.log(nomes)

// Exercício - 05
// const nomes = ["joão", "maria", "pedro"];
// const nomesMaiusculo = nomes.map((nome) => nome.toUpperCase());
// console.log(nomesMaiusculo)

// Exercício - 06
// const temperaturasCelsius = [0, 20, 30, 40];
// const temperaturaFarenheit = temperaturasCelsius.map((temperatura) => temperatura * 9/5 + 32);
// console.log(temperaturaFarenheit);

// Exercício - 07
// const nomes = ["Ana", "Bruno", "Carlos"];
 
// const id = nomes.map((elem, index) => {
//     return {
//         id: index + 1,
//         nome: elem,
//     };
// });

// console.log(id)

// Exercício - 08 
// const pedidos = [
//     { produto: "Camiseta", preco: 50, quantidade: 2 },
//     { produto: "Calça", preco: 100, quantidade: 1 },
//   ];

//   const total = pedidos.map((elemento, index) => elemento.preco * elemento.quantidade )

//   console.log(total);

// Exercpicio - 09
// const datas = ["2025-01-01", "2024-12-25"];

// const novaData = datas.map((data) => {
//     const partes = data.split('-');
//     return `${partes[2]}/${partes[1]}/${partes[0]}`;

// }) 
// console.log(novaData);

//Exercício - 10
// const estudantes = [
//     { nome: "Lucas", idade: 20 },
//     { nome: "Mariana", idade: 22 },
//   ];

//  const frases = estudantes.map((elemento) => `${elemento.nome} tem ${elemento.idade} anos`);
//   console.log(frases);