<template>
  <div class="container detail">
    <detai-card :describe="this.detail"></detai-card>
  </div>
</template>

<script>
import { getIssueDetail } from '@/service/api'
import DetailCard from '@/components/DetailCard'
export default {
  components: {
    'detai-card': DetailCard
  },
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
