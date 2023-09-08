import React, { useState } from 'react'
import Button from '../Button/Button'
import s from './Pagination.module.css'


export default function Pagintion({currentPage, cardsPerPage, totalCards, paginate, nextPage, prevPage}) {
    const pages = []
    const [nextBtnDisable, setNextBtnDisable] = useState(false);
    const [prevBtnDisable, setPrevBtnDisable] = useState(false);
    
    for (let i = 1; i<= Math.ceil(totalCards/cardsPerPage); i++) {
      pages.push(i)
  }
    
    
   
    
    
  return (
    <div>
      

        <div className={s.pag}>
        <Button className={s.item} onClick = {() => {   
            (currentPage===pages[1])? setPrevBtnDisable(true): setNextBtnDisable(false); 
            setNextBtnDisable(false)    
            prevPage()    
              
              
        }} disabled = {prevBtnDisable}>
        <div className={s.pre} style={{width: '24px', height: '24px'}} ></div>
        </Button>
          {
            pages.map (num => (
              <div className={currentPage === num ? `${s.item} ${s.active}`: s.item} key = {num} onClick = {e => {
                paginate(+e.target.outerText);
              }}>
                {num}  
              </div>
            ))
          }
          
          <Button className={s.item} onClick = {() =>{
            (currentPage===pages.length-1)? setNextBtnDisable(true): setNextBtnDisable(false); 
            setPrevBtnDisable(false)
            nextPage();
            
            
            
          }}disabled = {nextBtnDisable}>
            
           <div className={s.nex} style={{width: '24px', height: '24px'}}></div>
          </Button>
        </div>
    </div>
  )
}
