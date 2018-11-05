import lodash from 'lodash'

function getFormatDate (str) {
  const date = new Date(str)
  const month = (date.getMonth() + 1 < 10) ? `0${date.getMonth() + 1}` : date.getMonth() + 1
  const day = (date.getDate() < 10) ? `0${date.getDate()}` : date.getDate()
  return `${date.getFullYear()}.${month}.${day}`
}

const mutations = {
  toggleCartList (state) {
    state.showCartList = !state.showCartList
  },
  toggleModalCard (state) {
    state.showModalCard = !state.showModalCard
  },
  clearCart (state) {
    state.cart = []
  },
  addToCart (state, payload) {
    const index = state.cart.findIndex((e) => {
      if (e.name === payload.name) return e
    })
    if (index !== -1) {
      state.cart[index].count += 1
    } else {
      state.cart.push({
        name: payload.name,
        price: payload.price,
        count: 1
      })
    }
  },
  removeAllFromCart (state, name) {
    const index = state.cart.findIndex((e) => {
      if (e.name === name) return e
    })
    if (index !== -1) {
      state.cart.splice(index, 1)
    }
  },
  removeFromCart (state, name) {
    const index = state.cart.findIndex((e) => {
      if (e.name === name) return e
    })
    if (index !== -1) {
      if (state.cart[index].count === 1) state.cart.splice(index, 1)
      else state.cart[index].count -= 1
    }
  },
  setProducts (state, payload) {
    payload.map((item) => {
      delete (item.url)
      if (item.films && item.films.length === 0) delete (item.films)
      if (item.pilots && item.pilots.length === 0) delete (item.pilots)
      for (const i in item) {
        if (!item[i] || item[i] === 'unknown') delete (item[i])
        if (i === 'created' || i === 'edited') {
          item[i] = `${getFormatDate(item[i])}`
        }
        item.price = (Math.random() * 1000).toFixed(2)
      }
    })
    state.products = lodash.unionBy(state.products, payload, 'name')
  },
  setLoading (state, payload) {
    state.loading = payload
  }
}

export default mutations
