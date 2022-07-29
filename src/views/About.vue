<template>
  <div class="about">
    <h1>This is an about page</h1>
    <p v-for="item in items" :key="item.id">{{ item.id }}:{{ item.message }}</p>
    <p v-for="item in arrayMsg" :key="item.id">{{ item.id }}:{{ item.name }}</p>
  <div style="width:800px;margin:0 auto">
    <div id="line" style="width: 600px;height: 400px;"></div>
</div>
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
  methods:{
//option配置
   lineEcharts: function() {
      var myChart = this.$echarts.init(document.getElementById('line'))
      // 配置图表
      var option = {
        title: {
          text: 'Stacked Line'
        },
        tooltip: {
          trigger: 'axis'
        },
        legend: {
          data: ['Email', 'Union Ads']
        },
		//笛卡尔坐标系的底板
        grid: {
          left: '3%',
          right: '4%',
          bottom: '3%',
          containLabel: true
        },
		//工具框
        toolbox: {
          feature: {
            saveAsImage: {}
          }
        },
        xAxis: {
          type: 'category',
          boundaryGap: false,
          data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
        },
        yAxis: {
          type: 'value'
        },
        series: [
	
          { 	//线一
            name: 'Email',
            type: 'line',
            stack: 'Total',
            data: [120, 132, 101, 134, 90, 230, 210]
          },
		
          {    //线二
            name: 'Union Ads',
            type: 'line',
            stack: 'Total',
            data: [220, 182, 191, 234, 290, 330, 310]
          }
        ]
      }
      myChart.setOption(option)
    }

  },
  beforeCreate() {
    console.log("beforeCreate_about page");
  },
  created() {
    console.log("created_about page");
    console.log("this", this);
  },
  mounted() {
    this.items[0] = { message: "first", id: "1" }; //此时对象的值更改了，但是视图没有更新
    this.arrayMsg[1] = { name: "second", id: "5" };
    // 整个视图都渲染完毕再执行某些操作，可以在 mounted 内部使用 vm.$nextTick
    this.$nextTick(function () {
      alert("仅在整个视图都被渲染之后才会运行的代码");
    });

    this.lineEcharts();
  },
  beforeUpdate() {
    console.log("beforeUpdate_about page");
  },
  updated() {
    console.log("updated_about page");
    this.$nextTick(function () {
      //  仅在整个视图都被重新渲染之后才会运行的代码
      alert("仅在整个视图都被重新渲染之后才会运行的代码");
    });
  },
  beforeDestroy() {
    console.log("beforeDestroy");
  },
  destroyed() {
    console.log("destroyed");
  },
  beforeRouteEnter(to, from, next) {
    console.log("About--beforeRouteEnter", to, from);
    if (to.meta.isAuth) {
      //判断是否需要鉴权
      if (localStorage.getItem("school") === "heikeji") {
        next();
      } else {
        alert("学校名不对，无权限查看！");
      }
    } else {
      next();
    }
  },

  //通过路由规则，离开该组件时被调用,学习网址: https://blog.csdn.net/XiaoSen207/article/details/121628094
  beforeRouteLeave(to, from, next) {
    console.log("About--beforeRouteLeave", to, from);
    next();
  },
};
</script>
