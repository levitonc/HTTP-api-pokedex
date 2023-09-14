## CONSTRUINDO UMA POKEDEX COM html, css, api

Requisição HTTP

                URL: https://pokeapi.co/api/v2/pokemon/?type=grass

            PATH VEM IDENTIFICANDO O RECURSO E TUDO QUE TEM PÓS INTERROGAÇÃO É A QUERY STRING (chave + valor), PODENDO CONCATENAR ARGUMENTOS COM O E COMERCIAL (&)
            Sintaxe da QUERY STRING
                    
                    name = i
                    type = grass

            Comparando com o link do POKE API 

                "https://pokeapi.co/api/v2/pokemon/?offset=20&limit=20"     
                TUDO DEPOIS DA INTERROGAÇÃO É A QUERY STRING
                offset=20 "numero da página"
                limite=20 "itens na pagina"


            ${IP} / ${path = caminho de identificação do recurso}



                    IP: https://pokeapi.co/
                    http://127.0.0.1:3000    (MESMA COISA)


                    Request Method: *GET* | POST | PUT | DELETE | PATCH 

            AS DUAS FORMAS DE PASSAGEM DE PARÂMETRO POR API, UMA ATRAVES DO PATH E OUTRA DA QUERYSTRING


iISSO TUDO GERARÁ UMA REQUISIÇÃO COM UM STATUS CODE 

REQUEST HEADERS 
        
        CONFIGURAÇÃO DA API

RESPONSE HEADERS 

        CONFIGURAÇÃO DO API

BODY 
        
        DEPENDENDO DO TIPO, ENVIA O CORPO DA INFORMAÇÃO.


## RESUMÃO 

        o js é mt fácil p manipular o HTML. O que importa de verdade é o restante dos conceitos. Como manipular uma Promise, Como manipular uma lista de objetos, como organizá-los de uma forma plausível. Em suma, oq importa de verdade é a lógica de programação aprendido inicialmente. 

GASTEI HORAS ERRANDO NO CLASS DO POKE-MODEL QUE ODIO