<template>
  <div>
    <button @click="test">buton</button>
    <p>{{ x }}</p>
  </div>
</template>
 

<script>

export default {
  data() {
    return {
      x: 1,
    };
  },
  methods: {
   async test() {
      const { data: mountain } = await useFetch("/api/test");
      this.x = mountain;
    },
  },
};
</script>
