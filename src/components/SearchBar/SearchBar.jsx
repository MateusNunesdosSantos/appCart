import { BsSearch } from 'react-icons/bs'

import './SearchBar.css'
import { useContext, useState } from 'react';
import fetchProducts from '../../api/fetchProdutos';
import AppContext from '../../context/AppContext';


function SearchBar() {

  const {setProducts, setLoading} = useContext(AppContext)
  const [searchValue, setSearchValue] = useState('')


  const handleSearch = async (e) => {
    e.preventDefault()
    setLoading(true)

    const products = await fetchProducts(searchValue)
    
    setProducts(products)
    setLoading(false)
    setSearchValue('')
  }

  return (
    <form className='search-bar' onSubmit={handleSearch}>
    <input 
      type="search"
      value={searchValue} 
      placeholder="Buscar Produtos"
      className="search_input"
      onChange={({target}) =>setSearchValue(target.value)}
      required
    />
    
    <button type="submit" className="search_button">
      <BsSearch/>
    </button>
  </form>
  );
}


export default SearchBar