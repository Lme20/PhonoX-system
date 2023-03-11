<template>
    <div>
        <iframe src="../index.html" width="100%" height="100%" frameborder="0"></iframe>
        <h1>{{ greeting }}</h1>
        <p>{{ message }}</p>
        <button v-on:click="incrementCount">Click me!</button>
        <p>Count: {{ count }}</p>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        greeting: 'Hello',
        message: 'Dictionary test page',
        count: 0
      }
    },
    methods: {
      incrementCount() {
        this.count++
      }
    }
  }
  </script>
  
  <style scoped>
  h1 {
    color: red;
  }
  </style>
  