import React, { FC, memo, useState, useEffect, useRef } from 'react';
import Button from '../component/atoms/Button/';

const About:FC = memo(() => {
  return <div>
    ボタン押すよ
    <Button onClick={ () => {} }>test</Button>
  </div>
})

export default About
