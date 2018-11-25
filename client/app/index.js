// API do DOM 
// Permite buscar elementos através de seletores CSS

var	campos	=	[
    document.querySelector('#data'),
    document.querySelector('#valor'),
    document.querySelector('#quantidade')
];
console.log(campos);	

// Precisamos de tbody, pois receberá a tr que construiremos
var tbody = document.querySelector('table tbody');

// Função será chamada quando usuário submeter form
document.querySelector('.form').addEventListener('submit', function(event) {
    var tr = document.createElement('tr');
});
