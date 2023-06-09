import Ivideo from "./IVideo";

class Video implements Ivideo {
    private _titulo: String
    private _avaliacao: Number
    private _views: Number
    private _curtidas: Number
    private _reproduzindo: Boolean

    constructor(titulo: String) {
        this._titulo = titulo
        this._avaliacao = 1
        this._views = 0
        this._curtidas = 0
        this._reproduzindo = false
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
        return this._titulo
    }

    public set titulo(titulo: String) {
        this._titulo = titulo
    }

    public get avaliacao(): Number {
        return this._avaliacao
    }

    public set avaliacao(avaliacao: Number) {
        let media: Number = (Number(this.avaliacao) + Number(avaliacao)) / Number(this.views)

        this._avaliacao = media
    }

    public get views(): Number {
        return this._views
    }

    public set views(views: Number) {
        this._views = views
    }

    public get curtidas(): Number {
        return this._curtidas
    }

    public set curtidas(curtidas: Number) {
        this._curtidas = curtidas
    }

    public get reproduzindo(): Boolean {
        return this._reproduzindo;
    }

    public set reproduzindo(reproduzindo: Boolean) {
        this._reproduzindo = reproduzindo;
    }

}

export default Video