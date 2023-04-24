class Cards {
    constructor() {
        // this foi utilizado para que não haja perca do contexto em que o código está sendo executado, ou seja, essas propriedades estão sendo executadas e somente dentro da class Cards, sendo este o contexto delas. A aplicação de this foi necessária visto que a function scrollCards está sendo invocada em outro arquivo. 
        this.posicaoSectionDicas = document.getElementById('section-dicas')
        this.cardEsquerda = document.querySelector('.card-esq')
        this.cardDireita = document.querySelector('.card-dir')
    }

    scrollCards() {
        // a function irá executar o método requestAnimationFrame, responsável pela responsividade das animações em browsers mais antigos, usando como parâmetro a function calculoScroll, que está presa no contexto da class Cards. Isso fará com que a animação dos cards fique mais suave (60 frames por segundo). 
        window.requestAnimationFrame(this.calculoScroll.bind(this));
    }

    calculoScroll() {
        // obtém a posição da section-dicas com relação ao scroll vertical (y). 
        const posicao = this.posicaoSectionDicas.getBoundingClientRect()['y'];
        console.log(posicao);
        // se a posição do scroll for igual ou maior que 25, os cards serão movimentados com base na posição atual do scroll através do translate, utilizando a posição do scroll como porcentagem.  
        if(posicao >= 25) {
            // como o translate sempre terminará com valor igual a -25% e 25%, adicionamos 25 no card esquerdo e subtraimos 25 no card direito para que ambos terminem com a coordenada x = 0, fazendo com que os cards voltem a suas posições de origem. Além disso, dividimos o valor por 10, para que a rolagem da página seja menos rápida, fazendo com que a animação dos cards seja mais lenta e fluida. 
            // moverá em direção a esquerda.
            this.cardEsquerda.style.transform = `translate(${(-posicao + 25) / 10}%)`
            // moverá em direção a direita.
            this.cardDireita.style.transform = `translate(${(posicao - 25) / 10}%)`
        } 
    }
}

// exporta a classe Cards. 
export { Cards }