import React, { FC, memo, useState, useEffect, useRef, useCallback } from 'react';
import { GetStaticProps } from 'next'
import Image from 'next/image'
import GasApi from '../api/gas'
// lib
// import Slot from '../lib/Slot'
// components
import Pulldown from '../component/atoms/Pulldown/';
// styles
import '../styles/questionSlot.scss'

const initialState = {
  sheetTitle: null
}

const TIME = 100

const QuestionSlot: FC = memo((props) => {
  const [ questions, setQuestions ] = useState<any>(null)
  const [ question, setQuestion ] = useState(null)
  const [ pulldownData, setPulldown ] = useState<any>(null)
  const [ state, setState ] = useState<any>(initialState)
  const [ data, setData ] = useState(null)
  const [ isStart, setStart ] = useState<boolean>(false)
  const timer = useRef(null)
  // const Game = Slot

  const handleStartSlot = () => {
    if (state.sheetTitle == null) return
    // setData(null)
    setStart(true)
    moveSlot()
    // Game.start(moveSlot())
  }

  const handleStopSlot = () => {
    setStart(false)
    clearTimeout(timer.current)
    timer.current = null
  }


  const handleChange = (key: string) => {
    return (value: string = '') => {
      setState({ ...state, [ key ]: value })
    }
  }

  const moveSlot = () => {
    const index = Math.floor(Math.random() * question.length)
    setData(question[index].question)
    timer.current = setTimeout(moveSlot, TIME)
  }

  // const fetchGas = async () => {
  //   const result = await GasApi.fetchAll()
  //   console.log('result', result)
  // }

  useEffect(() => {
    // fetchGas()
    if (props?.json) {
      setQuestions(props?.json)
      const pData = (props?.json || []).map((item, index) => {
        return { label: item.sheetTitle, value: item.sheetTitle }
      })
      setPulldown(pData)
    }
  }, [props])

  useEffect(() => {
    if (questions && questions.length) {
      if (state.sheetTitle == null) return
      const q = questions.find(item => {
        return item.sheetTitle == state.sheetTitle
      })
      setQuestion(q.questions)
      setData(q.questions[0].question)
    }
  }, [questions, state])
  
  return (
    <div className="questionSlot">
      <div className="questionSlot__pullDown">
        <Pulldown
          items={ pulldownData || [] }
          onChange={ handleChange('sheetTitle') }
          // onBlur={ handleCheck('closeTime') }
          defaultValue={ state.sheetTitle || '' }
          // defaultValue={ state.sheetTitle }
          // error={ errors.closeTime }
        />
      </div>

      <div className="questionSlot__content">
        <div className="questionSlot__content__title">
          <Image
            src={"/piero.PNG"}
            alt="Picture of the author"
            width={500}
            height={200}
          />
        </div>

        <div className="questionSlot__content__slot">
          { question && data }
        </div>

        <div className="questionSlot__content__btn" onClick={ isStart ? handleStopSlot : handleStartSlot }>
          { isStart ? 'Stop' : 'Start' }
        </div>
      </div>
    </div>
  )
})

export default QuestionSlot


export const getStaticProps: GetStaticProps<any> = async () => {
  const res = await fetch('https://script.google.com/macros/s/AKfycbzptHPxsD0QCakzXnr29YKTPpR84wcH_CYfHOMuNCWZuDlKLN1pxpsQ9cSfQFOdLIotpA/exec', { redirect: 'follow' })
  const json = await res.json()

  return {
    props: { json },
    revalidate: 300, // 5分単位で更新
  }
}
