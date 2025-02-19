// Exercício - 01
// const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// const numerosPares = numeros.filter((numero) => numero % 2 === 0);
// console.log(`PARES: ${numerosPares}`);


// Exercício - 02
// const palavras = ["sol", "lua", "mar", "montanha", "rio", "casa"];
// const palavrasPequenas = palavras.filter((palavra) => palavra.length <= 4);
// console.log(`PALAVRAS CURTAS: ${palavrasPequenas.length}`);
// palavrasPequenas.forEach((palavra) => console.log(palavra))

// Exercício - 03
// const pessoas = [
//     { nome: "Ana", idade: 17 },
//     { nome: "Carlos", idade: 20 },
//     { nome: "Beatriz", idade: 15 },
//     { nome: "Pedro", idade: 30 },
//     { nome: "João", idade: 18 }
// ];

// const maiorDeIdade = pessoas.filter((elemento) => elemento.idade >= 18);
// console.log(`PESSOAS MAIORES DE IDADE: (${maiorDeIdade.length})`);
// maiorDeIdade.forEach((pessoa) => console.log(`Nome: ${pessoa.nome} || Idade: ${pessoa.idade}`));


// Exercício - 04 
// const produtos = [
//     { nome: "Camiseta", preco: 25 },
//     { nome: "Tênis", preco: 80 },
//     { nome: "Mochila", preco: 120 },
//     { nome: "Relógio", preco: 200 },
//     { nome: "Boné", preco: 40 }
// ];

// const produtosCaros = produtos.filter(({ preco }) => preco > 50);
// console.log("Produtos que custam mais de R$50: ");
// produtosCaros.forEach(({ nome, preco }) => console.log(`Produto: ${nome} || Preço:R$ ${preco},00`));

// Exercício - 05
// const palavras = ["Abacaxi", "banana", "Ameixa", "uva", "abóbora", "abacate"];

// const letraA = palavras.filter((palavra) => palavra.toLowerCase()[0] === 'a');
// console.log("PALAVRAS QUE COMEÇAM COM A LETRA 'A':");
// console.log(letraA);

// Exercício - 06  - REVISAR
// const numeros = [10, 20, 30, 40, 50];
// const media = (n) => n.reduce((soma, numero) => soma += numero, 0) / numeros.length.toFixed(2);
// const maiores = numeros.filter((numero) => numero > media(numeros));
// console.log(maiores);


// Exercício - 07 
// const palavras = ["carro", "festa", "doce", "pessoa", "gato", "coordenação", "compreender"];
// const vogais = new Set(["a", "e", "i", "o", "u"]);
// const vogaisDuplicadas = palavras.filter((palavra) => {
//     for (let i = 0; i < palavra.length - 1; i++) {
//     if(palavra[i] === palavra[i+1] && vogais.has(palavra[i])){
//       return true
//     }
// }    

// });
// console.log(vogaisDuplicadas)

// Exercício - 08 
// const funcionarios = [
//     { nome: "Mariana", profissao: "Engenheira", idade: 20 },
//     { nome: "Lucas", profissao: "Programador", idade: 22 },
//     { nome: "Amanda", profissao: "Designer", idade: 30 },
//     { nome: "João", profissao: "Desenvolvedor Web", idade: 31 },
//     { nome: "Paula", profissao: "Médica", idade: 36 },
//     { nome: "Paulo", profissao: "Programador", idade: 36 },
// ];

// const TI = new Set (["Programador", "Desenvolvedor Web"]);
// const pessoasTI = funcionarios.filter(({ profissao, idade }) => ((TI.has(profissao)) && idade > 25));
// console.log(`Pessoas que são da área da TI e possuem mais de 25 anos: (${pessoasTI.length})`);
// pessoasTI.forEach(({ nome, profissao, idade }) => console.log(`Nome: ${nome} || Profissão: ${profissao} || Idade: ${idade}`));


// Exercício - 09 
// const datas = ["2024-02-01", "2024-03-15", "2024-02-10", "2024-04-05"];
// /* const agrupada = datas.filter((data) => data.split('-')[1] === '02'); */
// const agrupada = datas.filter((data) => {
//     const mes = new Date(`${data}T00:00:00`).getMonth(); // Forçando o fuso horário UTC
//     return mes === 1; // Fevereiro é 1 no getMonth()
// });
// console.log(' MÊS DE FEVEREIRO: ');
// agrupada.forEach((data) => console.log(data))


// Exercício - 10
// const filmes = [
//     { titulo: "A Origem", ano: 2010, nota: 8.8 },
//     { titulo: "Interestelar", ano: 2014, nota: 8.6 },
//     { titulo: "Vingadores", ano: 2012, nota: 8.0 },
//     { titulo: "Batman: O Cavaleiro das Trevas", ano: 2008, nota: 9.0 },
//     { titulo: "Duna", ano: 2021, nota: 8.3 }
// ];

// const lancamentos = filmes.filter(({ ano }) => ano > 2010)
// console.log(`Foram encontrados ${lancamentos.length} lançados após o ano de 2010.`)
// lancamentos.forEach(({ titulo, ano, nota }) => console.log(`Nome do : ${titulo} || Ano de lançamento: ${ano} || Nota: ${nota}`));





