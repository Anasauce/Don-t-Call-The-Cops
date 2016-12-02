import Store from './Store'

const dataStore = new Store({
  fetch(){
    return this.getJSON('/api')
  }
})

window.dataStore = dataStore

export default dataStore
