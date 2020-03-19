import React from 'react'
import PropTypes from 'prop-types'

const List = props => {
  const {
    children,
    varient = '',
    listInList,
    bulleted,
    ordered,
    link,
    horizontal,
    inverted,
    selection,
    animated,
    relaxed,
    divided,
    celled,
    size,
    floated,
    ...inheritedProps
  } = props
  const classes = ['list']

  if (!listInList) classes.unshift('ui')
  if (bulleted) classes.push('bulleted')
  if (ordered) classes.push('ordered')
  if (link) classes.push('link')
  if (horizontal) classes.push('horizontal')
  if (inverted) classes.push('inverted')
  if (selection) classes.push('selection')
  if (animated) classes.push('animated')
  if (divided) classes.push('divided')
  if (celled) classes.push('celled')
  if (size) classes.push(size)
  if (floated) classes.push(`${floated} floated`)

  if (relaxed) {
    if (typeof relaxed === 'string') {
      classes.push(relaxed)
    }
    classes.push('relaxed')
  }

  classes.push(varient.split(' '))

  const classString = classes.join(' ')

  return (
    <div className={classString} {...inheritedProps}>
      {children}
    </div>
  )
}

List.propTypes = {
  children: PropTypes.any,
  varient: PropTypes.string,
  listInList: PropTypes.bool,
  bulleted: PropTypes.bool,
  ordered: PropTypes.bool,
  link: PropTypes.bool,
  horizontal: PropTypes.bool,
  inverted: PropTypes.bool,
  selection: PropTypes.bool,
  animated: PropTypes.bool,
  relaxed: PropTypes.oneOfType([PropTypes.bool, PropTypes.string]),
  divided: PropTypes.bool,
  celled: PropTypes.bool,
  size: PropTypes.string,
  floated: PropTypes.string
}

export default List
