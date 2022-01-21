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
  beforeCreate(){
    console.log("beforeCreate_about page");
  },
  created(){
    console.log("created_about page");
    console.log('this',this)
  },
  mounted() {
    this.items[0] = { message: "first", id: "1" }; //此时对象的值更改了，但是视图没有更新
    this.arrayMsg[1] = { name: "second", id: "5" };
    // 整个视图都渲染完毕再执行某些操作，可以在 mounted 内部使用 vm.$nextTick
    this.$nextTick(function(){

      alert('仅在整个视图都被渲染之后才会运行的代码')
    })

  },
  beforeUpdate() {
    console.log("beforeUpdate_about page");
  },
  updated() {
    console.log("updated_about page");
    this.$nextTick(function () {
    //  仅在整个视图都被重新渲染之后才会运行的代码  
    alert('仅在整个视图都被重新渲染之后才会运行的代码')   
  })
  },
  beforeDestroy() {
    console.log("beforeDestroy");
  },
  destroyed() {
    console.log("destroyed");
  },
};
</script>
