<template>
  <div class="vfor_comp">
    <h3>用 v-for 把一个数组对应为一组元素</h3>
    <ul class="one">
      <li v-for="(item, index) in list" :key="index">
        {{ item.message }}
      </li>
    </ul>
    <h3>在 v-for 里使用对象,你也可以用 v-for 来遍历一个对象的 property</h3>
    <ul class="list_two">
      <li v-for="(value, name, index) in bookinfo" :key="index">
        {{ index }}.{{ name }}:{{ value }}
      </li>
    </ul>
  </div>
</template>

<script>
let ObjectA = {
  titleA: "小狗的小房子",
  authorA: "zhangsan",
  chubanA: "2020-01-01",
};
let ObjectB = {
  titleB: "孤独的小螃蟹",
  authorB: "王五",
  chubanB: "2012-01-21",
};
let ObjectC = {
  titleC: "一只想飞的猫",
  authorC: "李四",
  chubanC: "2012-01-01",
};
let keysName = Object.keys(ObjectA); //取出对象的键名，输出数组
console.log("取出对象的键名keysName:", keysName);

let objadd = Object.assign(ObjectA, ObjectB, ObjectC); //合并对象
console.log("合并对象objadd:", objadd);
export default {
  name: "VforComp",
  props: {},
  data() {
    return {
     
      list: [
        {
          message: "hello foo",
        },
        {
          message: "hello bob",
        },
      ],
      bookinfo: {
        title: "三毛流浪记",
        author: "陈平",
        publishDate: "2020-12-12",
      },
    };
  },
  methods: {},
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.vfor_comp {
  background-color: burlywood;
}
.one {
  list-style: square inside;
}
.list_two {
  text-align: left;
}
h3 {
  color: blueviolet;
  text-align: left;
}
</style>
