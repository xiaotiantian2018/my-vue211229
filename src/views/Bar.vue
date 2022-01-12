<template>
  <div class="bar">
    <h1>This is an bar page, </h1>
    <h2> this.$route.path:{{ path }}</h2>
    <h2> this.$route.params:{{$route.params}}</h2>
    <h2> this.$route.query:{{$route.query}}</h2>
  </div>
</template>
<script>
export default {
  name: "Home",

  data() {
    return {};
  },
  computed: {
    path() {
      console.log("this.$route", this.$route);
      return this.$route.path;
    },
  },
};
</script>

