let pessoas =[
    {nome: 'Victor', telefone: 21935484773},
    {nome: 'Michelle', telefone: 31974450073},
    {nome: 'Augusto', telefone: 32197998407},
    {nome: 'José', telefone: 56154454075},
    {nome: 'Valter', telefone: 65197458473},
    {nome: 'Joana', telefone: 41944488575},
    {nome: 'Rodrigo', telefone: 88734849731},
    {nome: 'Renata', telefone: 81975584072}
];

let tabela = document.querySelector('#tabela-usuarios');

window.onload = criaTabela(pessoas);
    
function criaTabela(listaPessoas){
    listaPessoas.forEach((pessoa) => {
        
        let tr = document.createElement("tr");
        tr.classList.add('usuario');

        let tdNome = document.createElement("td");
        tdNome.classList.add('info-nome');
        
        let tdTelefone = document.createElement("td");
        tdTelefone.classList.add('info-telefone');

        tdNome.textContent = pessoa.nome;
        tdTelefone.textContent = pessoa.telefone;

        tr.appendChild(tdNome);
        tr.appendChild(tdTelefone);

        tabela.appendChild(tr);
        
    })
}
