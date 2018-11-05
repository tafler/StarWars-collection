import axios from 'axios'

const testResponse = status => status >= 200 && status < 300

const actions = {

  async takeProducts ({ commit, getters }) {
    let next = 'https://swapi.co/api/vehicles/'
    while (next) {
      const data = await axios({
        method: 'GET',
        url: next
      })
      if (testResponse(data.status) && data.data.count > getters.getProducts.length) {
        next = data.data.next
      } else next = null
      commit('setProducts', data.data.results)
    }
  }

  // Подтянуть данные по фильмам и пилотам? не до конца реалоизована
  // async takeFullInfo({commit}, all){
  //   console.log('commit')
  //   for(const result of all){
  //     const getter = async (urls) => {
  //       let output = []
  //       for(const url of urls){
  //         const response = await axios.get(url)
  //         if (testResponse(response.status)) {
  //           output.push(response.data.name || response.data.title)
  //         }
  //       }
  //       return output
  //     }
  //     Object.assign(
  //          result,
  //          {films: await getter(result.films), pilots: await getter(result.pilots)}
  //            )

  //   }
  //   console.log('result:', result)
  // }

}
export default actions
