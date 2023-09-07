
import { useContext } from 'react'
import CartItem from '../CartItem/CartItem'
import './Cart.css'
import AppContext from '../../context/AppContext'
import formatCurrency from '../../utils/formatCurrency'

function Cart(){

  const { cartItems, iscartVisible } = useContext(AppContext)

  const totalPrice = cartItems.reduce((acc, item) => {
    return item.price + acc
  }, 0)
  
  return(
    <section className={`cart ${iscartVisible ? 'cart-active' : ''}`}>
     <div className="cart-items">
      {cartItems.map((catItem) => <CartItem key={catItem.id} data={catItem} />)}

      
     </div>
     <div className="cart-resume">Total: {formatCurrency(totalPrice, 'BRL')}</div>
    </section>
  )
}

export default Cart