/**
 * atoms Pulldown
 */

import React from 'react'
// style
import './index.scss'

type Item = {
  label: string,
  value: string | number
}

type Props = {
  items        : Item[],
  onChange?    : (value: string) => void,
  onBlur?      : () => void,
  defaultValue?: string | number,
  error?       : string,
  disabled?    : boolean
}

const Pulldown: React.FC<Props> = (props) => {
  const [ value, setValue ] = React.useState(props.defaultValue)

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const { value } = e.target
    setValue(value)
    props.onChange && props.onChange(value)
  }

  // MEMO: 要チェック
  React.useEffect(() => {
    if (value != props.defaultValue) {
      setValue(props.defaultValue)
    }
  }, [ props.defaultValue ])

  console.log('props.items', props)

  return (
    <>
      <div className ={ props.error ? 'pulldown pulldown--error' : 'pulldown' }>
        <select
          value={ value }
          onChange={ handleChange }
          onBlur={ props.onBlur }
          disabled={ props.disabled }
        >
          { !value && <option value={ '' }>選択してください</option> }
          {
            props.items.map((item: Item, i: number) => {
              return (
                <option key={ i } value={ item.value }>{ item.label }</option>
              )
            })
          }
        </select>
      </div>
      { props.error && <p className="error">{ props.error }</p> }
    </>
  )
}

export default Pulldown
