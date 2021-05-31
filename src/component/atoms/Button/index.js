/**
 * atom button
 */

import React, { memo, useMemo, useRef } from 'react'

import './index.scss'

const ANIME_DURATION = 280

const Button = props => {
  const btnRef = useRef(null)

  const handleClick = (e) => {
    e.stopPropagation()

    if (props.params) {
      props.onClick(props.params)
    } else if (props.onClick) props.onClick(e)

    if (props.getRef) {
      props.getRef(btnRef)
    }
  }

  const className = useMemo(() => {
    const arr = []
    props.disabled && arr.push('disabled')
    props.round && arr.push('round')
    props.icon && arr.push('icon')
    props.wrap && arr.push('wrap')

    props.color && arr.push(props.color)

    props.size && arr.push(props.size)

    return arr.reduce((cn, type) => {
      cn += ` button--${ type }`

      return cn
    }, 'button')
  }, [ props.color, props.size, props.disabled, props.round, props.icon, props.wrap ])

  const customClass = useMemo(() => {
    if (props.classNames) return ` ${props.classNames}`
    return ''
  }, [props.classNames])

  return (
    <button
      type="button"
      className={ `${className}${customClass}` }
      disabled={ props.disabled }
      onClick={ handleClick }
      style={ props.styleParams }
      ref={ btnRef }
    >
      { props.children }
    </button>
  )
}

export default Button
