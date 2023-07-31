<template>
  <div class="parent">
   <MyChild :num="1"/>
   <MyChild :num="2"/>
  </div>
</template>
<script>
import MyChild from "@/components/MyChild.vue";
export default {
  name: "Parent",
  components: {
    MyChild,
  },
  data() {
    return {
    };
  },
  methods:{
  }
};
</script>


