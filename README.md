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
<Button.Basic varient={'icon'}>
  <i className='paper plain icon'></i>
</Button.Basic>
```

### Button.Animated

```js
<Button.Animated varient={'red'} visibleContents={'Visible text'} hiddenContents={'Hidden text'} />
```
