import React from 'react'

export default function Input({onChange, ...props}) {
  return (
    <input {...props} onChange ={e => onChange(e.target.value)}/>
  )
}
