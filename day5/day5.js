let listaFrutas = [];
let listaLaticinios = [];
let listaCongelados = [];
let listaDoces = [];
let adicionarComida = 'sim';

while (adicionarComida != 'não') {
    adicionarComida = prompt(
        'Você deseja adicionar uma comida na sua lista de compras?\n' +
        'Responda sim ou não\n'
    );
    
    if (adicionarComida === 'não') {
        break;
    }


    let comida = prompt('Qual comida deseja inserir?');

    let categoria = prompt(`Em qual categoria abaixo ${comida} se encaixa?\n  1- frutas\n  2- laticínios\n  3- congelados\n  4- doces`);

    switch (categoria) {
        case '1':
            listaFrutas.push(comida);
            break;
        case '2':
            listaLaticinios.push(comida);
            break;
        case '3':
            listaCongelados.push(comida);
            break;
        case '4':
            listaDoces.push(comida);
            break;
        default:
            alert('Categoria inválida. Falha ao registrar.');
    }
}

alert(`Lista de compras:\n  Frutas: ${listaFrutas}\n  Laticínios: ${listaLaticinios}\n  Congelados: ${listaCongelados}\n  Doces: ${listaDoces}`);