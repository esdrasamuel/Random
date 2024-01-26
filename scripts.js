function sortearNumero() {
    // Obter os valores mínimos e máximos dos inputs
    var min = parseInt(document.getElementById('minInput').value);
    var max = parseInt(document.getElementById('maxInput').value);
  
    // Verificar se os valores são válidos
    if (isNaN(min) || isNaN(max) || min >= max) {
      alert('Por favor, insira valores válidos (min menor que max).');
      return;
    }
  
    // Gerar um número aleatório dentro do intervalo [min, max]
    var numeroSorteado = Math.floor(Math.random() * (max - min + 1)) + min;
  
    // Exibir o resultado no input-value
    document.getElementById('resultadoInput').value = numeroSorteado;
  }
  
  // Adicionar um ouvinte de evento ao botão
  document.addEventListener('DOMContentLoaded', function () {
    document.getElementById('sortearBotao').addEventListener('click', sortearNumero);
  
    // Adicionar ouvintes de evento de mudança aos campos de entrada
    document.getElementById('minInput').addEventListener('change', limparResultado);
    document.getElementById('maxInput').addEventListener('change', limparResultado);
  });
  
  // Função para limpar o resultado
  function limparResultado() {
    document.getElementById('resultadoInput').value = '';
  }
  