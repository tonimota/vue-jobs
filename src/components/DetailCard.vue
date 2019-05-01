<template>
  <div class="card">
    <div class="card-header">
      <h1 class="card-header-title is-centered">{{describe.title}}</h1>
    </div>
    <div class="card-content">
      <p class="subtitle is-6" v-if="describe.body">
        <span v-html="renderTextMarkdown(describe.body)"></span>
      </p>
      <span
        class="subtitle is-6"
        v-for="(label, index) in describe.labels"
        :key="index"
        :class="label.name | removeCharacts">
        {{label.name}}
      </span>
    </div>
  </div>
</template>

<script>
import { removeCharacts } from '@/filters/removeSpecialCharacters'
import { limitTo } from '@/filters/limitCharacters'
import { renderMarkdown } from '@/filters/markDownRender'

export default {
  props: {
    describe: Object
  },
  filters: {
    removeCharacts,
    limitTo
  },
  data () {
    return {
    }
  },
  methods: {
    renderTextMarkdown (value) {
      return renderMarkdown(value)
    }
  },
  computed: {
  }
}
</script>

<style lang='scss'>
@import '@/assets/style/scss/color.scss';
  h3, h2 {
    font-size: 24px;
    font-weight: bold;
    margin: 20px;
  }
  h2 {
    font-size: 20px;
  }
</style>
