import Pessoa from "./Pessoa";

class Usuario extends Pessoa {
    private _login: String 
    private _videosAssistidos: Number

    constructor(nome: String, idade: Number, sexo: String, experiencia: Number,login: String, videosAssistidos: Number) {
        super(nome, idade, sexo, experiencia)

        this._login = login 
        this._videosAssistidos = videosAssistidos
    }

    public verMaisVideos(): void {
        this.videosAssistidos = Number(this.videosAssistidos) + 1
    }

    public ganharExperiencia(): void {
        this.experiencia = Number(this.experiencia) + 5
    }

    public get login(): String {
        return this._login
    }

    public set login(login: String) {
        this._login = login
    }

    public get videosAssistidos(): Number {
        return this._videosAssistidos
    }

    public set videosAssistidos(videosAssistidos: Number) {
        this._videosAssistidos = videosAssistidos
    }

}

export default Usuario