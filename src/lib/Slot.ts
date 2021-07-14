class Slot {
  constructor (public time: number = 0, public timer: any) {

  }

  start (callback) {
    console.log('start', this.time)
    this.timer = setTimeout(callback, this.time)
  }

  stop () {
    console.log('stop')
    clearTimeout(this.timer)
  }
}

export default new Slot()
