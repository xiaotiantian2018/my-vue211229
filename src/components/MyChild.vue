<template>
  <div class="mychild">
   {{count}}
  </div>
</template>
<script>
export default {
  name: "MyChild",
  props:{
    num: Number
  },
  // data:{
  //     count: this.num
  // },
  data() {
    return {
      count: this.num
    };
  },
  methods:{
  }
};
</script>

