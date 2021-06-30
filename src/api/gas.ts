import axios from 'lib/axios'

class GasApi {
  constructor () {

  }

  /**
   * ガワだけ用意したGasのAPI
   */
  async fetchAll (params = {}) {
    return await axios('', params)
  }
}

export default new GasApi()
