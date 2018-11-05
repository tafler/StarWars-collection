<template lang="pug">
  .card__wrapper(:class="{'card__wrapper_active': $store.getters.getItemCountInCart(product) !== -1}")
    .card__title(@click="show = !show") 
      span {{ product.name }}
      span(v-if="show") 
        svg(aria-hidden="true" data-prefix="fas" data-icon="chevron-up" class="svg-inline--fa fa-chevron-up fa-w-14" role="img" xmlns="http://www.w3.org/2000/svg" height="30" viewBox="0 0 448 512")
          path(fill="#ff9999" d="M240.971 130.524l194.343 194.343c9.373 9.373 9.373 24.569 0 33.941l-22.667 22.667c-9.357 9.357-24.522 9.375-33.901.04L224 227.495 69.255 381.516c-9.379 9.335-24.544 9.317-33.901-.04l-22.667-22.667c-9.373-9.373-9.373-24.569 0-33.941L207.03 130.525c9.372-9.373 24.568-9.373 33.941-.001z")
      
      span(v-if="!show")
        svg(aria-hidden="true" data-prefix="fas" data-icon="chevron-down" class="svg-inline--fa fa-chevron-down fa-w-14" role="img" xmlns="http://www.w3.org/2000/svg" height="30" viewBox="0 0 448 512")
          path(fill="#75cc98" d="M207.029 381.476L12.686 187.132c-9.373-9.373-9.373-24.569 0-33.941l22.667-22.667c9.357-9.357 24.522-9.375 33.901-.04L224 284.505l154.745-154.021c9.379-9.335 24.544-9.317 33.901.04l22.667 22.667c9.373 9.373 9.373 24.569 0 33.941L240.971 381.476c-9.373 9.372-24.569 9.372-33.942 0z")

    .card__body
        ul(:class="{'card__content': true, 'card__content_show': !show}")
          li(v-for="(elem, index) in product" :key="elem + '-' + index")
            div.content_name {{ transformLabel(index) }}:
            div.content_name {{ Array.isArray(elem) ? elem.join(' ') : elem }}
              span(v-if="index === 'price'")  $
          .card__content__actions
            button.btn.btn_remove(@click="removeFromCart" v-if="$store.getters.getItemCountInCart(product) !== -1") remove
            button.btn(@click="addToCart") add
              span.subbtn(v-if="$store.getters.getItemCountInCart(product) !== -1") В корзине: {{ $store.getters.getItemCountInCart(product) }}шт.
</template>

<script>
import dict from '../../config/dict'
export default {
  name: 'ProductCard',
  data() {
    return {
      show: false,
    }
  },
  props: {
    product: {
      type: Object,
      required: false
    }
  },
  methods: {
    addToCart() {
      this.$store.commit('addToCart', {name: this.product.name, price: this.product.price});
    },
    removeFromCart() {
      this.$store.commit('removeFromCart', this.product.name)
    },
    transformLabel(text) {
      return dict[text]
    },
  }
}
</script>

<style scoped lang="scss">
hr{
  width: 90%;
}
.subbtn{
  position: absolute;
  bottom: -20px;
  right: 0;
  font-size: 10px;
  width: 200px;
  color: #333;
  text-align: right;
  }
.btn{
  margin-bottom: 20px;
  position: relative;
  line-height: 25px;
  padding: 0 20px;
  border: none;
  background: rgba(8, 128, 28, 0.829);
  &:hover{
    background: darken(rgba(8, 128, 28, 0.829), 10);
  }
  color: #eee;
  &_remove{
    margin-right: 10px;
    background: rgba(133, 4, 26, 0.678);
    &:hover{
      background: darken(rgba(133, 4, 26, 0.678), 10);
    }
  }
}
.card{
  &__body{
    padding: 10px;
    padding-top: 0;
  }
  &__wrapper{
    user-select: none;
    width: 800px;
    margin: 0 auto;
    box-shadow: 0 0 1px -1px grey;
    margin-bottom: 10px;
    &_active{
      box-shadow: 0 0 1px 1px rgba(10, 110, 0, .8);
    }
  }
  &__title{
    display: flex;
    justify-content: space-between;
    line-height: 40px;
    font-size: 20px;
    font-weight: 500;
    padding: 10px;
    cursor: pointer;
  }
  &__content{
    display: flex;
    flex-direction: column;
    li{
      display: flex;
      justify-content: space-between;
      padding: 10px;
    }
    &__actions{
      align-self: flex-end;
    }
    &_show{
      display: none;
  }

  }
}
</style>