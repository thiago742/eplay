import { useDispatch } from 'react-redux'
import { Game } from '../../pages/Home'
import Button from '../Button'
import Tag from '../Tag'
import * as S from './styles'
import { add } from '../../store/reducers/cart'
import { parseToBrl } from '../../utils'

type Props = {
  game: Game
}

const Hero = ({ game }: Props) => {
  const dispatch = useDispatch()

  const addToCart = () => {
    dispatch(add(game))
  }
  return (
    <S.Banner style={{ backgroundImage: `url(${game.media.cover})` }}>
      <div className="container">
        <div>
          <Tag>{game.details.category}</Tag>
          <Tag>{game.details.system}</Tag>
        </div>
        <S.Infos>
          <h2>{game.name}</h2>
          <p>
            {game.prices.discount && (
              <span>De {parseToBrl(game.prices.old)}</span>
            )}
            {game.prices.current && <> Por {parseToBrl(game.prices.current)}</>}
          </p>
          {game.prices.current && (
            <Button
              variant="primary"
              type="button"
              title="clique aqui para adicionar esse jogo no carrinho"
              onClick={addToCart}
            >
              Adicionar ao carrinho
            </Button>
          )}
        </S.Infos>
      </div>
    </S.Banner>
  )
}
export default Hero
