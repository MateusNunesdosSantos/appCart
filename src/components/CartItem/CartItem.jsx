import {BsCartDashFill} from 'react-icons/bs'
import propTypes from 'prop-types'

import './CartItem.css'
import formatCurrency from '../../utils/formatCurrency'
import { useContext } from 'react'
import AppContext from '../../context/AppContext'

function CartItem({data}) {

const { cartItems, setCartItems} = useContext(AppContext)
const {id, thumbnail, price, title} = data

const handleRemoveItem = () => {
  const updatedItems = cartItems.filter((item) => item.id != id)
  setCartItems(updatedItems)
}

  return(
    <section className="cart-item">
      <img src={thumbnail} alt="Imagem do produto" className="cart-item-image" />
      <div className="cart-item-content">
        <h3 className="cart-item-title">{title}</h3>
        <h3 className="cart-item-price">{formatCurrency(price, 'BRL')}</h3>

        <button 
          type="button" 
          className="button_remove_item"
          onClick={ handleRemoveItem }
          >
          <BsCartDashFill/>
        </button>
      </div>
    </section>
  )
}

export default CartItem


CartItem.propTypes = {
  data: propTypes.object
}.isRequired