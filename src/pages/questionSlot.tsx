import React, { FC, memo, useState, useEffect, useRef, useCallback } from 'react';
import GasApi from '../api/gas'


const QuestionSlot: FC = memo(() => {

  const handleSlot = async () => {
    
  }

  const fetchGas = async () => {
    const result = await GasApi.fetchAll()
    console.log('result', result)
  }

  useEffect(() => {
    fetchGas()
  }, [])

  return (
    <div>
      test
    </div>
  )
})

export default QuestionSlot
