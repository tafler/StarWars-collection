const getters = {
  getCartLength (state) {
    if (state.cart.length === 0) return false
    const result = state.cart.reduce((sum, curr) => sum + (curr.price * curr.count), 0)
    const length = state.cart.reduce((sum, curr) => sum + curr.count, 0)
    return { result: result.toFixed(2), length }
  },
  getItemCountInCart: state => (elem) => {
    const index = state.cart.findIndex((e) => {
      if (e.name === elem.name) return e
    })
    if (index !== -1) return state.cart[index].count
    return -1
  },
  getCartItems (state) {
    return state.cart
  },
  getProducts (state) {
    return state.products
  },
  getShowStatus: state => (elem) => {
    if (elem === 'modal') return state.showModalCard
    if (elem === 'list') return state.showCartList
  }
}
export default getters
