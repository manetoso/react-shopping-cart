import { useCart } from '../hooks/useCart'
import { useFilters } from '../hooks/useFilters'
import './Footer.css'

export function Footer() {
  const { filter } = useFilters()
  const { cart } = useCart()
  return (
    <footer className='footer'>
      {/* <h4>
        Prueba Tecnica de react * -<span> Emma</span>
      </h4>
      <h5>Shopping Cart con useContext & useReducer</h5> */}
      <p>
        Filter: {JSON.stringify(filter, null, 2)}
      </p>
      <p>
        Cart: {JSON.stringify(cart, null, 2)}
      </p>
    </footer>
  )
}
