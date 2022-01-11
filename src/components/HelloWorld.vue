<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <p>{{ studentname }}</p>
    <h3>一、class绑定</h3>
    <div class="static" :class="{ active: isActive, text_danger: hasError }">
      class绑定,绑定的数据对象内联定义在模板里
    </div>
    <div class="static" :class="classObj">
      class绑定,绑定的数据对象不必内联定义在模板里
    </div>
    <h3>
      渲染的结果和上面一样。我们也可以在这里绑定一个返回对象的计算属性。这是一个常用且强大的模式：
    </h3>
    <div class="static" :class="classObject">class绑定</div>
    <h3>二、style绑定</h3>
    <p :style="styleObj">style绑定</p>
    <div>
      computed是计算属性，也就是依赖某个值或者props通过计算得来的数据，
      计算属性示例：{{ fullName }}
    </div>
    <div>{{ teacherName }}</div>
    <div>{{ reversedTname }}</div>
    <div>Ask a yes/no question: <input type="text" v-model="question" /></div>
    <div>
      <h3>一、v-for示例：</h3>
      <ul>
        <li v-for="(item, index) in letterList" :key="index">
          {{ item.lname }}
        </li>
      </ul>
    </div>
    <div>
      <h3>二、v-if</h3>
      <h5 v-if="awesome < 1">小于1</h5>
      <h5 v-else-if="awesome >= 1 && awesome <= 2">
        "大于等于1 并且小于等于2", Oh no 😢，{{ awesome }}
      </h5>
      <h5 v-else>大于2</h5>
      <template v-if="true"
        >三、此时可以把一个 "template" 元素当做不可见的包裹元素，并在上面使用
        v-if。最终的渲染结果将不包含 template 元素</template
      >
    </div>
    <h3>四、v-show</h3>
    <h5 v-show="false">
      另一个用于根据条件展示元素的选项是 v-show 指令； 不同的是带有 v-show
      的元素始终会被渲染并保留在 DOM 中。 v-show 只是简单地切换元素的 CSS
      property display。 注意，v-show 不支持 "template" 元素，也不支持 v-else。
    </h5>

    <h3>
      五、用 key 管理可复用的元素。Vue
      为你提供了一种方式来表达“这两个元素是完全独立的，不要复用它们”。只需添加一个具有唯一值的
      key attribute 即可
    </h3>
    <template v-if="loginType === 'username'">
      <label>Username</label>
      <input placeholder="Enter your username" key="username-input" />
    </template>
    <template v-else>
      <label>Email</label>
      <input placeholder="Enter your email address" key="email-input" />
    </template>
    <button @click="toggleLoginType">切换登录类型</button>
  </div>
</template>

<script>
export default {
  name: "HelloWorld",
  props: {
    msg: String,
  },
  data() {
    return {
      studentname: "张三",
      isActive: true,
      hasError: null,
      classObj: {
        active: true,
        text_danger: false,
      },
      styleObj: {
        color: "red",
        fontSize: "20px",
      },
      firstName: "李",
      secondName: "四",
      teacherName: "abcdef",
      question: "dsd",
      letterList: [
        {
          id: 0,
          lname: "aaa",
        },
        {
          id: 1,
          lname: "bbb",
        },
        {
          id: 2,
          lname: "ccc",
        },
      ],
      awesome: 2,
      loginType: "username",
    };
  },
  computed: {
    classObject() {
      return {
        active: this.isActive && !this.hasError,
        text_danger: this.hasError && this.hasError.type === "fatal",
      };
    },
    fullName() {
      return this.firstName + this.secondName;
    },
    reversedTname() {
      return this.teacherName.split("").reverse().join("");
    },
  },
  methods: {
    toggleLoginType() {
      if (this.loginType === "username") {
        this.loginType = "email";
      } else {
        this.loginType = "username";
      }
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
@media (min-width: 375px) {
  .hello {
    background-color: #ebfacf;
  }
}

.active {
  color: #42b983;
}
.text_danger {
  font-size: 16px;
}
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
h3 {
  color: blueviolet;
  text-align: left;
}
</style>
