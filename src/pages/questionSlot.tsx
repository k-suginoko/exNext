import React, { FC, memo, useState, useEffect, useRef, useCallback } from 'react';
import { GetStaticProps } from 'next'
import GasApi from '../api/gas'


const QuestionSlot: FC = memo((props) => {

  const handleSlot = async () => {
    
  }

  const fetchGas = async () => {
    const result = await GasApi.fetchAll()
    console.log('result', result)
  }

  useEffect(() => {
    // fetchGas()
    console.log('入ってきてたらラッキーなんやけど', props)
  }, [])

  return (
    <div>
      test
    </div>
  )
})

export default QuestionSlot


export const getStaticProps: GetStaticProps<any> = async () => {
  const res = await fetch('https://script.google.com/macros/s/AKfycbzO0aqbKBNdP72R2aEyXHsM4AB7wmJsywug6GzDxXoQnSsrAqLLig3DHte2TbnO4vRkRg/exec', { redirect: 'follow' })
  const json = await res.json()

  return {
    props: { json },
    revalidate: 300, // 5分単位で更新
  }
}
