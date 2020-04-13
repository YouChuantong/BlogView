<template>
    
</template>

<script lang="ts">
    import Vue from "vue";
    import { Component, Prop, Emit } from "vue-property-decorator";

    @Component
    export default class MessageAlert extends Vue{
        @Prop(String) private msg: string | undefined;

        @Emit("click")
        // eslint-disable-next-line @typescript-eslint/no-empty-function
        private sendEmit(){}


    }
</script>

<style scoped>

</style>