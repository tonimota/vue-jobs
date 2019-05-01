<template>
  <div class="columns is-multiline">
    <div class="column is-4" v-for="(item, index) in list" :key="index">
      <router-link :to="'/detail/' + item.number">
        <div class="box" >
          <p class="title is-5">{{item.title}}</p>
          <p class="subtitle">{{item.body | limitTo(50)}}</p>
          <p class="labels">
            <span
              class="text-bold"
              v-for="(label, key) in item.labels"
              :key="key"
              :class="label.name | removeCharacts">{{label.name | removeCharacts}}
            </span>
          </p>
        </div>
      </router-link>
    </div>
  </div>
</template>

<script>
import { removeCharacts } from '@/filters/removeSpecialCharacters'
import { limitTo } from '@/filters/limitCharacters'

export default {
  props: {
    list: {
      type: Array,
      required: true
    },
    componentKey: Number
  },
  filters: {
    removeCharacts,
    limitTo
  },
  data () {
    return {
      itens: [],
      label: ''
    }
  },
  computed: {
    listItens: {
      get: function () {
        return this.itens
      },
      set: function (list) {
        this.itens = list
        return this.itens
      }
    }
  },
  methods: {
  }
}
</script>

<style lang='scss' scoped>
  .text-bold {
    font-weight: bold;
  }
  .clt {
    color: purple
  }
  .alocado {
    color: green;
  }
  .pj {
    color: red;
  }
  .junior {
    color: yellow;
  }
  .pleno {
    color: pink;
  }
  .senior {
    color: blue;
  }
  .estagio {
    color: brown;
  }
</style>
