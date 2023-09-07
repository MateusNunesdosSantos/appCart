import CarButton from "../CarButton/CarButton"
import SearchBar from "../SearchBar/SearchBar"

import  './Header.css'

function Header() {
  return (
    <header className="header">
      <div className="container">
        <SearchBar />
        <CarButton />
      </div>
    </header>
  )
}

export default Header