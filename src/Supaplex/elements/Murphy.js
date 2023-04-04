import { Circle } from 'react-konva'

const Murphy = ({ murphyRef }) => (
  <Circle
    x={200}
    y={200}
    fill="red"
    radius={25}
    ref={murphyRef}
    isAnimated={false}
  />
)

export default Murphy
