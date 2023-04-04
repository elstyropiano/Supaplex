import React from 'react'
import Konva from 'konva'
import { Circle } from 'react-konva'
const Murphy = ({ murphyRef }) => {
  return (
    <Circle
      x={200}
      y={200}
      fill="red"
      radius={50}
      onClick={(e) => clickMurphy(e)}
      ref={murphyRef}
    />
  )
}

export default Murphy
