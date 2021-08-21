import React, { useContext } from 'react'
import { CountdownCircleTimer } from 'react-countdown-circle-timer'
import { SettingsContext } from '../context/SettingContext'

const CountdownAnimaiton = (key = 1, timer = 20, animate = true, children) => {
  const { stopAnimate  } = useContext(SettingsContext);
  
  return (
    <div>
      <CountdownCircleTimer
        key={key}
        isPlaying={animate}
        duration={timer * 60}
        colors = {[['#fe6f6b', 0.33]]}
        strokeWidth={6}
        trailColor="#151932"
        onComplete={() => {
          stopAnimate()
        }}
        >
        {children}
      </CountdownCircleTimer>
    </div>
  )
}

export default CountdownAnimaiton
