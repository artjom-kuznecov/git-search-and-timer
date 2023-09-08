import React from 'react'
import s from './Select.module.css'
export default function Select({options, defaultValue, value, onChange}) {
   
    
  return (
    <select
      className={s.se}
      value={value}
      onChange ={ event => onChange(event.target.value)}
    >
        <option disabled value="">{defaultValue}</option>
        {options.map(o => <option key = {o.value} value = {o.value}>{o.name}</option>)}
    </select>
  )
}
