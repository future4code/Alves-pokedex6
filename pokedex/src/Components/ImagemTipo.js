import Bug from '../IMG/Bug.png'
import Fire from '../IMG/Fire.png'
import Flying from '../IMG/Flying.png'
import Grass from '../IMG/Grass.png'
import Normal from '../IMG/normal.png'
import Poison from '../IMG/Poison.png'
import Water from '../IMG/Water.png'


export default function ImagemTipo (tipo)  {
    switch (tipo) {
        case 'bug':
            return Bug
        case 'fire':
            return Fire
        case 'flying':
            return Flying
        case 'grass':
            return Grass
        case 'normal':
            return Normal
        case 'poison':
            return Poison
        case 'water':
            return Water
    }
}