import React from 'react'

import Button from './elements/Button'
import Container from './elements/Container'
import Divider from './elements/Divider'
import Placeholder from './elements/Placeholder'

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
        <Divider />
        Placeholders
        <Placeholder.Group>
          <Placeholder image header>
            <Placeholder line />
            <Placeholder line />
          </Placeholder>
          <Placeholder paragraph>
            <Placeholder line />
            <Placeholder line />
            <Placeholder line />
          </Placeholder>
        </Placeholder.Group>
        <Divider hidden />
        Inverted placeholders
        <Placeholder.Group inverted>
          <Placeholder line />
          <Placeholder line />
          <Placeholder line />
        </Placeholder.Group>
        <Divider hidden />
        Fluid placeholders
        <Placeholder.Group fluid>
          <Placeholder line />
          <Placeholder line />
          <Placeholder line />
        </Placeholder.Group>
      </Container>
    </div>
  )
}

export default App
