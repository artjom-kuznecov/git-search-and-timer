import React from 'react'
import Button from '../../../../UI/Button/Button'
import Input from '../../../../UI/Input/Input'
import Loupe from '../../../../UI/Loupe/Loupe'

import s from './Header.module.css'

export default function Header({search, setSearch, setInputStorage, fetchCards}) {
  return (
    <header className= {s.h}>
        <Input
        className = {s.i}
        placeholder = "Начните вводить текст для поиска (не менее трех символов)"
        onChange = {e => setSearch(e)}
        value = {search}
        />

      <Button
        className = {s.b} 
        onClick={()=>{
          fetchCards()
          setInputStorage(search)
        }}>
        <Loupe/>
      </Button>
    </header>
  )
}
