import React, { useEffect, useState } from 'react'
import "./DateTime.scss"
function DateTime() {
  const [now, setNow] = useState(new Date())

  useEffect(() => {
    const timerId = setInterval(() => {
      setNow(new Date())
    }, 1000)

    return () => clearInterval(timerId)
  }, [])

  const date = new Intl.DateTimeFormat('en-US', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  }).format(now)

  const time = new Intl.DateTimeFormat('en-US', {
    hour: 'numeric',
    minute: '2-digit',
    second: '2-digit',
    hour12: true,
  }).format(now)

  return (
    <div className='date&time' >
      <div>{date} &nbsp; &nbsp; {time}</div>
    </div>
  )
}

export default DateTime
