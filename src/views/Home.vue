<template>
  <div class="container">
    <img class="logo" alt="Vue logo" src="../assets/logo.png">
    <div class="filter-list">
      <h1>Dados: </h1>
      <ul>
        <li v-for="(item, index) in filter" :key="index">
          <strong>{{index}}: </strong>
          <span>{{item}}</span>
        </li>
      </ul>
    </div>
    <Card :list="list" :componentKey="componentKey"></Card>
  </div>
</template>

<script>
// @ is an alias to /src
import { getJobs } from '@/service/api.js'
import Card from '@/components/ListCard'

export default {
  name: 'home',
  components: {
    Card
  },
  data () {
    return {
      filter: {
        category: 'repos',
        name: 'frontendbr',
        type: 'issues',
        label: 'vagas'
      },
      list: [],
      componentKey: 0
    }
  },
  created () {
    getJobs(`${this.filter.category}/${this.filter.name}/${this.filter.label}/${this.filter.type}?state=open`)
      .then(response => {
        this.list = response.data
        // console.log(this.list)
      })
      .catch(err => {
        console.log(err)
      })
  },
  methods: {
    forceRerender () {
      this.componentKey += 1
    }
  }
}
</script>

<style lang="scss">
  .logo {
    width: 100px;
  }
  .filter-list {
    text-align: left
  }
</style>
