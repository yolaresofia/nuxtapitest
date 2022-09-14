<template>
  <div>
    <button @click="test">buton</button>
    <button @click="test2">buton</button>
    <p>{{ x }}</p>
    <!-- <p>{{ date }}</p> -->
    <p>{{ mountain }}</p>
    <p>{{ posts }}</p>
  </div>
</template>
 

<script>
export default {
  data() {
    return {
      x: 1,
      date: 0,
      mountain : '',
      posts:''
    };
  },
  methods: {
    async test() {
       this.mountain = await fetch('/api/test').then(res =>
        res.json())
    },
     async test2() {
       this.posts = await fetch('/api/test').then(res =>
        res.json()
      )
    },
  }
};
</script>
