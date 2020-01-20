# Semantic-UI-ReactComponents

The only changed from Semantic-UI is JavaScript.

## Table of Contents

- [Elements](#Elements)
  - [Button](#Button)
  - [Icon](#Icon)
  - [Container](#Container)
  - [Divider](#Divider)
  - [Placeholder](#Placeholder)
  - [Header](#Header)
  - [Flag](#Flag)
  - [Image](#Image)

---

# Elements

**Shared props**

- variant (string): Additional className

For example, if you want red button, add `red` to variant property.

```js
<Button variant={'red'}>Basic red button</Button>
```

## Button

```js
import Button from 'Semantic-UI-ReactComponents/elements/Button'
```

### Variants

```js
<Button variant={'red'}>Basic red button</Button>
```

- Icon button

```js
// import Icon from 'Semantic-UI-ReactComponents/elements/Icon'

<Button icon>
  <Icon type={'paper plain'} />
</Button>
```

- Labeled icon button

```js
// import Icon from 'Semantic-UI-ReactComponents/elements/Icon'

<Button labeled icon>
  <Icon type={'pause'} />
  Pause
</Button>
```

- Basic button

```js
<Button basic>The real basic button</Button>
```

- Inverted button

```js
<Button inverted>Black!</Button>
```

- Animated button

```js
<Button.Animated variant={'red'}>
  <Button.Visible>Visible content</Button.Visible>
  <Button.Hidden>Hidden content</Button.Hidden>
</Button.Animated>
```

### Button.Group

```js
<Button.Group>
  <Button>One</Button>
  <Button>Two</Button>
  <Button>Three</Button>
</Button.Group>
```

- Icon button

```js
// import Icon from 'Semantic-UI-ReactComponents/elements/Icon'

<Button.Group>
  <Button icon>
    <Icon type={'bold'} />
  </Button>
  <Button icon>
    <Icon type={'underline'} />
  </Button>
  <Button icon>
    <Icon type={'text width'} />
  </Button>
</Button.Group>
```

## Icon

```js
import Icon from 'Semantic-UI-ReactComponents/elements/Icon'
```

### Variants

```js
<Icon type={'paper plain'} />
```

## Container

```js
import Container from 'Semantic-UI-ReactComponents/elements/Container'
```

### Variants

```js
<Container>Contained</Container>
```

- Text Container

```js
<Container text>Contained</Container>
```

- Aligned Container

```js
<Container align='right(or center, left, justified)'>Contained</Container>
```

- Fluid Container

```js
<Container fluid>Contained</Container>
```

## Divider

```js
import Divider from 'Semantic-UI-ReactComponents/elements/Divider'
```

### Variants

```js
<Divider />
```

- Hidden Divider

```js
<Divider hidden />
```

- Vertical Divider

```js
<Divider vertical />
```

- Horizontal Divider

```js
<Divider horizontal />
```

- Fitted Divider

```js
<Divider fitted />
```

- Setion Divider

```js
<Divider setion />
```

- Clearing Divider

```js
<Divider clearing />
```

## Placeholder

```js
import Placeholder from 'Semantic-UI-ReactComponents/elements/Placeholder'
```

### Variants

- Basic placeholder

```js
<Placeholder />
```

- Linear placeholder

```js
<Placeholder line />
```

- Square (1:1 aspect ratio) placeholder (for image)

```js
<Placeholder square image />
```

- Rectangular (4:3 aspect ratio) placeholder (for image)

```js
<Placeholder rectangular image />
```

- Image header placeholder

```js
<Placeholder image header>
  <Placeholder line />
  <Placeholder line />
</Placeholder>
```

- Paragraph placeholder

```js
<Placeholder paragraph>
  <Placeholder line />
  <Placeholder line />
  <Placeholder line />
  <Placeholder line />
  <Placeholder line />
</Placeholder>
```

- Linear placeholder lengths

```js
<Placeholder full line />
<Placeholder veryLong line />
<Placeholder long line />
<Placeholder medium line />
<Placeholder short line />
<Placeholder veryShort line />
```

### Placeholder.Group

- Basic placeholder group

```js
<Placeholder.Group>
  <Placeholder line />
  <Placeholder line />
  <Placeholder line />
</Placeholder.Group>
```

- Inverted placeholder group

```js
<Placeholder.Group inverted>
  <Placeholder line />
  <Placeholder line />
  <Placeholder line />
</Placeholder.Group>
```

- Active placeholder group

```js
<Placeholder.Group active>
  <Placeholder line />
  <Placeholder line />
  <Placeholder line />
</Placeholder.Group>
```

- Fluid placeholder group

```js
<Placeholder.Group fluid>
  <Placeholder line />
  <Placeholder line />
  <Placeholder line />
</Placeholder.Group>
```

## Header

```js
import Header from 'Semantic-UI-ReactComponents/elements/Header'
```

### Variants

- Content headers (considered as page headers)

```js
<Header huge>Huge header</Header>
<Header large>Large header</Header>
<Header medium>Medium header</Header>
<Header small>Small header</Header>
<Header tiny>Tiny header</Header>
```

- Icon headers

```js
// import Icon from 'Semantic-UI-ReactComponents/elements/Icon'

<Header icon>
  <Icon type={'settings'} />
  <Header.Content>
    Account Settings
    <Header sub>
      Manage your account settings and set e-mail preferences.
    </Header>
  </Header.Content>
</Header>
```

- Sub headers

```js
<Header sub>
Price
</Header>
<span>$19.99</span>
```

- Subheaders

```js
<Header>
  Account Settings
  <Header.Sub>
    Manage your account settings and set e-mail preferences.
  </Header.Sub>
</Header>
```

- Disabled headers

```js
<Header disabled>
  Disabled header
</Header>
```

- Dividing headers

```js
<Header dividing>
Dividing header
</Header>
```

- Block headers

```js
<Header block>
Block header
</Header>
```

- Attached headers

```js
<Header top attached>
  Top attached
</Header>
<Header attached>
  Attached
</Header>
<Header bottom attached>
  Bottom attached
</Header>
```

- Floating headers

```js
<Header right floated>
  Go forward
</Header>
<Header left floated>
  Go back
</Header>
```

- Inverted headers

```js
<Header inverted>
  Inverted!
</Header>
```

### Text alignment

```js
<Header right aligned>
  Right
</Header>
<Header left aligned>
  Left
</Header>
<Header justified>
  This should take up the full width even if only one line
</Header>
<Header center aligned>
  Center>
</Header>
```

### Colored

- Colored headers via `variants`

```js
<Header variant={'red'}>Red</Header>
<Header variant={'orange'}>Orange</Header>
<Header variant={'yellow'}>Yellow</Header>
<Header variant={'olive'}>Olive</Header>
<Header variant={'green'}>Green</Header>
<Header variant={'teal'}>Teal</Header>
<Header variant={'blue'}>Blue</Header>
<Header variant={'purple'}>Purple</Header>
<Header variant={'violet'}>Violet</Header>
<Header variant={'pink'}>Pink</Header>
<Header variant={'brown'}>Brown</Header>
<Header variant={'grey'}>Grey</Header>
```

## Flag

```js
import Flag from 'Semantic-UI-ReactComponents/elements/Flag'
```

### Variants

```js
<Icon country={'kr'} />
```

## Image

```js
import Image from 'Semantic-UI-ReactComponents/elements/Image'
```

### Variants

- Normal image

```js
<Image src="https://semantic-ui.com/images/wireframe/image.png" alt="sample" />
```

- Image link

```js
<Image src="https://semantic-ui.com/images/wireframe/image-text.png" href="https://google.com/" alt="sampleToGoogle" />
```

- Hidden image

```js
<Image ... hidden />
```

- Avatar image

```js
<Image ... avatar />
```

- Bordered image

```js
<Image ... bordered />
```

- Fluid image

```js
<Image ... fluid />
```

- Rounded image

```js
<Image ... rounded />
```

- Circular image

```js
<Image ... circular />
```

- Vertically aligned image

```js
<Image ... aligned='vertically' />
```

- Cenetered image

```js
<Image ... centered />
```

- Spaced image

```js
<Image ... spaced='right' />
```

- Floated image

```js
<Image ... floated />
```

### Image sizes

```js
<Image ... size='mini' />
<Image ... size='tiny' />
<Image ... size='small' />
<Image ... size='medium' />
<Image ... size='large' />
<Image ... size='big' />
<Image ... size='huge' />
<Image ... size='massive' />
```

### Image group

```js
<Image.Group size='tiny'>
  <Image ... />
  <Image ... />
  <Image ... />
</Image.Group>
```

## Label

```js
import Label from 'Semantic-UI-ReactComponents/elements/Label'
```

### Variants

- Normal label (with Icon)

```js
// import Icon from 'Semantic-UI-ReactComponents/elements/Icon'

<Label>
  <Icon type='paper plain' /> 23
</Label>
```

- Image label

In the official Semantic-UI documentation, it didn't take up `ui image` class names.

```js
<Label image>
  <img src="https://semantic-ui.com/images/avatar/small/joe.jpg" />
</Label>
```

- Pointing label

```js
// MISSING COMPONENT: FORM

<Label ... pointing>
  Please enter a value
</Label>
<Label ... pointing='right'>
  Please enter a value
</Label>
```

- Label at `corner`

```js
// import Image from 'Semantic-UI-ReactComponents/elements/Image'
// import Icon from 'Semantic-UI-ReactComponents/elements/Icon'

<Image ... fluid>
  <Label corner='left'>
    <Icon type='paper plain' />
  </Label>
  <img src="https://semantic-ui.com/images/wireframe/image.png" />
</Image>
<Image ... fluid>
  <Label corner='right'>
    <Icon type='paper plain' />
  </Label>
  <img src="https://semantic-ui.com/images/wireframe/image.png" />
</Image>
```

- Tagged label

```js
<Label tag>New</Label>
```

- Ribon label

```js
// MISSING COMPONENT: FORM
// MISSING COMPONENT: SEGMENT

<Label ribbon='right'>Specs</Label>
```

- Attached label

```js
<Label attached='top'>Top attached label</Label>
<Label attached='bottom'>Bottom attached label</Label>
<Label attached='right'>Right attached label</Label>
<Label attached='left'>Left attached label</Label>
```

- Horizontal label

```js
<Label horizontal variant='red'>Fruit</Label>
```

- Floating label

```js
// MISSING COMPONENT: MENU

<div class='item'>
  Some menu item
  <Label floating>
    22
  </Label>
</div>
```

- Detailed label

```js
<Label>
  Dogs
  <Label.Detail>234</Label.Detail>
</Label>
```

- Icon label

```js
// import Icon from 'Semantic-UI-ReactComponents/elements/Icon'

<Label>
  <Icon type='paper plain' />
</Label>
```

- Image label

```js
// import Image from 'Semantic-UI-ReactComponents/elements/Image'

<Label>
  <Image avatar spaced='right' ... />
  Elliot
</Label>
```

- Linked label

```js
<Label href='https://google.com/'>
  Google!
</Label>
```

- Circular label

```js
<Label circular>
  1
</Label>
```

- Basic label

```js
<Label basic ...>
  Basic
</Label>
```

- Colored label via `variant`

```js
<Label basic variant='red'>
  Red basic label! Also, it is colored.
</Label>
```

### Label sizes

```js
<Label ... size='mini'>Mini</Label>
<Label ... size='tiny'>Tiny</Label>
<Label ... size='small'>Small</Label>
<Label ... size='medium'>Medium</Label>
<Label ... size='large'>Large</Label>
<Label ... size='big'>Big</Label>
<Label ... size='huge'>Huge</Label>
<Label ... size='massive'>Massive</Label>
```

### Label group

- Tagged label group

```js
<Label.Group tag>
  /* Labels */
</Label.Group>
```

- Circular label group

```js
<Label.Group circular>
  /* Labels */
</Label.Group>
```

- Colored label group via `variant`

```js
<Label.Group variant='blue'>
  /* Labels */
</Label.Group>
```
