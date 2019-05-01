<template>
  <div class="detail">
    <p>Params: {{$route.params.id}}</p>
    <h1 class="title is-5">{{detail.title}}</h1>
    <p class="subtitle is-6">{{detail.body}}</p>
    <span
      class="subtitle is-6"
      v-for="(label, index) in detail.labels"
      :key="index">
      {{label.name}}
    </span>
  </div>
</template>

<script>
import { getIssueDetail } from '@/service/api'
export default {
  data () {
    return {
      filter: {
        category: 'repos',
        name: 'frontendbr',
        type: 'issues',
        label: 'vagas'
      },
      detail: {},
      id: ''
    }
  },
  created () {
    this.id = this.$route.params.id
    getIssueDetail(`${this.filter.category}/${this.filter.name}/${this.filter.label}/${this.filter.type}/${this.id}`)
      .then(response => {
        this.detail = response.data
        console.log(this.detail)
      })
      .catch(err => {
        console.log(err)
      })
  }
}
</script>

<style lang='scss' scoped>

</style>
