import ProductsList from '../../components/ProductsList'
import Game from '../../models/Game'

import re4 from '../../assets/images/resident.png'
import diablo from '../../assets/images/diablo.png'
import zelda from '../../assets/images/zelda.png'
import starwars from '../../assets/images/star_wars.png'

const promocoes: Game[] = [
  {
    id: 1,
    category: 'Action',
    description: 'Resident Evil 4, a survival horror game.',
    title: 'Resident Evil 4',
    system: 'Windows, PS5',
    infos: ['10%', 'R$180,00'],
    image: re4
  },
  {
    id: 2,
    category: 'Action',
    description: 'Resident Evil 4, a survival horror game.',
    title: 'Diablo IV',
    system: 'Windows, PS5',
    infos: ['10%', 'R$180,00'],
    image: diablo
  },
  {
    id: 3,
    category: 'Action',
    description: 'Resident Evil 4, a survival horror game.',
    title: 'Zelda Tears of the Kingdom',
    system: 'Windows, PS5',
    infos: ['10%', 'R$180,00'],
    image: zelda
  },
  {
    id: 4,
    category: 'Action',
    description: 'Resident Evil 4, a survival horror game.',
    title: 'Star Wars Jedi Survivor',
    system: 'Windows, PS5',
    infos: ['10%', 'R$180,00'],
    image: starwars
  }
]

const emBreve: Game[] = [
  {
    id: 5,
    category: 'Action',
    description: 'Resident Evil 4, a survival horror game.',
    title: 'Resident Evil 4',
    system: 'Windows, PS5',
    infos: ['10%', 'R$180,00'],
    image: re4
  },
  {
    id: 6,
    category: 'Action',
    description: 'Resident Evil 4, a survival horror game.',
    title: 'Diablo IV',
    system: 'Windows, PS5',
    infos: ['10%', 'R$180,00'],
    image: diablo
  },
  {
    id: 7,
    category: 'Action',
    description: 'Resident Evil 4, a survival horror game.',
    title: 'Zelda Tears of the Kingdom',
    system: 'Windows, PS5',
    infos: ['10%', 'R$180,00'],
    image: zelda
  },
  {
    id: 8,
    category: 'Action',
    description: 'Resident Evil 4, a survival horror game.',
    title: 'Star Wars Jedi Survivor',
    system: 'Windows, PS5',
    infos: ['10%', 'R$180,00'],
    image: starwars
  }
]

const Categories = () => (
  <>
    <ProductsList games={promocoes} title="Aventura" background="gray" />
    <ProductsList games={emBreve} title="Ação" background="black" />
    <ProductsList games={promocoes} title="RPG" background="gray" />
    <ProductsList games={emBreve} title="FPS" background="black" />
  </>
)

export default Categories
