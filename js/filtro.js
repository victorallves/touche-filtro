let campoBuscar = document.querySelector('#campo-busca');

campoBuscar.addEventListener("input", function(){

  if(this.value.length > 0 ){
    let valorImput = this.value.toLowerCase();

    let expNome = new RegExp (`\\D`, 'g').test(valorImput);

    let expTelefone = new RegExp (`\\d`, 'g').test(valorImput);
  
    let usuariosFiltrados;
    
    if(expNome){
      usuariosFiltrados = pessoas.filter((pessoa) => 
      pessoa.nome.toLowerCase().startsWith(valorImput));
  
      let tabelaAntiga = document.querySelectorAll('.usuario');

      for(let i = 0; i < tabelaAntiga.length; i++)
      {
         tabelaAntiga[i].remove();
      }
      
      criaTabela(usuariosFiltrados);
      
    }
    
    if(expTelefone){
      usuariosFiltrados = pessoas.filter((pessoa) => 
      pessoa.telefone.toString().startsWith(valorImput));
      
      tabelaAntiga = document.querySelectorAll('.usuario');

      for(let i = 0; i < tabelaAntiga.length; i++)
      {
         tabelaAntiga[i].remove();
      }

      criaTabela(usuariosFiltrados);
        
    }

  }  
  else {
    criaTabela(pessoas);  
  }

})
