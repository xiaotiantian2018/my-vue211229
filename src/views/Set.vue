<template>
  <div class="set">
    <p>{{ strB }}</p>
    <p>{{ strA }}</p>
    <div @click="changeStrA">changeStrA</div>
    <div v-for="(value, name, index) in msg" :key="index">
      {{ index }}.{{ name }}:{{ value }}
    </div>
    <div @click="changeMsg">changeMsg</div>
    <div>{{ arrayMsg }}</div>
    <button @click="changeArrayMsg">changeArrayMsg</button>
  </div>
</template>
<script>
export default {
  name: "Set",
  components: {},
  data() {
    return {
      strB: "bbbb",
      strA: "aaaa",
      msg: {
        a: "1111",
      },
      arrayMsg: [
        {
          name: "one",
          id: "1",
        },
        {
          name: "two",
          id: "2",
        },
        {
          name: "three",
          id: "3",
        },
      ],
    };
  },
  beforeCreate() {
    console.log("beforeCreate");
  },
  created() {
    console.log("created");
  },
  beforeMount() {
    console.log("beforeMount");
  },
  mounted() {
    this.strB = "BBBB";
    this.arrayMsg[1] = { name: "second", id: "2" };
    console.log("mounted");
  },
  beforeUpdate() {
    console.log("beforeUpdate");
  },
  updated() {
    console.log("updated");
  },
  beforeDestroy() {
    console.log("beforeDestroy");
  },
  destroyed() {
    console.log("destroyed");
  },
  methods: {
    changeStrA() {
      this.strA = "AAAA";
    },
    // this.$set 修改对象
    changeMsg() {
      this.$set(this.msg, "b", "2222");
      console.log(this.msg);
    },
    // this.$set 修改数组
    changeArrayMsg() {
      let change = { name: "four", id: "4" };
      let changeOne = this.arrayMsg[0];
      console.log("changeOne", changeOne);
      changeOne.name = "first";
      this.$set(this.arrayMsg, 3, change);
      this.$set(this.arrayMsg, 0, changeOne);
    },
  },
};
</script>

<style>
.set {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
