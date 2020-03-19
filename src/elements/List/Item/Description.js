import React from 'react'
import PropTypes from 'prop-types'

const ListItemDescription = props => {
  const { children, varient = '', ...inheritedProps } = props
  const classes = ['description']

  classes.push(varient.split(' '))

  const classString = classes.join(' ')

  return (
    <div className={classString} {...inheritedProps}>
      {children}
    </div>
  )
}

ListItemDescription.propTypes = {
  children: PropTypes.any,
  varient: PropTypes.string
}

export default ListItemDescription
