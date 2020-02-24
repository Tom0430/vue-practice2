<template>
    <div class="edit-form">
        <input type="text" :value="message" @input="doUpdate">
        <input v-model="message2">
    </div>
</template>
<!-- :はv-bindの、＠はv-onの省略記法ここのvalueをdoUpdateのevent.targetでみている -->

<script>
export default {
    name:'EditForm',
    computed:{
        message() { return this.$store.getters.message },
        // 1つの算出プロパティに入出力をまとめるとスッキリする
        message2: {
            get()      { return this.$store.getters.message},
            set(value) { this.$store.dispatch('doUpdate', value )}
        },
    },
    methods:{
        doUpdate(event){
            this.$store.dispatch('doUpdate', event.target.value)
        }
    }
}
</script>