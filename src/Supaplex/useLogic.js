import { useEffect, useRef, useState } from 'react'
import Konva from 'konva'

const useLogic = () => {
  const murphyRef = useRef(null)
  const stageRef = useRef(null)

  useEffect(() => {
    // const murphy = murphyRef.current

    document.addEventListener('keydown', (e) => moveMurphy(e))
  }, [])

  const moveMurphy = (e) => {
    e.preventDefault()

    if (murphyRef.current.attrs.isAnimated) return

    let direction
    let axis

    if (e.code === 'ArrowDown') {
      direction = 50
      axis = 'y'
    }
    if (e.code === 'ArrowUp') {
      direction = -50
      axis = 'y'
    }
    if (e.code === 'ArrowLeft') {
      direction = -50
      axis = 'x'
    }
    if (e.code === 'ArrowRight') {
      direction = 50
      axis = 'x'
    }

    murphyAnimation(direction, axis)
  }

  const murphyAnimation = (direction, axis) => {
    const murphy = murphyRef.current
    const tween = new Konva.Tween({
      node: murphy,
      duration: 0.4,
      easing: Konva.Easings.Linear,
      [axis]: murphy.attrs[axis] + direction,
      onUpdate: () => murphy.setAttrs({ isAnimated: true }),

      onFinish: () => murphy.setAttrs({ isAnimated: false }),
    })

    tween.play()
  }

  return { murphyRef, stageRef }
}

export default useLogic
