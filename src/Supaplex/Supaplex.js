import React from 'react'
import { Layer, Stage, Rect, Circle } from 'react-konva'
import { Button, styled, css } from '@mui/material'
import Murphy from './elements/Murphy'
import useLogic from './useLogic'
const Supaplex = () => {
  const { murphyRef, stageRef } = useLogic()
  return (
    <Stage width={800} height={800} ref={stageRef} tabIndex={0}>
      <Layer>
        <Rect width={800} height={800} fill="black" />
        <Murphy murphyRef={murphyRef} />
      </Layer>
    </Stage>
  )
}

export default Supaplex
