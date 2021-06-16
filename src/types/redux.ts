import store from 'store'
import rootReducer from 'modules/rootReducer'

export type RejectedAction<ThunkArg> = {
  type: string,
  /* eslint @typescript-eslint/no-explicit-any: 0 */
  error: | {
    name?: string,
    message?: string,
    code?: string,
    stack?: string
  } | any,
  meta: {
    requestId: string,
    arg: ThunkArg,
    aborted: boolean
  }
}

export type AppDispatch = typeof store.dispatch

export type RootState = ReturnType<typeof rootReducer>
