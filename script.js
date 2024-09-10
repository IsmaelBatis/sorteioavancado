// Adiciona um ouvinte de evento ao botão com id 'sorteioButton'.
// QUando o botão é clicado, a função anônima é executada.
document.getElementById('sorteioButton').addEventListener('click', function () {

    // Obter valores das Entradas
    // 'TotalNumeros' recebe o valor do input com ID 'TotalNumeros' Convertido para número inteiro.
    let totalNumeros = parseInt(document.getElementById('totalNumeros').value);

    // 'quantidadeSorteio' recebe o valor do input com ID 'quantidadeSorteio' convertido para número inteiro.
    let quantidadeSorteio = parseInt(document.getElementById('quantidadeSorteio').value);

    //'numeroSorteio' recebe o valor do input com ID 'numeroSorteio' convertido para número inteiro.
    let numeroSorteios = parseInt(document.getElementById('numeroSorteios').value);

    // Seleciona o elemento que exibirá os resutados.
    let resultadoDiv = document.getElementById('resultado');

    // Limpa os resultados anteriores caso existam.
    resultadoDiv.innerHTML = '';

    // Validação das entradas.
    // Verifica se as estradas são números válidos se 'totalNumeros' e 'quantidadeSorteio' são maiores que 0, se 'quantidadeSorteio' não é maior que 'totlNumeros', e se 'numeroSorteios' é maior que 0
    if (isNaN(totalNumeros) || totalNumeros <= 0 || isNaN(quantidadeSorteio) || quantidadeSorteio <= 0 || quantidadeSorteio > totalNumeros || isNaN(numeroSorteios) || numeroSorteios <= 0) {

        // se algum validação falhar, exibe uma mensagem de erro no 'reultadoDiv'.
        resultadoDiv.innerHTML = 'por favor, insira valores válidos.';

        // Interrompe a execução da função
        return;
    }

    // Funçãopara gerar um único sorteio
    function gerarSorteio() {

        // Inicializa um array vazio que armazenará os  números sorteados.
        let numeros = [];

        // Loop que continua até que o número especificado de 'QuantidadeSorteio' seja sorteados.
        while (numeros.length < quantidadeSorteio) {

            // Gera um número aleatório entre 1 e o valor de 'totalNumeros'.
            let numeroAleatorio = Math.floor(Math.random() * totalNumeros) * 1;

            //verifia se o número aleatório ainda não foi sorteado.
            // Se o número ainda não está no array 'numeros', ele é adicionado.
            if (!numeros.includes(numeroAleatorio)) {
                numeros.push(numeroAleatorio);
            }
        }

        // Ordena o array 'numeros' em ordm crescente.
        numeros.sort(function(a, b) {
            return a - b;
        });

        // Retoma o array 'numeros' ordenado.
        return numeros;
    }

    // Gerar sorteio e exibi-los.
    // Loop que gera o número de sorteios especificados por 'numeroSorteios'.
    for (let i = 0; i < numeroSorteios; i++) {

        // Chama a função 'gerarSorteio' para obter um array de números sorteados.
        let numerosSorteados = gerarSorteio();

        // Cria um povo elemento 'div' para exibir os números sorteados.
        let sorteioDiv = document.createElement('div');

        // Define a classe CSS do 'div' como 'Sorteio' para estilização.
        sorteioDiv.className = 'sorteio';

        // Define a classe CSS do 'div' como 'Sorteio' para estilização.
        sorteioDiv.innerText = `Sorteio ${i + 1}: ${numerosSorteados.join(',')}`;

        // Adiciona o 'div' com o resultado do sorteio ao 'resultadoDiv'.
        resultadoDiv.appendChild(sorteioDiv);
    }
})