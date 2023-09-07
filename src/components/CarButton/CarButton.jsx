import { AiOutlineShoppingCart } from 'react-icons/ai'

import './CarButton.css'
import { useContext } from 'react'
import AppContext from '../../context/AppContext'


function CarButton() {

  const {cartItems, iscartVisible, setIscartVisible} = useContext(AppContext)
  
  return(
    <button 
      type="button" 
      className="cart__button"
      onClick={() => setIscartVisible(!iscartVisible)}
      >
        <AiOutlineShoppingCart/>
        <span className='cart-status'>{cartItems.length}</span>
      
    {cartItems.length > 0 && <span className='cart-status'>{cartItems.length}</span>}
    </button>
  )
}

export default CarButton