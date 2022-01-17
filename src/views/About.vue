<template>
  <div class="about">
    <h1>This is an about page</h1>
    <p v-for="item in items" :key="item.id">{{ item.id }}:{{ item.message }}</p>
    <p v-for="item in arrayMsg" :key="item.id">{{ item.id }}:{{ item.name }}</p>

  </div>
</template>
<script>
export default {
  data() {
    return {
      items: [
        { message: "one", id: "1" },
        { message: "two", id: "2" },
        { message: "three", id: "3" },
      ],
      arrayMsg: [
        {
          name: "one",
          id: "4",
        },
        {
          name: "two",
          id: "5",
        },
        {
          name: "three",
          id: "6",
        },
      ],
    };
  },
  mounted() {
    this.items[0] = { message: "first", id: "1" }; //此时对象的值更改了，但是视图没有更新
    this.arrayMsg[1] = { name: "second", id: "5" };

  },
  beforeUpdate() {
    console.log("beforeUpdate_about page");
  },
  updated() {
    console.log("updated_about page");
  },
  beforeDestroy() {
    console.log("beforeDestroy");
  },
  destroyed() {
    console.log("destroyed");
  },
};
</script>
