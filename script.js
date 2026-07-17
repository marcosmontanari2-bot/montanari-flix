

const botaoAssistir = document.querySelector('.botao-assistir');

function darPlay() {
    window.open('https://www.youtube.com/watch?v=dQw4w9WgXcQ', '_blank');
} 
botaoAssistir.addEventListener('click', darPlay);
 



const campoBusca = document.querySelector('#campo-busca');
const botaoBusca = document.querySelector('#botao-busca');

function realizarBusca() {
    const termoPesquisado = campoBusca.value; 
    
    if (termoPesquisado === "") {
        alert("Por favor, digite o nome de um filme!");
    } else {
        const linkYoutube = "https://www.youtube.com/results?search_query=" + encodeURIComponent(termoPesquisado + " trailer");
        window.open(linkYoutube, '_blank');
    }
}

botaoBusca.addEventListener('click', realizarBusca);

campoBusca.addEventListener('keypress', (evento) => {
    if (evento.key === 'Enter') {
        realizarBusca();
    }
});




const botaoSeries = document.querySelector('#menu-series');
const botaoDesenhos = document.querySelector('#menu-desenhos');
const botaoFilmesMenu = document.querySelector('#menu-filmes'); // Declarado corretamente aqui no topo

botaoSeries.addEventListener('click', () => {
    campoBusca.value = "Melhores Séries de Ação";
    realizarBusca();
});

botaoDesenhos.addEventListener('click', () => {
    campoBusca.value = "Desenhos Animados antigos e novos";
    realizarBusca();
}); 


botaoFilmesMenu.addEventListener('click', () => {
    campoBusca.value = "Melhores Filmes de Cinema";
    realizarBusca();
});




const todasAsCapas = document.querySelectorAll('.capa-filme');

todasAsCapas.forEach(capa => {
    capa.addEventListener('click', () => {
        const filmeSelecionado = capa.getAttribute('data-filme');
        const linkTrailer = "https://www.youtube.com/results?search_query=" + encodeURIComponent(filmeSelecionado + " trailer oficial");
        window.open(linkTrailer, '_blank');
    });
});