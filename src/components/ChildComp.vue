<template>
  <li class="childcomp">{{ vegiItem.name }}</li>
  
</template>

<script>
export default {
  name: "ChildComp",
  props: {
    vegiItem: Object,
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.childcomp{
  background:deeppink;
}
li {
  display: inline-block;
  margin: 0 10px;
}
</style>
