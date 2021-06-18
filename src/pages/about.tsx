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
  const [ value, setValue ] = useState({})

  const changeInput = (val: string, key: string) => {
    setValue({ [key]: val })
  }

  const handleCountUp = useCallback(() => {
    const count = test.count || 0
    dispatch(setCount(count + 1))
  }, [ test.count ])

  const handleApi = async () => {
    const result = await fetch(
      '/test.php',
      {
        method: 'post',
        body: JSON.stringify(value),
        headers: {
          'Content-Type': 'application/json'
        }
      }
    )
    .then(response => response.json())
    .then(data => console.log(data))

    console.log('api test', result)
  }

  useEffect(() => {
    console.log('test', test)
  }, [ test ])

  console.log('value', value)

  return <div className="about">
    <p className="test">カウントしてstore保存からの数字更新するのを実験的につくるお</p>
    <Button onClick={ handleCountUp }>カウント</Button>
    <div>カウント数：{ test.count }</div>

    <div className="api">
      <input type="test" value={ value?.text || '' } onChange={ (e) => changeInput(e.target.value, 'text') } />
      <Button onClick={ handleApi }>api叩けるのか確認</Button>
    </div>

    <p>画像確認配置1(NextJS Image)</p>
    <Image
      src={"/vercel.svg"}
      alt="vercel"
      width={200}
      height={200}
    />

    <Image
      src={"/Whale-Logo332_5.png"}
      alt="kujira"
      width={200}
      height={200}
    />

    <p>画像確認配置2(Normal Image)</p>
    <img src={ `/vercel.svg` } />
  </div>
})

export default About
