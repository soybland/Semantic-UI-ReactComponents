import React from 'react'
import PropTypes from 'prop-types'

const Detail = props => {
  const { children, variant = '', href, ...inheritedProps } = props
  const classes = ['detail']

  let Component = 'div'

  classes.push(variant.split(' '))

  const classString = classes.join(' ')

  if (href) Component = 'a'

  return (
    <Component className={classString} href={href} {...inheritedProps}>
      {children}
    </Component>
  )
}

Detail.propTypes = {
  children: PropTypes.any,
  variant: PropTypes.string,
  href: PropTypes.string
}

export default Detail
