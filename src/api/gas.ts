// axiosはjsonpを指定できない
import { get } from 'lib/axios'

const getParams: object = {
  method: 'GET',
  mode : "no-cors",
  headers:{
    "Content-Type": "application/json"
  }
}

class GasApi {
  constructor () {

  }

  /**
   * ガワだけ用意したGasのAPI
   */
  async fetchAll () {
    return await get('https://script.google.com/a/macros/brewus.co.jp/s/AKfycbwRvLQq4-lyJZ6LtUlu4kbIN4qTwNDBzAjIxglmaDHCz5ZjDh7hILDGoi76MvsFhWnVwA/exec', getParams)
    .then((res: any) => {
      console.log('ress', res)
    })
  }
}

export default new GasApi()
