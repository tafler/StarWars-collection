<template lang="pug">
  .overlay  
    .order__wrapper
      .order__title Продолжить оформление заказа
      .order__body
        .order__field
          label(for="order__field_author") Ф.И.О
          input(type="text" id="order__field_author" v-model="author" placeholder="Фамилия Имя Отчество")
        .order__field
          label(for="order__field_phone") Телефон
          input(type="tel" id="order__field_phone" v-model="phone" placeholder="+7 123 123 45 66")
        .order__field
          label(for="order__field_address") Адрес доставки
          textarea( id="order__field_address" v-model="address" placeholder="г. Тагил ул.Ленинина ...")
        .order__field
          label(for="order__field_date") Дата доставки
          input(type="date" id="order__field_date" v-model="date")
        button.order__back.btn(@click="closeModal") Назад
        button.order__submit.btn(@click="sendOrder" :class="{'btn_disable': checkValid}") Подтвердить
      
</template>

<script>
export default {
  name: 'UserCart',
  data() {
    return {
      author: '',
      phone: '',
      address: '',
      date: ''
    }
  },
  computed: {
    checkValid() {
      if(this.author.length < 3 || 
        this.phone.length < 5 ||
        this.author.match(/\d+/) ||
        this.date === '' ||
        new Date(this.date).getTime() < new Date().getTime() ||
        this.address.length < 5) return true
        return false
    }
  },
  methods: {
    sendOrder(){
      if(!this.checkValid){
        let cart = this.$store.getters.getCartItems.map((item) => {
          return {name: item.name, count: item.count}
        })
        let order = {
          cart,
          author: this.author,
          phone: this.phone,
          address: this.address,
          date: this.date
        }        
        console.log('Ваш заказ отправлен: ', JSON.stringify(order))        
        this.$store.commit('clearCart')
        this.$store.commit('toggleModalCard');
      } else {
        alert('Проверьте правильность заполнения полей');
      }
    },
    closeModal() {
      this.$store.commit('toggleModalCard');
    }
  }
}
</script>

<style scoped lang="scss">
  .overlay{
    width: 100vw;
    height: 100vh;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 50;
    background: rgba(50,50,50,.5);
  }
  .btn{
    border: none;
    line-height: 25px;
    padding: 0 15px;
    background: #5faf58;
    border-radius: 2px;
    &:hover{      
      background: darken(#5faf58, 10);
    }
    &_disable{
      background: #5a5237;
      color: white;
      &:hover{
        background: #5a5237;
      }
    }
  }
  .order{
    &__back{
      background: rgb(65, 33, 33);
      color: white;
      margin-right: 20px;
      &:hover{      
        background: lighten(rgb(65, 33, 33), 15);
      }
    }
    &__title{
      font-size: 16px;
      font-weight: 400;
      margin-bottom: 20px;
    }
    &__wrapper{
      padding: 10px;
      box-shadow: 0 0 2px 0 black;
      width: 300px;
      min-height: 200px;
      background: #eee;
      position: absolute;
      left: 50%;
      top: 50%;
      transform: translate(-50%, -50%);
      border-radius: 2px;
    }
    &__field{
      display: flex;
      align-items: center;
      justify-content: space-between;
      margin-bottom: 20px;
      label{
        color: #333;
        text-align: left;
      }
      input,
      textArea{
        margin-left: 5px;
        border: none;
        width: 190px;
        padding: 5px;
        background: #ddd;
        border-radius: 2px;
      }
      input{
        line-height: 22px;
      }
    }
  }
</style>