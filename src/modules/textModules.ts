import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit'

const initialState = {
  count: 0
}


// reducer -------------------------------------

const testModules = createSlice({
  name: 'test',
  initialState,
  reducers: {}
})

export default testModules
