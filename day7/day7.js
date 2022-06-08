let operacao;

function soma(num1, num2) {
    return num1 + num2;
}

function subtracao(num1, num2) {
    return num1 - num2;
}

function multiplicacao(num1, num2) {
    return num1 * num2;
}

function divisao(num1, num2) {
    return num1 / num2;
}

while (operacao != '0') {
    operacao = prompt(
        'Qual operação você deseja realizar?\n' +
        '1 - soma\n' +
        '2 - subtração\n' +
        '3 - multiplicação\n' +
        '4 - divisão\n' +
        '0 - sair\n'
    );
    if (operacao == '0') {
        alert('Até a próxima');
        break;
    }
    let num1 = parseFloat(prompt('Insira o primeiro número'));
    let num2 = parseFloat(prompt('Insira o segundo número'));

    switch (operacao) {
        case '1':
            resultado = soma(num1, num2);
            alert(resultado);
            break;
        case '2':
            resultado = subtracao(num1, num2);
            alert(resultado);
            break;
        case '3':
            resultado = multiplicacao(num1, num2);
            alert(resultado);
            break;
        case '4':
            resultado = divisao(num1, num2);
            alert(resultado);
            break;
        default:
            alert('Opção inválida');
    }
}    
