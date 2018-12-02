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
        return this._data;
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

