// axiosはjsonpを指定できない
import { get } from 'lib/axios'
import axios from "axios";
import axiosJsonpAdapter from 'axios-jsonp'


const getJson = (data) => {
  // do stuff with JSON
  console.log('koi', data)
  return data
}

const getParams: object = {
  method: 'GET',
  mode : "no-cors",
  redirect: 'manual'
  // headers: {
  //   'Content-Type': 'text/plain;charset=utf-8',
  // }
  // Accept: 'application/json',
  // headers: {
  //   'Content-Type': 'application/json',
  //   'Access-Control-Allow-Origin':'*'
  // }
}

// const getParams: object = {
//   crossDomain: true
// }

class GasApi {
  constructor () {

  }
  

  /**
   * ガワだけ用意したGasのAPI
   */
  async fetchAll () {
    return await fetch('https://script.google.com/macros/s/AKfycbzO0aqbKBNdP72R2aEyXHsM4AB7wmJsywug6GzDxXoQnSsrAqLLig3DHte2TbnO4vRkRg/exec?callback=getJson', { redirect: 'follow' })
    .then(res => {
      // redirect followにしておくとリダイレクト先まで追従してリソースの取得を行う
      console.log('ここは？', res, res.url)

      var script = document.createElement('script');
      script.src = `${ res.url }`

      document.getElementsByTagName('head')[0].appendChild(script);

      console.log('window', window)
      
    })
    // return await get('https://script.google.com/a/macros/brewus.co.jp/s/AKfycbwRvLQq4-lyJZ6LtUlu4kbIN4qTwNDBzAjIxglmaDHCz5ZjDh7hILDGoi76MvsFhWnVwA/exec', getParams)
    // .then((res: any) => {
    //   console.log('ress', res)
    // })
  }
}

export default new GasApi()
