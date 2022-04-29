/*
    ----- Alterar visibilidade Resumo -----
*/

function mudarTamanho(){
    let containerResumo = document.getElementById("containerResumo") /* recebe os dados da div container Resumo */
    let alturaContainerResumo = document.getElementById("containerResumo").offsetHeight /* recebe a altura da div container Resumo */
    /* recebe os dados dos parágrafos */
    let p2 = document.getElementById("p2")
    let p3 = document.getElementById("p3")
    let p4 = document.getElementById("p4")
    let verMais = document.getElementById("verMais") /* recebe os dados do botão verMais */
    let containerDiscussoes = document.getElementById("containerDiscussoes") /* recebe os dados da div container Discussoes */

    let alturaContainer = document.getElementById("container").offsetHeight /* recebe altura da div container */
    let container = document.getElementById("container") /* recebe os dados da div container */
    if (alturaContainerResumo == 189){ /* verifica a altura do containerResumo se é 189 */

        containerResumo.style.height = 560 + 'px'; /* ajusta altura do container Resumo*/
        /* deixa os parágrafos visiveis */
        p2.style.visibility = "visible"
        p3.style.visibility = "visible"
        p4.style.visibility = "visible"
        verMais.style.visibility = "hidden" /* deixa a label verMais invisivel */

        containerDiscussoes.style.top = 1132 + 'px' /* ajusta o top do container Discussoes */


        container.style.height = alturaContainer + 371 + 'px' /* ajusta a altura do container */
    }else{
        containerResumo.style.height = 189 + 'px'; /* seta altura do container Resumo para o padrão */

        /* Deixa os parágrafos invisiveis */
        p2.style.visibility = "hidden"
        p3.style.visibility = "hidden"
        p4.style.visibility = "hidden"
        verMais.style.visibility = "visible" /* deixa a label ver Mais visivel */

        containerDiscussoes.style.top = 761 + 'px' /* ajusta o top do caontiner Discussoes para o padrão */
        
        container.style.height = alturaContainer - 371 + 'px' /* ajusta a altura do Container */
    }
}

/*
    ----- Alterar visibilidade subtopicos -----
*/

function mostrarSubTopicos(){
    let areaSubTopico = document.getElementById('areaSubTopico')/* recebe os dados da div do subtopico */
    let alturaAreaSubTopico = document.getElementById('areaSubTopico').clientHeight/* recebe os dados da div do subtopico */
    let topicos = document.getElementsByClassName ('topicos') /* recebe a quantidade de tópicos */
    let containerDiscussoes = document.getElementById ('containerDiscussoes') /* recebe os dados da div das discussões */

    let alturaContainer = document.getElementById("container").offsetHeight /* recebe height do container principal */
    let container = document.getElementById("container") /* recebe os dados do contaienr principal */

    if (window.getComputedStyle(areaSubTopico).visibility == "hidden"){ /* verifica se a div está visivel */
        containerDiscussoes.style.height = containerDiscussoes.scrollHeight + 15 + 'px' /* seta o height do container para o tamanho dele + 15px */
        areaSubTopico.style.visibility = 'visible' /* seta os subtópicos visiveis */

        container.style.height = alturaContainer + alturaAreaSubTopico + 'px' /* ajudas a altura do container principal para ela mesma + altura dos subtópicos */
    }else{
        let heightTopico = topicos.length * 160 /* multiplica a quantidade de tópicos pelo seu height */
        containerDiscussoes.style.height = heightTopico + 325 + 'px' /* soma o height da quantidade de tópicos por mais 325 de outros fatores e seta o container para esse height */
        areaSubTopico.style.visibility = 'hidden' /* seta os subtópicos invisiveis */

        container.style.height = alturaContainer - alturaAreaSubTopico + 'px' /* ajusta a altura do container principal para ela mesma - altura dos subtópicos */
        
    }
}

/*
    ----- Alterar z-index div criar tópico -----
*/

function criarNovoTopico () { /* é chamado no botão da página principal e do tópico criado, para criar um novo tópico */
    /* recebimento dos dados das div, para alterar seu z-index */
    let pagDiscussoesPadrao = document.getElementById('pagDiscussoesPadrao')
    let pagCriarTopico = document.getElementById('pagCriarTopico')
    let pagTopicoCriado = document.getElementById('pagTopicoCriado')
    /* recebimento dos dados da div do novo tópico criado */
    let topicoCriado = document.getElementById('topicoCriado')

    topicoCriado.style.display = "none" /* continua deixando o novo tópico criado com o display none */
    /* altera o z-Index das div para alterar qual aparece */
    pagDiscussoesPadrao.style.zIndex = 0
    pagCriarTopico.style.zIndex = 1
    pagTopicoCriado.style.zIndex = 0
}

function enviarNovoTopico () {
    /* recebimento dos dados das div, para alterar seu z-index */
    let pagDiscussoesPadrao = document.getElementById('pagDiscussoesPadrao')
    let pagCriarTopico = document.getElementById('pagCriarTopico')
    let pagTopicoCriado = document.getElementById('pagTopicoCriado')
    /* recebimento dos dados da div do novo tópico criado */
    let topicoCriado = document.getElementById('topicoCriado')
    
    let containerDiscussoes = document.getElementById ('containerDiscussoes') /* recebe os dados da div das discussões */
    let alturaContainer = document.getElementById("container").offsetHeight/* recebe a altura do container principal */
    let container = document.getElementById("container")/* recebe os dados do container principal */

    container.style.height = alturaContainer + 148 + 'px'/* ajusta a altura do container principal para ele mesmo + 148px, altura do novo tópico criado. */

    containerDiscussoes.style.height = containerDiscussoes.scrollHeight - 490 + 'px' /* seta o height do container para o tamanho dele - 490px */

    topicoCriado.style.display = "block" /* altera o display do novo tópico criado para ele aparecer na tela */
    /* altera o z-Index das div para alterar qual aparece */
    pagDiscussoesPadrao.style.zIndex = 0
    pagCriarTopico.style.zIndex = 0
    pagTopicoCriado.style.zIndex = 1
}
