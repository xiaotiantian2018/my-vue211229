<template>
  <div class="voncomp">
    {{ counter }}
    <button v-on:click="addCounter">ADD 1</button>
    <button @click="say('hi')">sayHi</button>
    <h3>
      一、内联语句处理器中访问原生的事件对象，可以用特殊变量 $event 把它传入方法：
    </h3>
    <button
      @click="warn('Form cannot be submitted yet.表单还不能进行提交。', $event)"
    >
      submit
    </button>
    <h3>
      二、这里a标签的默认事件是跳转，这里我们告诉浏览器取消默认事件，这样a标签的跳转功能就不好使了，反之a标准恢复默认事件功能如下：
    </h3>
    <a href="www.baidu.com" @click="warn('告诉浏览器取消默认事件', $event)">告诉浏览器取消默认事件,在事件处理程序中调用 event.preventDefault()</a>

    <h3>
      三、在事件处理程序中调用 event.preventDefault() 或 event.stopPropagation()
      是非常常见的需求。尽管我们可以在方法中轻松实现这点，但更好的方式是：方法只有纯粹的数据逻辑，而不是去处理
      DOM 事件细节。 为了解决这个问题，Vue.js 为 v-on
      提供了事件修饰符。之前提过，修饰符是由点开头的指令后缀来表示的。
    </h3>
    <a href="www.baidu.com" @click="clickMe('告诉浏览器取消默认事件', $event)"
      >父元素 <a href="www.sina.com" @click.stop="clickThis">子元素</a></a
    >
  </div>
</template>

<script>
export default {
  name: "VonComp",
  props: {},
  data() {
    return {
      counter: 1,
    };
  },
  methods: {
    addCounter(event) {
      this.counter += 1;
      if (event) {
        console.log(event);
        console.log(event.target.tagName);
      }
    },

    say(msg) {
      alert(msg);
    },
    warn(msg, event) {
      if (event) {
        // preventDefault() 方法阻止元素发生默认的行为(例如,当点击提交按钮时阻止对表单的提交)
        event.preventDefault();
      }
      alert(msg);
    },
    clickMe(msg, event) {
      alert(msg);
      alert("父元素的event" + event.target.tagName);
    },
    clickThis(event) {
      alert("子元素的event" + event.target.tagName);
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.voncomp {
  background-color:aquamarine
}
h3{
  color: blueviolet;
  text-align: left;
}
</style>
