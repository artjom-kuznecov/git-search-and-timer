import React from 'react'
import {SettingsContext} from './context/SettingsContext'
import Timer from './components/Timer/Timer.jsx'

import {useLocalStorage} from '../../hooks/useLocalStorage'

export default function PomodoroTimer() {

  
  const [workMinutes, setWorkMinutes] = useLocalStorage(45, "work")
  const [breakMinutes, setBreakMinutes] = useLocalStorage(15, "break")

  return (
    <div>
        <SettingsContext.Provider value={{
        workMinutes,
        breakMinutes,
        setWorkMinutes,
        setBreakMinutes
      }}>
          <Timer/>
        </SettingsContext.Provider>
    </div>
  )
}
