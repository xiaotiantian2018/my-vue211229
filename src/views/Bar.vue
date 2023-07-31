<template>
  <div class="bar">
    <h1>This is an bar page, </h1>
    <h2> this.$route.path:{{ path }}</h2>
    <h2> this.$route.params:{{$route.params}}</h2>
    <h2> this.$route.query:{{$route.query}}</h2>
    <p>{{obj.foo}}</p>
    <button @click="obj.foo = 'baz'">Change it</button>
  
    <div id="pie" style="width: 600px;height: 400px;"></div>


  </div>
</template>
<script>
let obj = {
  foo:'bar'
}
// Object.freeze(obj)
export default {
  name: "Bar",

  data() {
    return {
      obj
    };
  },
  computed: {
    path() {
      console.log("this.$route", this.$route);
      return this.$route.path;
    },
  },
  mounted() {
    this.pieEcharts();
  },
  methods:{
	//option
    pieEcharts () {
      var myChart = this.$echarts.init(document.getElementById('pie'))
      // 配置图表
      var option = {
        title: {
          text: '耗材大类',
          subtext: '入库总数量',
          left: 'center'
        },
        tooltip: {
          trigger: 'item'
        },
        legend: {
          orient: 'vertical',
          left: 'left'
        },
        series: [
          {
            name: '实验室名称1',
            type: 'pie',
            radius: '50%',
            data: [
              { value: 1048, name: '耗材大类1' },
              { value: 735, name: '耗材大类2' },
              { value: 580, name: '耗材大类3' },
              { value: 484, name: '耗材大类4' },
              { value: 300, name: '耗材大类5' }
            ],
            emphasis: {
              itemStyle: {
                shadowBlur: 10,
                shadowOffsetX: 0,
                shadowColor: 'rgba(0, 0, 0, 0.5)'
              }
            }
          }
        ]
      }
      myChart.setOption(option)
    }
  }
};
</script>

