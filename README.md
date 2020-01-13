# Semantic-UI-ReactComponents

The only changed from Semantic-UI is JavaScript.

## Table of Contents

- [Elements](#Elements)

---

# Elements

## Button

```js
import Button from 'Semantic-UI-ReactComponents/elements/Button'
```

**Shared props**

- varient (string): Additional className
- primary (bool)
- secondary (bool)

### Button

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

- Icon buttons via `varient`

```js
// import Icon from 'Semantic-UI-ReactComponents/elements/Icon'

<Button.Group>
  <Button>
    <Icon type={'bold'} />
  </Button>
  <Button>
    <Icon type={'underline'} />
  </Button>
  <Button>
    <Icon type={'text width'} />
  </Button>
</Button.Group>
```

## Icon

```js
import Icon from 'Semantic-UI-ReactComponents/elements/Icon'
;<Icon type={'paper plain'} />
```

## Container

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
