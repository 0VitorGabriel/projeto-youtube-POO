import Usuario from "./Usuario";
import Video from "./Video";

class Visualizacao {
    private _espectador: Usuario
    private _video: Video 

    constructor(espectador: Usuario, video: Video) {
        this._espectador = espectador 
        this._video = video
        this._espectador.videosAssistidos = Number(this._espectador.videosAssistidos) + 1
        this._video.views = Number(this._video.views) + 1
    }

    public avaliar(): void {
        this.video.avaliacao = 5
    }

    public avaliarNota(nota: Number): void {
        this.video.avaliacao = nota
    }

    public avaliarPorcentagem(porcentagem: Number): void {
        let nota: Number
        
        if (Number(porcentagem) <= 20) {
            nota = 3
        } else if (Number(porcentagem) <= 50) {
            nota = 5
        } else if (Number(porcentagem) <= 90) {
            nota = 8
        } else {
            nota = 10
        }

        this.video.avaliacao = nota
    }

    public get espectador(): Usuario {
        return this._espectador
    }

    public set espectador(espectador: Usuario) {
        this._espectador = espectador
    }

    public get video(): Video {
        return this._video
    }

    public set video(video: Video) {
        this._video = video
    }

}

export default Visualizacao