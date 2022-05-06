<template>
  <div class="home">
    <!-- // 后退一步记录，等同于 history.back() -->
    <!-- $router.go(-1) -->
    <button @click="$router.go(-1)">后退一步</button>
    <!-- // 字符串 -->
    <router-link to="/bar?id=111">声明式，字符串跳转到bar页面</router-link>
    <br/>
    <!-- 对象 -->
    <router-link :to="{path:'bar'}">声明式，对象跳转到bar页面</router-link>
    <br/>
    <!-- // 命名的路由 -->
    <router-link :to="{name:'bar', params:{id:'123'}}">声明式，命名的路由，跳转到bar页面</router-link>
    <br/>
    <!-- 带查询参数，变成 /bar?id=123-->
    <router-link :to="{path:'bar', query:{id:'123'}}">声明式，带查询参数，变成 /bar?id=123，跳转到bar页面</router-link>

    <br/>
    <!-- // 字符串 -->
    <div><button @click="$router.push( 'bar')">编程式，字符串跳转到bar页面</button></div>
    <!-- 对象 -->
    <div><button @click="$router.push( {path:'bar'})">编程式， 对象跳转到bar页面</button></div>
    <!-- // 命名的路由 -->
    <div><button @click="$router.push({ name: 'bar', params: { id: '123' }})">编程式，命名的路由，跳转到bar页面</button></div>
     <!-- 带查询参数，变成 /bar?id=123-->
    <div><button @click="$router.push({ path: 'bar', query: { id: '123' }})">编程式，带查询参数，变成 /bar?id=123，跳转到bar页面</button></div>

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