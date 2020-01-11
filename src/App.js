import React from 'react'

import * as Button from './elements/Button'

const App = props => {
  return (
    <Button.Animated
      visibleContents={'Visible contents'}
      hiddenContents={'Hidden contents'}
    />
  )
}

export default App
