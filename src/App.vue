<template>
  <div id="app">
    <router-view/>
    <p>{{ message }}</p>
    <EditForm />
  </div>
</template>

<script>
import EditForm from '@/components/EditForm.vue'
export default {
  name: 'App',
  components: {EditForm},
  // created(){
  //   console.log(this.$store.state.count)
  //   this.$store.commit('increment')
  //   console.log(this.$store.state.count)
  // },
  computed:{
    message() { return this.$store.getters.message }
  }
}
// コンポーネントの中でdoUpdateを呼び出す
// mutationを呼び出す
// Stateの値が書き変わる

// Gettersはコンポーネントでいうccomputed

// コンポーネント内でvuexのデータを扱うときはcomputed内で
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
