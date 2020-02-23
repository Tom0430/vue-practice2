<template>
  <p>{{ text }}</p>
</template>

<script>
import store from '@/store.js'
export default {
  name: 'Example',
  data(){
    return{
      text: 'example'
    }
  },
}
</script>
