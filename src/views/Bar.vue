<template>
  <div class="bar">
    <h1>This is an bar page, </h1>
    <h2> this.$route.path:{{ path }}</h2>
    <h2> this.$route.params:{{$route.params}}</h2>
    <h2> this.$route.query:{{$route.query}}</h2>
    <p>{{obj.foo}}</p>
    <button @click="obj.foo = 'baz'">Change it</button>
  </div>
</template>
<script>
let obj = {
  foo:'bar'
}
// Object.freeze(obj)
export default {
  name: "Bar",

  data() {
    return {
      obj
    };
  },
  computed: {
    path() {
      console.log("this.$route", this.$route);
      return this.$route.path;
    },
  },
};
</script>

