const imagem_1 = document.querySelector('#imagem_1');
const imagem_2 = document.querySelector('#image_2');
const imagem_3 = document.querySelector('#image_3');
const botao = document.querySelector('button');
const nomeDoPersonagem_1 = document.querySelector('#nome_1');
const nomeDoPersonagem_2 = document.querySelector('#nome_2');
const nomeDoPersonagem_3 = document.querySelector('#nome_3');
const especie_1 = document.querySelector('#especie_1');
const especie_2 = document.querySelector('#especie_2');
const especie_3 = document.querySelector('#especie_3');
const condicao_1 = document.querySelector('#condicao_1');
const condicao_2 = document.querySelector('#condicao_2');
const condicao_3 = document.querySelector('#condicao_3');

gerarValorAleatorio = () => {
    return Math.floor(Math.random() * 671);
}

pegarPersonagem = () => {

    let numeroAleatorio_1 = gerarValorAleatorio();
    let numeroAleatorio_2 = gerarValorAleatorio();
    let numeroAleatorio_3 = gerarValorAleatorio();

    const pegarPersonagem_1 = fetch(`https://rickandmortyapi.com/api/character/${numeroAleatorio_1}`, {
        method: 'GET',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json'
        }
    }).then((response) => response.json()).then((data) => {
        imagem_1.src = data.image;
        imagem_1.alt = data.name;
        nomeDoPersonagem_1.innerHTML = data.name;
        especie_1.innerHTML = data.species;
        condicao_1.innerHTML = data.status;
    });

    const pegarPersonagem_2 = fetch(`https://rickandmortyapi.com/api/character/${numeroAleatorio_2}`, {
        method: 'GET',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json'
        }
    }).then((response) => response.json()).then((data) => {
        imagem_2.src = data.image;
        imagem_2.alt = data.name;
        nomeDoPersonagem_2.innerHTML = data.name;
        especie_2.innerHTML = data.species;
        condicao_2.innerHTML = data.status;
    });    
    
    const pegarPersonagem_3 = fetch(`https://rickandmortyapi.com/api/character/${numeroAleatorio_3}`, {
        method: 'GET',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json'
        }
    }).then((response) => response.json()).then((data) => {
        imagem_3.src = data.image;
        imagem_3.alt = data.name;
        nomeDoPersonagem_3.innerHTML = data.name;
        especie_3.innerHTML = data.species;
        condicao_3.innerHTML = data.status;
    });

    return pegarPersonagem_1, pegarPersonagem_2, pegarPersonagem_3;
};

botao.onclick = pegarPersonagem;