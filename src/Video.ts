import AcoesVideo from "./AcoesVideo";

class Video implements AcoesVideo {
    private _titulo: String 
    private _avaliacao: String
    private _views: Number 
    private _curtidas: Number 
    private _reproduzindo: Boolean

    constructor(titulo: String, avaliacao: String, views: Number, curtidas: Number, reproduzindo: Boolean) {
        this._titulo = titulo 
        this._avaliacao = avaliacao 
        this._views = views 
        this._curtidas = curtidas
        this._reproduzindo = reproduzindo 
    }

    play(): void {
        if (!this.reproduzindo) {
            this.reproduzindo = true
        } else {
            console.log('o video deve ser pausado para dar play')
        }
    }

    pause(): void {
        if (this.reproduzindo) {
            this.reproduzindo = false
        } else {
            console.log('o video deve estar rodando para pausar')
        }
    }

    like(): void {
        this.curtidas = Number(this.curtidas) + 1
    }

    public get titulo(): String {
        return this._titulo;
    }

    public set titulo(titulo: String) {
        this._titulo = titulo;
    }

    public get avaliacao(): String{
        return this._avaliacao;
    }

    public set avaliacao(avaliacao: String) {
        this._avaliacao = avaliacao;
    }

    public get views(): Number {
        return this._views;
    }

    public set views(views: Number) {
        this._views = views;
    }

    public get curtidas(): Number {
        return this._curtidas;
    }

    public set curtidas(curtidas: Number) {
        this._curtidas = curtidas;
    }

    public get reproduzindo(): Boolean {
        return this._reproduzindo;
    }

    public set reproduzindo(reproduzindo: Boolean) {
        this._reproduzindo = reproduzindo;
    }

}

export default Video