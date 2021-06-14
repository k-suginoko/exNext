import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit'

type State = {
  count: number
}

const initialState = {
  count: 0
}


// reducer -------------------------------------

const testModules = createSlice({
  name: 'test',
  initialState,
  reducers: {
    setCount: (state: State, action: PayloadAction<number>) => {
      console.log('test action', state, action)
      state.count = action.payload
    }
  },
  extraReducers: {}
})

export const { setCount } = testModules.actions

export default testModules
