import {Ponto} from "./Points"
import { Quadri } from "./Quadrilater"

let pontoA = new Ponto(0, 10)
let pontoB = new Ponto(16, 0)
let pontoC = new Ponto(9, 4)
let pontoD = new Ponto(14, 7)
let pontoE = new Ponto(18, 8)

let Quad = new Quadri( pontoA,pontoB )

console.log(Quad.Area(pontoC)? "O Ponto C é pertencente a esse Quadrilátero": "O Ponto C não é pertencente a esse Quadrilátero")

console.log(Quad.Area(pontoD)? "O Ponto D é pertencente a esse Quadrilátero": "O Ponto D não é pertencente a esse Quadrilátero")

console.log(Quad.Area(pontoE)? "O Ponto E é pertencente a esse Quadrilátero": "O Ponto E não é pertencente a esse Quadrilátero")




