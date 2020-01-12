# Semantic-UI-ReactComponents

The only changed from Semantic-UI is JavaScript.

## Table of Contents

- [Elements](#Elements)

----

# Elements

## Button

```js
import * as Button from 'Semantic-UI-ReactComponents/elements/Button'
```

**Shared props**

- varient (string): Additional className
- primary (bool)
- secondary (bool)

### Button.Basic

```js
<Button.Basic varient={'red'}>
  Basic red button
</Button.Basic>
```

- Icon button via `varient`

```js
// import Icon from 'Semantic-UI-ReactComponents/elements/Icon'

<Button.Basic varient={'icon'}>
  <Icon type={'paper plain'} />
</Button.Basic>
```

- Labeled icon button via `varient`

```js
// import Icon from 'Semantic-UI-ReactComponents/elements/Icon'

<Button.Basic varient={'labeled icon'}>
  <Icon type={'pause'} />
  Pause
</Button.Basic>
```

- Basic button via `varient`

```js
<Button.Basic varient={'basic'}>
  The real basic button
</Button.Basic>
```

- Inverted button via `varient`

```js
<Button.Basic varient={'inverted'}>
  Black!
</Button.Basic>
```

### Button.Animated

```js
<Button.Animated varient={'red'} visibleContents={'Visible text'} hiddenContents={'Hidden text'} />
```

### Button.Group

```js
<Button.Group>
  <Button.Basic>One</Button.Basic>
  <Button.Basic>Two</Button.Basic>
  <Button.Basic>Three</Button.Basic>
</Button.Group>
```

- Icon buttons via `varient`

```js
// import Icon from 'Semantic-UI-ReactComponents/elements/Icon'

<Button.Group>
  <Button.Basic><Icon type={'bold'} /></Button.Basic>
  <Button.Basic><Icon type={'underline'} /></Button.Basic>
  <Button.Basic><Icon type={'text width'} /></Button.Basic>
</Button.Group>
```

## Icon

```js
import Icon from 'Semantic-UI-ReactComponents/elements/Icon'

<Icon type={'paper plain'} />
```
