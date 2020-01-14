# Semantic-UI-ReactComponents

The only changed from Semantic-UI is JavaScript.

## Table of Contents

- [Elements](#Elements)
  - [Button](#Button)
  - [Icon](#Icon)
  - [Container](#Container)
  - [Divider](#Divider)
  - [Placeholder](#Placeholder)

---

# Elements

**Shared props**

- varient (string): Additional className

## Button

```js
import Button from 'Semantic-UI-ReactComponents/elements/Button'
```

### Varients

```js
<Button varient={'red'}>Basic red button</Button>
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
<Button.Animated varient={'red'}>
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

### Varients

```js
<Icon type={'paper plain'} />
```

## Container

```js
import Container from 'Semantic-UI-ReactComponents/elements/Container'
```

### Varients

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

### Varients

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

### Varients

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
