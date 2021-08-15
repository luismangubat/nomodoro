import React, { createContext, useState } from 'react'

export const SettingContext = createContext();

const SettingContextProvider = (props) => {

  const [pomodoro, setPomodoro] = useState(0);
  const [executing, setExecuting] = useState({});
  const [startAnimate, setStartAnimate] = useState(false);
  

  function setCurrentTimer(active_state) {
    updateExecture({
      ...executing,
      active: active_state
    })
    setTimerTimer(executing)
  }
  function startTimer() {
    setStartAnimate(true)
  }

    
  function stopTimer() {
    setStartAnimate(false)
  }

  function pausTimer(){
    setStartAnimate(false)
  }

  const SettingBtn = () => {
    setExecuting({})
    setPomodoro(0)
  }

  const updateExecute = (updatedSettings) => {
    setExecuting(updatedSettings)
    setTimerTimer(updatedSettings)
  }

  const seTimerTime = evaluate => {
    switch(evaluate.active) {
      case 'work':
        setPomodoro(evaluate.work)
        break;
      case 'short':
        setPomodoro(evaluate.short)
        break;
      case 'long':
        setPomodoro(evaluate.long)
        break;
      default:
        setPomodoro(0);
        break;

    }
  }
  return (
    <SettingContext.Provider value ={{stopTimer, updateExecute}}>
      {props.children}
    </SettingContext.Provider>
  )
};

export default SettingContextProvider;
