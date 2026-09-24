const nomesHerois = ["Aethelgard", "Valeria", "Eldrin", "Lyra", "Thorgar"];
const locais = ["Floresta das Sombras", "Ruínas de Eldoria", "Pico da Névoa", "Caverna dos Ecos"];

function geraNomeAleatorio(lista) {
    const indice = Math.floor(Math.random() * lista.length);
    return lista[indice];
}

const hélioNome = geraNomeAleatorio(nomesHerois);
const localAventura = geraNomeAleatorio(locais);
