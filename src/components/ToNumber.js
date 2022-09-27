import React, { useState } from 'react';
import { config, useSpring, animated } from 'react-spring'

export default function ToNumber(data) {
  const [flip, set] = useState(false)
  const { number } = useSpring({
    reset: true,
    reverse: flip,
    from: { number: data.fromNum },
    number: data.toNum,
    delay: 200,
    config: config.molasses,
    onRest: () => set(!flip),
  })

  return <animated.div>{number.to(n => n.toFixed(2))}</animated.div>
}