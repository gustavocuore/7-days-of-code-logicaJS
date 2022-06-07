let listaFrutas = [];
let listaLaticinios = [];
let listaCongelados = [];
let listaDoces = [];
let listaCompras = [listaFrutas, listaLaticinios, listaCongelados, listaDoces];
let listaComprasExibicao = '';
let adicionarComida = 'sim';

while (adicionarComida != 'não') {
    if (listaFrutas.length == 0 && listaLaticinios.length == 0 && listaCongelados.length == 0 && listaDoces.length == 0) {
        adicionarComida = prompt(
            'Você deseja adicionar uma comida na sua lista de compras?\n' +
            'Responda sim ou não\n'
        );
    } else {
        adicionarComida = prompt(
            'Você deseja:\n' +
            '1- Adicionar comida\n' +
            '2- Remover comida\n' +
            '3- Para encerrar'
        );
        if (adicionarComida == '1') {
            adicionarComida = 'sim'
        } else if (adicionarComida == '2') {
            adicionarComida = 'remover';
        } else {
            adicionarComida = 'não';
        }

    }

    if (adicionarComida === 'não') {
        break;
    } else if (adicionarComida === 'remover') {
        let itemRemover = prompt(`Qual dos itens você gostaria de remover?\n${listaComprasExibicao}`);
        let falhaRemocao = true;
        for (let i = 0; i < listaCompras.length; i++) {
            if (listaCompras[i].includes(itemRemover)) {
                let indice = listaCompras[i].indexOf(itemRemover);
                let itemRemovido = listaCompras[i].splice(indice);
                alert(`O Item "${itemRemovido}" foi removido com sucesso!`);
                falhaRemocao = false;
                break;
            }
        }

        if (falhaRemocao) {
            alert(`Não foi encontrado o item ${itemRemover}`);
        }
    } else {
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
    listaComprasExibicao = `Lista de compras:\n  Frutas: ${listaFrutas}\n  Laticínios: ${listaLaticinios}\n  Congelados: ${listaCongelados}\n  Doces: ${listaDoces}`;
    alert(listaComprasExibicao);
}

alert(listaComprasExibicao);