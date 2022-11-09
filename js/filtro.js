let campoBuscar = document.querySelector('#campo-busca');

function limpaTabela(){
  let tabelaAntiga = document.querySelectorAll('.usuario');

  for(let i = 0; i < tabelaAntiga.length; i++)
  {
     tabelaAntiga[i].remove();
  }
}

campoBuscar.addEventListener("input", function(){

  if(this.value.length > 0 ){
    let valorImput = this.value.toLowerCase();

    const texto = isNaN(+valorImput)?true:false

    let usuariosFiltrados;
    
    if(texto){
      usuariosFiltrados = pessoas.filter((pessoa) => 
      pessoa.nome.toLowerCase().startsWith(valorImput));
  
     limpaTabela();
      
      criaTabela(usuariosFiltrados);
      
    }
    
    if(!texto){
      usuariosFiltrados = pessoas.filter((pessoa) => 
      pessoa.telefone.toString().startsWith(valorImput));
      
      limpaTabela();
 
      criaTabela(usuariosFiltrados);
        
    }

  }  
  else {
    limpaTabela();
    criaTabela(pessoas);  
  }

})

