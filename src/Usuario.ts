import IUsuario from "./IUsuario";
import Pessoa from "./Pessoa";

class Usuario extends Pessoa implements IUsuario {
    private _login: String 
    private _videosAssistidos: Number

    constructor(nome: String, idade: Number, sexo: String, login: String) {
        super(nome, idade, sexo)

        this._login = login 
        this._videosAssistidos = 0
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