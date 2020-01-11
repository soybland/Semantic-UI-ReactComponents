import React from 'react'
import PropTypes from 'prop-types'

const AnimatedButton = props => {
  const { children, animation, hiddenContents, visibleContents, ...inheritedProps } = props

  let classes = 'ui animated button'

  if (props.primary) classes += ' primary'
  if (props.secondary) classes += ' secondary'

  classes += ' ' + (animation || '')

  return (
    <div className={classes} {...inheritedProps} tabIndex={0}>
      <div className={'visible content'}>
        {visibleContents}
      </div>
      <div className={'hidden content'}>
        {hiddenContents}
      </div>

      {children}
    </div>
  )
}

AnimatedButton.propTypes = {
  children: PropTypes.any,
  animation: PropTypes.string,
  visibleContents: PropTypes.any,
  hiddenContents: PropTypes.any
}

export default AnimatedButton
