import React, { useState } from 'react'

import {CardService} from '../../API/CardService'
import { useLocalStorage } from '../../hooks/useLocalStorage'

import Loader from '../../UI/Loader/Loader'
import Header from './components/Header/Header'
import Cards from './components/Cards/Cards'
import Footer from './components/Footer/Footer'

import s from './GitSearch.module.css'


function GitSearch() {

  const [inputStorage, setInputStorage] = useLocalStorage('', 'input')
  const [cardsStorage, setCardsStorage] = useLocalStorage([], 'cards')
  const [pageStorage, setPageStorage] = useLocalStorage(1, 'page')

  const [cards, setCards] = useState(cardsStorage ||[])
  const [loading, setLoading] = useState(false)

  const [currentPage, setCurrnetPage] = useState(pageStorage)

  const [cardsPerPage, setCardsPerPage] = useState(6)

  const [search, setSearch] = useState(inputStorage || '')

  

  async function fetchCards () {
    setLoading(true)
    const cards = await CardService.getAll(search)
    
    setCardsStorage(cards)
    setCards(cards)
    
    
    setLoading(false)
  }



  const nextPage = () => setCurrnetPage(prev => prev+1)
  const prevPage = () => setCurrnetPage(prev => prev-1)

  const lastCardIndex = currentPage * cardsPerPage
  const firstCardIndex = lastCardIndex - cardsPerPage
  const currentCard = cards.slice(firstCardIndex, lastCardIndex)

  const paginate = (pageNum) => {
    setPageStorage(pageNum)
    setCurrnetPage(pageNum)
  }

  
  
  return (
    <div className= {s.wrapper}>

      <Header 
        search = {search} 
        fetchCards = {fetchCards} 
        setSearch = {setSearch} 
        setInputStorage = {setInputStorage}
      />

      {loading 
        ? <Loader/>
        : 
           (
            <div style={{'padding': '35px'}} > 
              <Cards cards = {currentCard} setCards = {setCards}/>

              <Footer
              cardsPerPage = {cardsPerPage}
              setCardsPerPage = {setCardsPerPage}
              currentPage = {currentPage}
              cards = {cards}
              paginate = {paginate}
              nextPage = {nextPage}
              prevPage = {prevPage}
              />
            </div>
      
     )
    }
  </div>   
)}

export default GitSearch;