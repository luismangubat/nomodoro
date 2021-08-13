import Head from 'next/head'
import Image from 'next/image'
import SetPomodoro from '../components/SetPomodoro'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className="container">
      <h1> Pomodoro</h1>
      <small> Be productive righ away</small>
      <SetPomodoro/>
    </div>
  )
}
