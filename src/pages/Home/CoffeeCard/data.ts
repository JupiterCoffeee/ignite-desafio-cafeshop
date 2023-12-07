import Americano from '../../../assets/Americano.png'
import Arabe from '../../../assets/Arabe.png'
import CafeComLeite from '../../../assets/Cafe-com-Leite.png'
import CafeGelado from '../../../assets/Cafe-Gelado.png'
import Capuccino from '../../../assets/Capuccino.png'
import ChocolateQuente from '../../../assets/Chocolate-Quente.png'
import Cubano from '../../../assets/Cubano.png'
import ExpressoCremoso from '../../../assets/Expresso-Cremoso.png'
import Expresso from '../../../assets/Expresso.png'
import Havaiano from '../../../assets/Havaiano.png'
import Irlandes from '../../../assets/Irlandes.png'
import Latte from '../../../assets/Latte.png'
import Macchiato from '../../../assets/Macchiato.png'
import Mochaccino from '../../../assets/Mochaccino.png'

export const data = [
    {
        id: '1',
        title: 'Expresso Tradicional',
        description: 'O tradicional café feito com água quente e grãos moídos',
        banner: `${Expresso}`,
        tag: [
            'TRADICIONAL',
        ],
        price: '9.90',
        amount: 0
    },
    {
        id: '2',
        title: 'Expresso Americano',
        description: 'Expresso diluído, menos intenso que o tradicional',
        banner: `${Americano}`,
        tag: [
            'TRADICIONAL',
        ],
        price: '9.90'
    },
    {
        id: '3',
        title: 'Expresso Cremoso',
        description: 'Café expresso tradicional com espuma cremosa',
        banner: `${ExpressoCremoso}`,
        tag: [
            'TRADICIONAL',
        ],
        price: '9.90'
    },
    {
        id: '4',
        title: 'Expresso Gelado',
        description: 'Bebida preparada com café expresso e cubos de gelo',
        banner: `${CafeGelado}`,
        tag: [
            'TRADICIONAL',
            'GELADO'
        ],
        price: '9.90'
    },
    {
        id: '5',
        title: 'Café com Leite',
        description: 'Meio a meio de expresso tradicional com leite vaporizado',
        banner: `${CafeComLeite}`,
        tag: [
            'TRADICIONAL',
            'COM LEITE'
        ],
        price: '9.90'
    },
    {
        id: '6',
        title: 'Latte',
        description: 'Uma dose de café expresso com o dobro de leite e espuma cremosa',
        banner: `${Latte}`,
        tag: [
            'TRADICIONAL',
            'COM LEITE'
        ],
        price: '9.90'
    },
    {
        id: '7',
        title: 'Capuccino',
        description: 'Bebida com canela feita de doses iguais de café, leite e espuma',
        banner: `${Capuccino}`,
        tag: [
            'TRADICIONAL',
            'COM LEITE'
        ],
        price: '9.90'
    },
    {
        id: '8',
        title: 'Macchiato',
        description: 'Café expresso misturado com um pouco de leite quente e espuma',
        banner: `${Macchiato}`,
        tag: [
            'TRADICIONAL',
            'COM LEITE'
        ],
        price: '9.90'
    },
    {
        id: '9',
        title: 'Mocaccino',
        description: 'Café expresso com calda de chocolate, pouco leite e espuma',
        banner: `${Mochaccino}`,
        tag: [
            'TRADICIONAL',
            'COM LEITE'
        ],
        price: '9.90'
    },
    {
        id: '10',
        title: 'Chocolate Quente',
        description: 'Bebida feita com chocolate dissolvido no leite quente e café',
        banner: `${ChocolateQuente}`,
        tag: [
            'ESPECIAL',
            'COM LEITE'
        ],
        price: '9.90'
    },
    {
        id: '11',
        title: 'Cubano',
        description: 'Drink gelado de café expresso com rum, creme de leite e hortelã',
        banner: `${Cubano}`,
        tag: [
            'TRADICIONAL',
            'ALCOÓLICO',
            'GELADO',
        ],
        price: '9.90'
    },
    {
        id: '12',
        title: 'Havaiano',
        description: 'Bebida adocicada preparada com café e leite de coco',
        banner: `${Havaiano}`,
        tag: [
            'ESPECIAL',
        ],
        price: '9.90'
    },
    {
        id: '13',
        title: 'Árabe',
        description: 'Bebida preparada com grãos de café árabe e especiarias',
        banner: `${Arabe}`,
        tag: [
            'ESPECIAL',
        ],
        price: '9.90'
    },
    {
        id: '14',
        title: 'Irlândes',
        description: 'Bebida a base de café, uísque irlandês, açúcar e chantilly',
        banner: `${Irlandes}`,
        tag: [
            'ESPECIAL',
            'ALCOÓLICO',
        ],
        price: '9.90'
    },
]