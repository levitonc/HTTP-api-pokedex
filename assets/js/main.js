const pokemonList = document.getElementById('pokemonList')
const loadMore = document.getElementById('loadMore')

const maxRecords = 151
const limit = 10;
const offset = 0;


function convertPokeHtml(pokemon){
    return `
    <li class="pokemon ${pokemon.type}">
        <span class="number">#${pokemon.number}</span>
        <span class="name">${pokemon.name}</span>

    <div class="detail">
        <ol class="types">
            ${pokemon.types.map((type) => `<li class="type">${type}</li>`).join('')}
        </ol>

        <img src="${pokemon.image}"
            alt="${pokemon.name}">
    </div>
</li>
    
    `
}

function loadPokemonItens(offset, limit) {
pokeApi.getPokemons(offset, limit).then((pokemons = []) => {

    //PEGA A LISTA DE POKEMONS, MAPEIA E CONVERTE EM UMA HTML E DPS JUNTA TODAS ESSAS HTML SEM SEPARADOR, QUE GERARÁ UM HTML NOVO. AÍ CONCATENA COM O HTML ANTIGO NO INNER E JAZ

    const newHtml = pokemons.map(convertPokeHtml).join('')

    pokemonList.innerHTML += newHtml

  
})
}

loadPokemonItens(offset, limit)


loadMore.addEventListener('click', () => {
    offset += limit
    const qtdRecordsWithNexPage = offset + limit

    if (qtdRecordsWithNexPage >= maxRecords) {
        const newLimit = maxRecords - offset
        loadPokemonItens(offset, newLimit)

        loadMore.parentElement.removeChild(loadMore)
    } else {
        loadPokemonItens(offset, limit)
    }
})



  

    // const listItems = []
    

    //     for (let i = 0; i < pokemons.length; i++){
    //         const pokemon = pokemons[i];
    //         listItems.push(convertPokeHtml(pokemon))
          
    // }  

    // console.log(listItems)




 // O MAP CONVERTE O POKEMON 



 // SEMPRE EM PROMISSE PQ PROMETE UM RESULTADO. QUANDO? NÃO SABEMOS. MAS PROMETE UM RESPONSE

 //O THEN E QUE QUANDO O URL DER CERTO, FAZ CHAMAR A FUNÇÃO GERANDO O CONSOLE LOG

         //QUANDO CHAMAMOS UM THEN, PODEMOS DESENCADEAR VARIOS THENS


//QUANDO A URL DAR ERRADO: 

//INDEPENDENTE DO SUCESSO OU DO FRACASSO, TEMOS O FINALLY 
 // .finally(() => console.log('Requisição feita'))