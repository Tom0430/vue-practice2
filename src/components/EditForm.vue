<template>
    <div class="edit-form">
        <input type="text" :value="message" @input="doUpdate">
    </div>
</template>
<!-- :はv-bindの、＠はv-onの省略記法ここのvalueをdoUpdateのevent.targetでみている -->

<script>
export default {
    name:'EditForm',
    computed:{
        message() { return this.$store.getters.message }
    },
    methods:{
        doUpdate(event){
            this.$store.dispatch('doUpdate', event.target.value)
        }
    }
}
</script>