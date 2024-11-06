function pesquisar() {
  
  // Seleciona a seção onde os resultados serão exibidos
  let section = document.getElementById("resultados-pesquisa");

  let campoPesquisa = document.getElementById ("campo-pesquisa");
  console.log(campoPesquisa);

  // Limpa a seção antes de adicionar novos resultados
  section.innerHTML = "";

  // Itera sobre os dados da pesquisa
  for (let dado of dados) {
    // Cria o HTML para cada item da pesquisa
    let resultadoHTML = `
      <div class="item-resultado">
        <h2>
          <a href="#" target="_blank">${dado.titulo}</a>
        </h2>
        <p class="descricao-meta">${dado.descricao} </p>
        <a href=${dado.link} target="_blank">Mais informações</a>
      </div>
    `;
    // Adiciona o resultado à seção
    section.innerHTML += resultadoHTML;
  }
}





     



