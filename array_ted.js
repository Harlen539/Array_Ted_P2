// Array_TED

let nomes = ["Radja", "Bruno", "Harlen", "Diego", "Eduardo"];

console.log("Terceiro nome:", nomes[2]);


nomes.push("Fernanda");
nomes.unshift("Gabriel"); 
console.log("Apos adicionar no inicio e no fim:", nomes);

nomes.pop();
console.log("Apos remover o ultimo nome:", nomes);

let numeros = [2, 4, 6, 8];
let dobrados = numeros.map(num => num * 2);
console.log("Valores dobrados:", dobrados);

let lista = [1, 3, 5, 7, 9];
let maioresQue5 = lista.filter(num => num > 5);
console.log("Numeros maiores que 5:", maioresQue5);