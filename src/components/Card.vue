<template>
  <div class="columns is-multiline">
    <div class="column is-4" v-for="(item, index) in listItens" :key="index">
      <div class="box">
        {{item.title}}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    list: {
      type: Array,
      required: true
    },
    componentKey: Number
  },
  data () {
    return {
      itens: []
    }
  },
  computed: {
    listItens: function () {
      /* eslint-disable */
      this.itens = this.list
      return this.itens
    }
  }
}
</script>

<style>

</style>
