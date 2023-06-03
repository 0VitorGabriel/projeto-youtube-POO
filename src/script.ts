import Video from "./Video";
import Usuario from "./Usuario";
import Visualizacao from "./Visualizacao";

const video0 = new Video('aula 1 de POO')
const video1 = new Video('aula 12 de PHP')
const video2 = new Video('aula 10 de HTML5')

const usuario0 = new Usuario('Jubileu', 22, 'Masculino', 'juba')
const usuario1 = new Usuario('Creuza', 12, 'feminino', 'creuzita')

const visualizacao0 = new Visualizacao(usuario0, video2)

visualizacao0.avaliar()
console.log(visualizacao0.video)

const visualizacao1 = new Visualizacao(usuario0, video1)

visualizacao0.avaliarNota(8)
console.log(visualizacao0.espectador)
console.log(visualizacao0.video)