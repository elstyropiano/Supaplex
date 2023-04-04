import { useEffect, useRef, useState } from 'react'

const useLogic = () => {
  const murphyRef = useRef(null)
  const stageRef = useRef(null)

  useEffect(() => {
    const murphyData = murphyRef.current

    document.addEventListener('keydown', moveMurphy)
  }, [])

  const moveMurphy = (e) => {
    e.preventDefault()
    if (e.code === 'ArrowDown') {
      console.log('arrowDown')
    }
    if (e.code === 'ArrowUp') {
      console.log('ArrowUp')
    }
    if (e.code === 'ArrowLeft') {
      console.log('ArrowLeft')
    }
    if (e.code === 'ArrowRight') {
      console.log('ArrowRight')
    }
  }

  const clickMurphy = (e) => {
    const murphy = e.target
    const tween = new Konva.Tween({
      node: murphy,
      duration: 0.5,
      easing: Konva.Easings.EaseInOut,
      x: murphy.attrs.x + 50,
    })
    console.log(e.target)
    console.log('kliknieto w murphiego')
    tween.play()
  }

  return { murphyRef, stageRef }
}

export default useLogic
