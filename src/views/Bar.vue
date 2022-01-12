<template>
  <div class="bar">
    <h1>This is an bar page{{ path }}</h1>
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

