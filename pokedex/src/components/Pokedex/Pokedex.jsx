import PokemonList from "../PokemonList/PokemonList"
import Search from "../Search/Search"

// css import
import './Pokedex.css'

const Pokedex = () => {

  return (
    <div className="pokedex-wrapper">
      <Search />
      <PokemonList />
    </div>
  )
}

export default Pokedex