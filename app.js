let amigos = [];

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
        console.log(amigos);//para conferir o array
        listaDeAmigos();//chamando a função listaDeAmigos

        //limpar input
        document.querySelector('input').value = "";
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

// function sortearAmigo(){

// }
   
   
}