<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div>
    <router-view/>
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
import HelloWorld from "@/components/HelloWorld.vue";
import ChildComp from "@/components/ChildComp.vue";
import VonComp from "@/components/VonComp.vue";
import VforComp from "@/components/VforComp.vue";
export default {
  name: "App",
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
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.bg_brown{
  background: darkgoldenrod;
}
#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
