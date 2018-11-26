// API do DOM 
// Permite buscar elementos através de seletores CSS

var	campos	=	[
    document.querySelector('#data'),
    document.querySelector('#valor'),
    document.querySelector('#quantidade')
];
console.log(campos); // Verificando o conteúdo do array

// Precisamos de tbody, pois receberá a tr que construiremos
var tbody = document.querySelector('table tbody');

// Função será chamada quando usuário submeter form
document.querySelector('.form').addEventListener('submit', function(event) {
    
    // Cancelando a submissão do formulário
    event.preventDefault();
    
    // Cria uma TR 
    var tr = document.createElement('tr');

    campos.forEach(function(campo) {

        // Cria uma TD sem informações
        var td = document.createElement('td');

        // Atribui o valor do campo à TD
        td.textContent = campo.value;

        // Adiciona a TD na TR
        tr.appendChild(td);
    });

    // Nova TD que armazenará o volume da negociação
    var tdVolume = document.createElement('td');

    // As posições 1 e 2 do array armazenam os campos de quantidade e valor, respectivamente
    tdVolume.textContent = campos[1].value * campos[2].value; // valor campo1 * campo2

    // Adicionando a TD que faltava à TR
    tr.appendChild(tdVolume);

    // Agora que já	temos a	 tr	completa, podemos adicioná-la em
    // tbody. Nosso	código até este	ponto deve estar assim: 
    tbody.appendChild(tr);

    // Limpar campos do formulário ao efetuar novo cadastro
    // Limpa campo da data
    campos[0].value = '';
    // Limpa campo da quantidade 
    campos[1].value = '1';
    // Limpa o campo do valor
    campos[2].value = 0;
    // Foca no campo da data
    campos[0].focus();
});
