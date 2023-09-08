import React from 'react'

export default function Comment({body, time}) {
  return (
    <div>
        <h1>{time}</h1>
        <div>{body}</div>
    </div>
  )
}
