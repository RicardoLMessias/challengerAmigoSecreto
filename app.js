let amigos = [];
let listaNumeros = [];

//função para adicionar novos amigos a lista "amigos"
function adicionarAmigo (){
    let amigo = document.querySelector('input').value;
    
    //se nada for digitado aparecerar um alerta na tela para digitar
    if (amigo.trim() === ""){
        alert('Por favor, insira um nome.');
    }
    //Se algo for digitado sera incluido na lista
    else{
        amigos.push(amigo);//adicionando no array
        listaDeAmigos();//chamando a função listaDeAmigos

        //limpar input
        document.querySelector('input').value = "";
        
    }
}
//função para adicionar clicando o botão Enter do teclado
function checarTecla(event) {
    if (event.key === "Enter") { // Verifica se a tecla pressionada foi "Enter"
        adicionarAmigo(); // Chama a função para adicionar o amigo
    }
}

//Essa função imprime na tela a lista de amigos cadastrados no array amigos
function listaDeAmigos(){
    let lista = document.getElementById('listaAmigos');
    
    // Limpa a lista atual para evitar duplicados
    lista.innerHTML = "";

    // Adiciona cada amigo do array como um novo <li>
    for (let i = 0; i < amigos.length; i++) {
        let novoItem = document.createElement('li'); // Cria um <li> para cada amigo
        novoItem.textContent = amigos[i]; // Define o conteúdo do <li>
        lista.appendChild(novoItem); // Adiciona o <li> ao <ul>
    }
}
//Essa função aciona o botão de sorteio e faz verificações e mostra o sorteado na tela
function sortearAmigo(){
    if (amigos.length == 0){//verificação se tem nomes adicionados
        alert ('Por favor, insira um nome para sorteio.');//um alerta na tela caso não tenha numeros 
    } else {
        let numero = gerarNumeroAleatorio();
        
        if(numero !== 'limite'){
        mostrarSorteado(numero);
        console.log(numero);
    }
}
function gerarNumeroAleatorio() {
    let numeroArray = amigos.length;
    let numeroAleatorio = Math.floor(Math.random()*numeroArray);
    
    if (numeroArray == listaNumeros.length){
        alert('Todos foram sorteados');
        return 'limite';
    }
    
    if (listaNumeros.includes(numeroAleatorio)){
        return gerarNumeroAleatorio();
    }else{
        listaNumeros.push(numeroAleatorio);
        return numeroAleatorio;
    }

}

function mostrarSorteado(numero){
    document.getElementById('botaosorteio').setAttribute('disabled',true);
    let sorteado = document.getElementById('resultado');
    listaAmigos.innerHTML = "";
    let tempoRestante = 10; // Tempo total para mostrar o nome (em segundos)
    let nomeSorteado = amigos[numero];

    // Exibe o nome sorteado e a mensagem com o tempo
    sorteado.innerHTML = `<li>${nomeSorteado}</li><p>Memorize o nome sorteado, ele irá sumir em <span id="contador">${tempoRestante}</span> segundos.</p>`;

    // Atualiza o contador a cada segundo
    let interval = setInterval(() => {
        tempoRestante--;
        document.getElementById('contador').textContent = tempoRestante;

        if (tempoRestante <= 0) {
            clearInterval(interval); // Para o intervalo quando o tempo acabar
            sorteado.innerHTML = ""; // Limpa o conteúdo após o tempo
            document.getElementById('botaosorteio').removeAttribute('disabled');
        }
    }, 1000); // Atualiza a cada 1 segundo
 }
}
