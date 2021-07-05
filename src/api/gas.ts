// axiosはjsonpを指定できない
import { get } from 'lib/axios'

// const getParams: object = {
//   method: 'GET',
//   mode : "no-cors",
//   headers: {
//     'Content-Type': 'text/plain;charset=utf-8',
//   }
//   // Accept: 'application/json',
//   // headers: {
//   //   'Content-Type': 'application/json',
//   //   'Access-Control-Allow-Origin':'*'
//   // }
// }

const getParams: object = {
  crossDomain: true
}

class GasApi {
  constructor () {

  }

  /**
   * ガワだけ用意したGasのAPI
   */
  async fetchAll () {
    return await get('https://script.google.com/a/macros/brewus.co.jp/s/AKfycbx2rPsyRvYz24irjY_2dKMKIz9K3v_4T1-nch8dO_Xapl6rNdlkVATUSGeq5vyhkPlo8g/exec', getParams)
    .then(res => {
      console.log(res)
    })
    // return await get('https://script.google.com/a/macros/brewus.co.jp/s/AKfycbwRvLQq4-lyJZ6LtUlu4kbIN4qTwNDBzAjIxglmaDHCz5ZjDh7hILDGoi76MvsFhWnVwA/exec', getParams)
    // .then((res: any) => {
    //   console.log('ress', res)
    // })
  }
}

export default new GasApi()
