// importa a classe Cards, Icones e Footer.
import { Cards } from '/js/cards.js'
import { Icones } from '/js/icones.js'
import { Footer } from '/js/footer.js'

// ao carregar a página, a arrow function é executada, em que a class Cards é armazenada dentro da const animaCards, e ao scrollar a página, a function scrollCards é vinculada à constante animaCards, para evitar que o this seja perdido. Com isso, a function scrollCards é invocada, consequentemente invocando a function calculoScroll, que por sua vez será responsável pelas animações dos cards. 
window.onload = () => {
    // seleciona tudo presente na class Cards para que possa ser utilizado através da variável animaCards.
    const animaCards = new Cards();
    // toda vez que o scroll é usado no site, a função scrollCards contida dentro de animaCards é invocada. A função scrollCards foi presa ao contexto da constante animaCards.   
    document.addEventListener('scroll', animaCards.scrollCards.bind(animaCards))

    // seleciona tudo presente na class Icones para que possa ser utilizado através da variável icones, criando-se uma nova instância.  
    const icones = new Icones();
    // chama a function animaIcones() presente na const footer. 
    icones.animaIcones();

    // seleciona tudo presente na class Footer para que possa ser utilizado através da variável footer, criando-se uma nova instância. 
    const footer = new Footer();
    // chama a function efeitoOnda() presente na const footer. 
    footer.efeitoOnda();
}