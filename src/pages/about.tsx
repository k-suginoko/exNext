import React, { FC, memo, useState, useEffect, useRef } from 'react';
import Button from '../component/atoms/Button/';
import '../styles/about.scss'

const About:FC = memo(() => {
  return <div className="about">
    <p className="test">ボタン押すよ</p>
    <Button onClick={ () => {} }>ぼたｎ</Button>
  </div>
})

export default About
