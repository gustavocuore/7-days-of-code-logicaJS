let area;
let linguagem;
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
    while (linguagem != 'React' && linguagem != 'Vue') {
        linguagem = prompt('Qual linguagem deseja aprender?\n1- React\n2- Vue');
        if(linguagem == '1') {
            linguagem = 'React';
        } else {
            linguagem = 'Vue'
        }
    }
} else {
    area = 'Back-end';
    while (linguagem != 'C#' && linguagem != 'Java') {
        linguagem = prompt('Qual linguagem deseja aprender?\n1- C#\n2- Java');
        if(linguagem == '1') {
            linguagem = 'C#';
        } else {
            linguagem = 'Java'
        }
    }
}

while(carreira != '1' && carreira != '2') {
    carreira = prompt(`Qual caminho você quer seguir?\n1 - Especialista em ${area}\n2 - Fullstack`);
}

if (carreira == '1') {
    carreira = `Especialista ${area}`;
    alert(`Seguirá a carreira ${carreira}, com a linguagem principal ${linguagem}`);
} else {
    carreira = 'Fullstack';
    alert(`Seguirá a carreira ${carreira}. Para isso, será necessário aprender outras linguagens e tecnologias além de ${linguagem}`);
}

let nova_tecnologia = prompt('Insira abaixo uma tecnologia para sua lista de aprendizado ou clique em "Cancel" para finalizar?');

for (let i = 0; i <= tecnologias.length; i++) {
    if (nova_tecnologia != null) {
        tecnologias[i] = nova_tecnologia;
        alert(`Você inseriu ${nova_tecnologia} na sua lista de aprendizado!`);
        nova_tecnologia = prompt('Tem mais alguma tecnologia que você gostaria de aprender? (Clique em "Cancel" para finalizar)');
    }
}

alert(`Área escolhida = ${area}\nLinguagem principal = ${linguagem}\nCarreira = ${carreira}\nLista de aprendizado = ${tecnologias}`);