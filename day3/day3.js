let area;
let carreira;
let tecnologias = [];

while(area != '1' && area != '2') {
    area = prompt(
        'O jogo da carreira dev!\n' +
        'Você gostaria de ir para qual área?\n' +
        '1 - Front-end\n' +
        '2 - Back-end'
    )
}

if (area == '1') {
    area = 'Front-end';
} else {
    area = 'Back-end';
}

while(carreira != '1' && carreira != '2') {
    carreira = prompt(`Qual caminho você quer seguir?\n1 - Especialista em ${area}\n2 - Fullstack`);
}

if (carreira == '1') {
    carreira = `Especialista ${area}`;
} else {
    carreira = 'Fullstack';
}

alert(`Certo. Seguirá a carreira ${carreira}`);

let nova_tecnologia = prompt('Insira abaixo uma tecnologia para sua lista de aprendizado ou clique em "Cancel" para finalizar');

for (let i = 0; i <= tecnologias.length; i++) {
    if (nova_tecnologia != null) {
        tecnologias[i] = nova_tecnologia;
        alert(`Você inseriu ${nova_tecnologia} na sua lista de aprendizado!`);
        nova_tecnologia = prompt('Tem mais alguma tecnologia que você gostaria de aprender? (Clique em "Cancel" para finalizar)');
    }
}

alert(`Área escolhida = ${area}\nCarreira = ${carreira}\nLista de aprendizado = ${tecnologias}`);