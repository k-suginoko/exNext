import { combineReducers } from '@reduxjs/toolkit'
import testModules from './textModules'

const rootReducer = combineReducers({
  test: testModules.reducer
})

export default rootReducer
