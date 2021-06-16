import React, { FC, memo, useState, useEffect, useRef, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import Image from 'next/image'
// types
import { RootState } from 'types'
// actions
import { setCount } from 'modules/textModules'
// components
import Button from '../component/atoms/Button/';
// styles
import '../styles/about.scss'


const selector = (state: RootState) => ({ test: state.test })

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

    <p>画像を配置1</p>
    <Image
      src={"/vercel.svg"}
      alt="Picture of the author"
      width={200}
      height={200}
    />

    <p>画像を配置2</p>
    <img src={ `/vercel.svg` } />
  </div>
})

export default About
