<template>
  <div class="message-field">
    <p>{{ text }}</p>
    <p>{{ message3 }}</p>
    <input v-model="message3">
    <p>{{ count }}</p>
    <button v-on:click="increment"></button>
  </div>
</template>

<script>
import store from '@/store.js'
export default {
  name: 'Example',

  data(){
    return{
      text: 'こんにちは'
    }
  },
  computed:{
    message3:{
      get() { return this.$store.state.moduleA.message3 },
      set(value) { return this.$store.dispatch('message3Update',value) }
      //setにはmoduleAとか書かなくて勝手に見てくれる
      //もし同じミューテーションタイプになってたら（全部messageにしてたら）全て一緒に書き換わる
    },
    count:{
      get() {return this.$store.state.moduleB.count}
      //getterだけでも使える
    },
  },
  methods:{
    increment(){
      this.$store.commit('countUpdate')
    }
  }
}
</script>
