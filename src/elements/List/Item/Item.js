import React from 'react'
import PropTypes from 'prop-types'

const ListItem = props => {
  const { children, varient = '', value, href, ...inheritedProps } = props
  let Component = 'div'
  const classes = ['item']

  if (typeof href === 'string') {
    Component = 'a'
  }

  classes.push(varient.split(' '))

  const classString = classes.join(' ')

  return (
    <Component
      className={classString}
      data-value={value}
      href={href}
      {...inheritedProps}
    >
      {children}
    </Component>
  )
}

ListItem.propTypes = {
  children: PropTypes.any,
  varient: PropTypes.string,
  value: PropTypes.string,
  href: PropTypes.string
}

export default ListItem
