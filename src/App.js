import React ,{useState,useEffect} from 'react';
import logo from './logo.svg';
import './App.css';
import './components/styles/main.scss'
import Header from './components/ui/Header'
import Footer from './components/ui/Footer'

import Search from './components/core/Search'
import CharacterGrid from './components/core/CharacterGrid'
 import axios from 'axios'

const  App = () => {
  const [items,setItems] = useState([])
  const [isLoading,setIsLoading] = useState(true)
  const [query,setQuery] = useState('')



  useEffect(() => {
    const fetchItems  = async () => {
    const result = await axios.get(`https://www.breakingbadapi.com/api/characters?name=${query}`)
      // console.log(result.data)
      console.log(result.data)
    setItems(result.data)
    setIsLoading(false)
    }
    fetchItems()
  },[query])
  return (
    <main>
    <Header />
    <div className="container maps">
      <Search getQuery={(q) => setQuery(q)}/>
      <CharacterGrid isLoading={isLoading} items={items} />
    </div>
    <Footer />
    </main>
  );
}

export default App;
