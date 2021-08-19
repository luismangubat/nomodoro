import Head from 'next/head'
import Image from 'next/image'
import SetPomodoro from '../components/SetPomodoro'

import styles from '../styles/Home.module.css'
import { useContext } from 'react'
import Button from '../components/Button'
import CountdownAnimaiton from '../components/CountdownAnimaiton'
import { SettingsContext } from '../context/SettingContext';

export default function Home() {
  const { 
    pomodoro, 
    executing, 
    setCurrentTimer, 
    children,
    startAnimate,
    startTimer,
    pauseTimer } = useContext(SettingsContext)
  return (
    <SettingContextProvider>
      <div className="container">
        <h1> Pomodoro</h1>
        <small> Be productive righ away</small>
        {pomodoro == 0 ?
          <SetPomodoro /> :
          <>
            <ul className="labels">
              <li>
                <Button
                  title="Work"
                  activeClass={executing.active === 'work' && 'active-label'}
                  _callback={() => setCurrentTimer('work')}
                />
              </li>
              <li>
                <Button
                  title="Short Break"
                  activeClass={executing.active === 'work' && 'active-label'}
                  _callback={() => setCurrentTimer('short')}
                />
              </li>
              <li>
                <Button
                  title="Long Break"
                  activeClass={executing.active === 'work' && 'active-label'}
                  _callback={() => setCurrentTimer('long')}
                />
              </li>
            </ul>
            <Button title="Setting" _callback={SettingBtn}/>
            <div className="time-container">
              <div className="time-wrapper">
                <CountdownAnimaiton
                key={pomodoro}
                timer={pomodoro}
                animate={startAnimate}>
                  {children}
                </CountdownAnimaiton>
              </div>
            </div>
            <div className="button-wrapper">
              <Button title="Start" className={!startAnimate && 'active'} _callback={startTimer} />
              <Button title="Start" className={startAnimate && 'active'} _callback={pauseTimer} />
            </div>
          </>
        }
      </div>
    </SettingContextProvider>
  )
}
