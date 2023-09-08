import React from 'react'
import Pagintion from '../../../../UI/Pagination/Pagintion'
import Select from '../../../../UI/Select/Select'

import s from './Footer.module.css'

export default function Footer({cardsPerPage, setCardsPerPage, currentPage, cards, paginate, nextPage, prevPage}) {
  const [disable, setDisable] = React.useState(false);
  return (
    <footer className={s.fo}>
        <Select
            value={cardsPerPage}
            onChange = {num => setCardsPerPage(num)}
            defaultValue = "Показывать по"
            options={[
                {value : '6', name: '6'},
                {value : '10', name: '10'},
                {value : '15', name: '15'},
            ]}
        />

        <Pagintion 
            disable = {disable}
            setDisable = {setDisable}
            currentPage = {currentPage} 
            cardsPerPage={cardsPerPage}
            totalCards = {cards.length}
            paginate = {paginate}
            nextPage = {nextPage}
            prevPage = {prevPage}
        />
        <div className={s.z}></div>
    </footer>
  )
}
