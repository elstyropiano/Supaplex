import Supaplex from './Supaplex/Supaplex'
import { Button } from '@mui/material'
import { styled, css } from '@mui/system'
const Wrapper = styled('div')(css`
  width: 100vw;
  background: black;
`)
function App() {
  return (
    <Wrapper>
      <Supaplex />
    </Wrapper>
  )
}

export default App
