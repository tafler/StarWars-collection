<template lang="pug">
  .cart-list__wrapper
    .cart-list__title Ваша корзина
    .cart-list__content_empty(v-if="getCartList.length === 0") Пуста
    hr    
    .cart-list__content(v-for="(item, index) in getCartList" :key="item.name + '-' + index") 
      span.cart-item_name {{ item.name }}
      .cart-item_actions
        button.btn.btn_minus(@click="itemMinus(item.name)") -
        div {{ item.count }}
        button.btn.btn_plus(@click="itemPlus(item)") +
      .cart-item_price {{ (item.count * item.price).toFixed(2) }}$
        button.btn.btn_del(@click="removeFromCart(item.name)") x
    .cart-item_summ
      span Итог:
      span {{ $store.getters.getCartLength.result }}$
    button.cart-list__create-order.btn(@click="showModal") Оформить заказ
</template>

<script>
export default {
  name: 'CartList',
  computed: {
    getCartList() {
      return this.$store.getters.getCartItems
    },
  },
  methods: {
    itemPlus(product) {
      this.$store.commit('addToCart', {name: product.name, price: product.price});
    },
    itemMinus(name) {
      this.$store.commit('removeFromCart', name)
    },
    showModal() {
      if(this.$store.getters.getCartItems.length > 0){
        this.$store.commit('toggleModalCard', 'modal')
      }
    },
    removeFromCart(name) {
      this.$store.commit('removeAllFromCart', name)
    },

  }
}
</script>

<style scoped lang="scss">
.btn{
  border: none;
  padding: 0 5px;
  margin: 0 3px;
  &_minus{
    background: #ff9999;
    &:hover{
      background: darken(#ff9999, 10);
    }
  }
  &_plus{
    background: #75cc98;
    &:hover{
      background: darken(#75cc98, 10);
    }
  }
  &_del{
    background: #ee5555;
    &:hover{
      background: darken(#ee5555, 10);
    }
  }
}
.cart{
  &-item{
    &_summ{
      padding-bottom: 10px;
      display: flex;
      justify-content: space-between;
    }
    &_name{      
      margin-right: auto;
    }
    &_actions{
      display: flex;
      align-items: center;
    }
  }
  &-list{
    &__content{
      box-shadow: 0 2px 2px -3px grey;
      margin-bottom: 10px;
      display: flex;
      justify-content: flex-end;
      align-items: center;
      height: 40px;
    }
    &__title{
      margin-bottom: 5px;
      font-weight: 600;
      color: #555;
    }
    &__create-order{
      background: rgba(25, 139, 25, 0.4);
      color: darken(rgba(25, 139, 25, 0.8), 20);
      align-self: flex-end;
      margin-top: auto;
      padding: 0 10px;
      line-height: 22px;
      &:hover{
        background: darken(rgba(25, 139, 25, 0.4), 10);
      }
    }
    &__wrapper{
      color: #777;
      padding: 15px;
      position: absolute;
      display: flex;
      flex-direction: column;
      top: 50px;
      right: 0;
      z-index: 5;
      border-radius: 2px;
      background: #eee;
      width: 300px;
      min-height: 200px;
      box-shadow: 1px 3px 1px 1px #555;
    }
  }
}
</style>