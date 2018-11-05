<template lang="pug">
  .products__wrapper
    product-card(v-for="(prod, index) in products" :key="index" :product="prod")
</template>

<script>
import ProductCard from './ProductCard'
export default {
  name: 'Products',
  components: { ProductCard },
  mounted() {
    this.getProducts()
    },
  methods: {
    getProducts() {
      this.$store.dispatch('takeProducts')
      setTimeout(() => {this.getProducts()}, 60000)
    }
  },
  computed: {
    products() {
      return this.$store.getters.getProducts
    }
  }
}
</script>

<style scoped lang="scss">
  .products__wrapper{
    max-width: 1290px;
    margin: 0 auto;
  }
</style>