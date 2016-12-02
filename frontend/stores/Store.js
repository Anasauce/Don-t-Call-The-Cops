const $ = require('jquery')

class Store {

  getJSON(path){
    return $.getJSON(path)
  }

  load(){
    return this.fetch().then( value => {
      this.value = value
      this.trigger()
      return value
    })
  }
}

export default Store
