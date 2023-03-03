import { useId } from 'react'
import { CartIcon, ClearCartIcon } from './Icons'
import './Cart.css'
import { useCart } from '../hooks/useCart'
import { CartItem } from './CartItem'

export function Cart() {
  const { addToCart, cart, clearCart } = useCart()
  const cartCheckboxId = useId()
  return (
    <>
      <label className='cart-button' htmlFor={cartCheckboxId}>
        <CartIcon />
      </label>
      <input id={cartCheckboxId} type='checkbox' hidden />
      <aside className='cart'>
        <ul>
          {cart.map((product) => (
            <CartItem
              key={product.id}
              addToCart={() => addToCart(product)}
              {...product}
            />
          ))}
        </ul>
        <button onClick={clearCart}>
          <ClearCartIcon />
        </button>
      </aside>
    </>
  )
}
