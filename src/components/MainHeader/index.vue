<template lang="pug">
  .header__wrapper
    .header__content
      .header__title StarWars collection
      .header__cart
        CartList(v-if="showCartList")
        .header__cart-img(@click="toggleList")
          svg(aria-hidden="true" data-prefix="fas" data-icon="shopping-cart" class="svg-inline--fa fa-shopping-cart fa-w-18" role="img" height="25" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512")
            path(fill="currentColor" d="M528.12 301.319l47.273-208C578.806 78.301 567.391 64 551.99 64H159.208l-9.166-44.81C147.758 8.021 137.93 0 126.529 0H24C10.745 0 0 10.745 0 24v16c0 13.255 10.745 24 24 24h69.883l70.248 343.435C147.325 417.1 136 435.222 136 456c0 30.928 25.072 56 56 56s56-25.072 56-56c0-15.674-6.447-29.835-16.824-40h209.647C430.447 426.165 424 440.326 424 456c0 30.928 25.072 56 56 56s56-25.072 56-56c0-22.172-12.888-41.332-31.579-50.405l5.517-24.276c3.413-15.018-8.002-29.319-23.403-29.319H218.117l-6.545-32h293.145c11.206 0 20.92-7.754 23.403-18.681z")
        .header__cart-badges(v-if="lengthCart.length > 0" @click="toggleList")
          .header__cart-length {{ lengthCart.length }}
          .header__cart-price {{ lengthCart.result }} $
</template>

<script>
import CartList from './CartList'
export default {
  name: 'MainHeader',
  components: { CartList },
  computed: {
    lengthCart(){
      return this.$store.getters.getCartLength
    },
    showCartList(){
      return this.$store.getters.getShowStatus('list')
    }
  },
  methods: {
    toggleList() {
      this.$store.commit('toggleCartList');
    },
  }
}
</script>

<style scoped lang="scss">
  .header{
    &__wrapper{
      background: grey;
      margin-bottom: 20px;
      box-shadow: 0 2px 2px 0 grey;
      position: relative;
      z-index: 10;
    }
    &__title{
      line-height: 50px;
      font-size: 26px;
      color: white;
      letter-spacing: 2px;
      font-family: 'Star Jedi Outline';
      user-select: none;
    }
    &__cart{
      position: relative;
      user-select: none;
      display: flex;
      align-items: center;
      &-badges{
        cursor: pointer;
        }
      &-img{
        cursor: pointer;
        margin-right: 14px;
      }
    }
    &__content{
      margin: 0 auto;
      max-width: 1200px;
      display: flex;
      justify-content: space-between;
      color: #eee;
      align-content: center;
      padding: 0 10px;
    }
  }
</style>