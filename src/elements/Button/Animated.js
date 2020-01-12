import React from 'react'
import PropTypes from 'prop-types'

const AnimatedButton = props => {
  const { children, varient, primary, secondary, animation, hiddenContents, visibleContents, ...inheritedProps } = props

  let classes = 'ui animated button'

  if (props.primary) classes += ' primary'
  if (props.secondary) classes += ' secondary'

  classes += ' ' + (animation || '')
  classes += ' ' + (varient || '')

  return (
    <a className={classes} {...inheritedProps} tabIndex={0}>
      <div className={'visible content'}>
        {visibleContents}
      </div>
      <div className={'hidden content'}>
        {hiddenContents}
      </div>

      {children}
    </a>
  )
}

AnimatedButton.propTypes = {
  children: PropTypes.any,
  varient: PropTypes.string,
  primary: PropTypes.bool,
  secondary: PropTypes.bool,
  animation: PropTypes.string,
  visibleContents: PropTypes.any,
  hiddenContents: PropTypes.any
}

export default AnimatedButton
