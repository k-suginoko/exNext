import React, { FC, memo, useState, useEffect, useRef, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux'
// types
import { RouteState } from 'types'
// actions
import { setCount } from 'modules/textModules'
// components
import Button from '../component/atoms/Button/';
// styles
import '../styles/about.scss'

const selector = (state: RouteState) => ({ test: state.test })

const About:FC = memo(({

}) => {
  const dispatch = useDispatch()
  const { test } = useSelector(selector)

  const handleCountUp = useCallback(() => {
    const count = test.count || 0
    dispatch(setCount(count + 1))
  }, [ test.count ])

  useEffect(() => {
    console.log('test', test)
  }, [ test ])

  return <div className="about">
    <p className="test">カウントしてstore保存からの数字更新するのを実験的につくるお</p>
    <Button onClick={ handleCountUp }>カウント</Button>
    <div>カウント数：{ test.count }</div>
  </div>
})

export default About
