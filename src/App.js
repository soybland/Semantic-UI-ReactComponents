import React from 'react'

import Button from './elements/Button'
import Icon from './elements/Icon'
import Container from './elements/Container'
import Divider from './elements/Divider'
import Placeholder from './elements/Placeholder'
import Header from './elements/Header'
import Image from './elements/Image'
import Input from './elements/Input'
import List from './elements/List'
import Loader from './elements/Loader'
import Rail from './elements/Rail'

const App = () => {
  return (
    <div>
      <Container>
        <Divider hidden />
        <Button variant='red'>Red button</Button>
        <Divider hidden />
        <Button animated variant='red'>
          <Button.Visible>Animated button</Button.Visible>
          <Button.Hidden>Peekaboo!</Button.Hidden>
        </Button>
        <Divider hidden />
        <Button varient='red' onClick={() => alert("And this will happen!")}>
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
        <Divider />
        <Header>
          This is called header!
          <Header sub>and this is sub one!</Header>
        </Header>
        <Divider />
        <Header>Image with img tag</Header>
        <Image
          src='https://semantic-ui.com/images/wireframe/image.png'
          size='small'
        />
        <Divider hidden />
        <Header>Image with div and img tag</Header>
        <Image size='small'>
          <img
            src='https://semantic-ui.com/images/wireframe/image.png'
            alt=''
          />
        </Image>
        <Divider hidden />
        <Header>Image with a and img tag</Header>
        <Image href='/' size='small'>
          <img
            src='https://semantic-ui.com/images/wireframe/image.png'
            alt=''
          />
        </Image>
        <Divider />
        <Header>Normal input</Header>
        <Input>
          <input type='text' placeholder='Search...' />
        </Input>
        <Divider hidden />
        <Header>Input with icon</Header>
        <Input icon>
          <input type='text' placeholder='Search...' />
          <Icon type='search' />
        </Input>
        <Divider hidden />
        <Header>Normal List</Header>
        <List>
          <List.Item>Apple</List.Item>
          <List.Item>Pears</List.Item>
          <List.Item>Oranges</List.Item>
        </List>
        <Divider hidden />
        <Header>Normal List with Icon</Header>
        <List>
          <List.Item>
            <Icon type='users' />
            <List.Content>Users</List.Content>
          </List.Item>
        </List>
        <Divider hidden />
        <Header>Loader</Header>
        <div>
          <Loader active size='big' inline />
        </div>
        <Divider hidden />
        <Header>Rail</Header>
        <div>
          <Rail left>
            <Placeholder.Group>
              <Placeholder line />
              <Placeholder line />
            </Placeholder.Group>
          </Rail>
          <Rail right>
            <Placeholder.Group>
              <Placeholder line />
              <Placeholder line />
            </Placeholder.Group>
          </Rail>
          <Placeholder.Group>
            <Placeholder line />
            <Placeholder line />
            <Placeholder line />
            <Placeholder line />
            <Placeholder line />
            <Placeholder line />
            <Placeholder line />
            <Placeholder line />
          </Placeholder.Group>
        </div>
        <Divider hidden />
      </Container>
    </div>
  )
}

export default App
