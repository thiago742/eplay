import Button from '../Button'
import {
  CartContainer,
  CartItem,
  Overlay,
  Prices,
  Quantity,
  Sidebar
} from './styles'
import Tag from '../Tag'
import { useDispatch, useSelector } from 'react-redux'
import { RootReducer } from '../../store'

import { close, remove } from '../../store/reducers/cart'
import { formataPreco } from '../ProductsList'

const Cart = () => {
  const { isOpen, items } = useSelector((state: RootReducer) => state.cart)

  const dispatch = useDispatch()

  const closeCart = () => {
    dispatch(close())
  }

  const getTotalPrice = () => {
    return items.reduce((acumulador, valorAtual) => {
      return (acumulador += valorAtual.prices.current!)
    }, 0)
  }

  const removeItem = (id: number) => {
    dispatch(remove(id))
  }

  return (
    <CartContainer className={isOpen ? 'is-open' : ''}>
      <Overlay onClick={closeCart} />
      <Sidebar>
        <ul>
          {items.map((bosta) => (
            <CartItem key={bosta.id}>
              <img src={bosta.media.thumbnail} alt={bosta.name} />
              <div>
                <h3>{bosta.name}</h3>
                <Tag>{bosta.details.category}</Tag>
                <Tag>{bosta.details.system}</Tag>
                <span>{formataPreco(bosta.prices.current)}</span>
              </div>
              <button onClick={() => removeItem(bosta.id)} type="button" />
            </CartItem>
          ))}
        </ul>
        <Quantity>{items.length} jogo(s) no carrinho</Quantity>
        <Prices>
          Total de {formataPreco(getTotalPrice())}
          <span>Em até 6x sem juros</span>
        </Prices>
        <Button
          type={'button'}
          title={'clique aqui para continuar com a compra'}
        >
          Continuar com a compra
        </Button>
      </Sidebar>
    </CartContainer>
  )
}
export default Cart
