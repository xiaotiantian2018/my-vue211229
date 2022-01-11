<template>
  <div class="home">
    <img alt="Vue logo" src="@/assets/logo.png" />
    <HelloWorld msg="Welcome to Your Vue.js App" />
    <ul class="bg_brown">
      <ChildComp
        v-for="(item, index) in vegitableList"
        :key="index"
        :vegiItem="item"
      ></ChildComp>
    </ul>
    <VonComp />
    <VforComp />
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";
import ChildComp from "@/components/ChildComp.vue";
import VonComp from "@/components/VonComp.vue";
import VforComp from "@/components/VforComp.vue";

export default {
  name: 'Home',
  components: {
    HelloWorld,
    ChildComp,
    VonComp,
    VforComp,
  },
    data() {
    return {
      vegitableList: [
        {
          id: 0,
          name: "土豆",
        },
        {
          id: 1,
          name: "西红柿",
        },
        {
          id: 2,
          name: "黄瓜",
        },
      ],
    };
  },
}
</script>
<style scoped>
.bg_brown{
  background: darkgoldenrod;
}
</style>