import Head from 'next/head'
import Image from 'next/image'
import { CountdownCircleTimer } from 'react-countdown-circle-timer'
import SetPomodoro from '../components/SetPomodoro'
import SettingContextProvider from '../context/SettingContext'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <SettingContextProvider>
      <div className="container">
        <h1> Pomodoro</h1>
        <small> Be productive righ away</small>
       <SetPomodoro/>

      </div>
    </SettingContextProvider>
  )
}
