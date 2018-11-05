<template lang="pug">
  div(@click="hideCart")
    UserOrder(v-if="$store.getters.getShowStatus('modal')")
    header
      main-header
    main
      products
</template>

<script>
import MainHeader from '../components/MainHeader/'
import Products from '../components/Products/'
import UserOrder from '../components/Modals/UserOrder'
export default {
  name: 'VehicleCollect',
  components: { MainHeader, Products, UserOrder },
  data () {
    return {
    }
  },
  methods: {
    hideCart(e) {
      const popup = document.querySelector('.cart-list__wrapper');
      if(popup && 
        e.target !== popup && 
        !popup.contains(e.target) &&
        !e.target.parentNode.parentNode.classList.contains('header__cart-img') && 
        !e.target.parentNode.classList.contains('header__cart-badges')){
        this.$store.commit('toggleCartList');
      }
    }
  } 
}
</script>

<style scoped>

</style>