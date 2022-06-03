let nome = prompt('Qual o seu nome?');
let idade = prompt('Quantos anos você tem?');
let linguagem = prompt('Qual a linguagem de programação você está estudando?');

alert(`Olá ${nome}, você tem ${idade} anos e já está aprendendo ${linguagem}`);

let chosenOption = "";

do {
    chosenOption = prompt(`Você gosta de estudar ${linguagem}? Responda com número 1 para SIM ou 2 para NÃO`)
    switch (chosenOption) {
        case "1":
            alert('Muito bom! Continue estudando e você terá muito sucesso.')
            break
        case "2":
            alert('Ahh que pena... Já tentou aprender outras linguagens?')
            break
        default:
            alert('Mensagem inválida')
        }
} while (chosenOption != '1' && chosenOption != '2');
