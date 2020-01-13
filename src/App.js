import React from 'react'

import Button from './elements/Button'
import Container from './elements/Container'
import Divider from './elements/Divider'

const App = () => {
  return (
    <div>
      <Container>
        <Divider hidden />
        <Button varient='red'>Red button</Button>
        <Divider hidden />
        <Button animated varient='red'>
          <Button.Visible>Animated button</Button.Visible>
          <Button.Hidden>Peekaboo!</Button.Hidden>
        </Button>
        <Divider hidden />
        <Button varient='red' onClick={() => alert("And This'll happen!")}>
          Click this
        </Button>
        <Divider />
        <Container>Basic container</Container>
        <Divider hidden />
        <Container text>Text container</Container>
        <Divider hidden />
        <Container align='center'>Center aligned container</Container>
        <Divider hidden />
        <Container fluid>Fluid container</Container>
      </Container>
    </div>
  )
}

export default App
