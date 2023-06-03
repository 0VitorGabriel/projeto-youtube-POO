abstract class Pessoa {
    protected _nome: String  
    protected _idade: Number 
    protected _sexo: String 
    protected _experiencia: Number 

    constructor(nome: String, idade: Number, sexo: String, experiencia: Number) {
        this._nome = nome 
        this._idade = idade 
        this._sexo = sexo 
        this._experiencia = experiencia
    }

    public abstract ganharExperiencia(): void

    public get nome(): String {
        return this._nome
    }

    public set nome(nome: String) {
        this._nome = nome
    }

    public get idade(): Number {
        return this._idade
    }

    public set idade(idade: Number) {
        this._idade = idade
    }

    public get sexo(): String {
        return this._sexo
    }

    public set sexo(sexo: String) {
        this._sexo = sexo
    }

    public get experiencia(): Number {
        return this._experiencia
    }

    public set experiencia(experiencia: Number) {
        this._experiencia = experiencia
    }

}

export default Pessoa