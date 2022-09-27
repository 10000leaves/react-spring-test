import React, { useState } from 'react';
import { config, useSpring, animated } from 'react-spring'

export default function ScrollingList(data) {
  const [flip, set] = useState(false)

  const { scroll } = useSpring({
    scroll: (data.words.length - 1) * 50,
    from: { scroll: 0 },
    reset: true,
    reverse: flip,
    delay: 200,
    config: config.molasses,
    onRest: () => set(!flip),
  })

  return (
    <animated.div
      style={{
        position: 'relative',
        width: '100%',
        height: 60,
        overflow: 'auto',
        fontSize: '0.5em',
      }}
      scrollTop={scroll}>
      {data.words.map((word, i) => (
        <div
          key={`${word}_${i}`}
          style={{ width: '100%', height: 50, textAlign: 'center' }}>
          {word}
        </div>
      ))}
    </animated.div>
  )
}