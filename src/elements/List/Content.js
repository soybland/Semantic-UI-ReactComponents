import React from 'react'
import PropTypes from 'prop-types'

const ListContent = props => {
  const { children, varient = '', aligned, floated, ...inheritedProps } = props
  const classes = ['content']

  if (aligned) classes.push(`${aligned} aligned`)
  if (floated) classes.push(`${floated} floated`)

  classes.push(varient.split(' '))

  const classString = classes.join(' ')

  return (
    <div className={classString} {...inheritedProps}>
      {children}
    </div>
  )
}

ListContent.propTypes = {
  children: PropTypes.any,
  varient: PropTypes.string,
  aligned: PropTypes.string,
  floated: PropTypes.string
}

export default ListContent
