let numeroAdivinhacao = Math.floor(Math.random() * 10) + 1;
let acertou = false;

for(let i = 1; i <= 3; i++) {
    let tentativa = prompt(`Tentativa ${i} de 3`);
    if(tentativa == numeroAdivinhacao) {
        acertou = true;
        break;
    }
    alert('Errou!');
}

if(acertou) {
    alert(`Você acertou! O número era ${numeroAdivinhacao}`);
} else {
    alert(`Não foi dessa vez. O número era ${numeroAdivinhacao}`);
}
