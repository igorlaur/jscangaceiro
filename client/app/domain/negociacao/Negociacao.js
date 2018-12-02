// Classe Orientação a Objetos
class Negociacao {
    // Definindo propriedades da classe através de constructor
    constructor(data, quantidade, valor) {
        this._data = data;
        this._quantidade = quantidade;
        this._valor = valor;
        Object.freeze(this); // Congelo os valores
    }

    get volume() {
        return this._quantidade * this._valor;
    }

    get data() {
        // O getTime() de uma data retornará um número long com uma representação da data
        return new Date(this._data.getTime());
    }
    
    get quantidade(){
        return this._quantidade;
    }

    get valor(){
        return this._valor;
    }

    get outroDia(){
        return this._outroDia != _data;
    }
}

