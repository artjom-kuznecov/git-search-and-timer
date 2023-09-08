import React, { useContext } from 'react'
import ReactSlider from 'react-slider';
import { SettingsContext } from '../../context/SettingsContext';

import s from './Setting.module.css'

export default function Settings({setIsPaused, isPausedRef}) {
    const settingsInfo = useContext(SettingsContext)
    
  return (
    <div className={s.wrapper}>
        <div className={s.text}>Работа: {settingsInfo.workMinutes}</div>
        <ReactSlider
            className = {s.slider}
            thumbClassName = {s.th}
            trackClassName = {s.tr}
            value = {settingsInfo.workMinutes}
            min = {1}
            max = {120}

            onChange = {newValue => {
              settingsInfo.setWorkMinutes(newValue)
              setIsPaused(true)
              isPausedRef.current = true
            } }

        />
        <div className={s.text}>Отдых: {settingsInfo.breakMinutes}</div>
        <ReactSlider
            className = {s.slider}
            thumbClassName = {s.th}
            trackClassName = {s.tr}
            value = {settingsInfo.breakMinutes}
            min = {1}
            max = {120}

            onChange = {newValue => {
              settingsInfo.setBreakMinutes(newValue)
              setIsPaused(true)
              isPausedRef.current = true
            }}
        />
    </div>
  )
}
