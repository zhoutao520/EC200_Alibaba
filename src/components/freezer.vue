<template>
  <div class="content" v-loading="loading">
    <div class="all-freezer">
        <ul>
            <li class="freezer" v-for="(item,index) in freezer" :key="index">
                <img v-if="index === 0" :src="item.status?'../../static/img/freezer_top.gif':'../../static/img/freezer_top.png'" alt="冷冻机">
                <img v-else :src="item.status?'../../static/img/freezer.gif':'../../static/img/freezer.png'" alt="冷冻机">
            </li>
        </ul>
        <ul class="left">
            <li class="freezer" v-for="item in pump_left">
                <img :src="item.status?'../../static/img/pump_left.gif':'../../static/img/pump_left.png'" alt="冷却循环水泵">
            </li>
            <li class="freezer" v-for="(item,index) in tower" :key="index">
                <img v-if="index === tower.length-1" :src="item.status?'../../static/img/tower_buttom.gif':'../../static/img/tower_buttom.png'" alt="冷却塔">
                <img v-else :src="item.status?'../../static/img/tower.gif':'../../static/img/tower.png'" alt="冷却塔">
            </li>
        </ul>
        <ul class="right">
            <li class="freezer" v-for="item in pump_right">
                <img :src="item.status?'../../static/img/pump_right.gif':'../../static/img/pump_right.png'" alt="冷冻循环水泵">
            </li>
            <li class="freezer" v-for="(item,index) in condenser" :key="index">
                <img v-if="index === condenser.length-1" :src="item.status?'../../static/img/condenser_buttom.gif':'../../static/img/condenser_buttom.png'" alt="新风机组">
                <img v-else :src="item.status?'../../static/img/condenser.gif':'../../static/img/condenser.png'" alt="新风机组">
            </li>
        </ul>
    </div>
    <div class="freezer-content">
        <el-card>
            <div slot="header">
                <span>冷水机组</span>
            </div>
            <span class="freezing-label" v-for="(item,index) in freezer" @click="freezerOpen(index)" :key="index">{{item.name}}
                <i v-if="item.status"></i>
                <i v-else style=" background-color: rgb(187, 187, 187)"></i>
            </span>
        </el-card>
        <el-card>
            <div slot="header">
                <span>冷却循环水泵</span>
            </div>
            <span class="freezing-label" v-for="(item,index) in pump_left" @click="plOpen(index)" :key="index">{{item.name}}
                <i v-if="item.status"></i>
                <i v-else style=" background-color: rgb(187, 187, 187)"></i>
            </span>
        </el-card>
        <el-card>
            <div slot="header">
                <span>冷冻循环水泵</span>
            </div>
            <span class="freezing-label" v-for="(item,index) in pump_right" @click="prOpen(index)" :key="index">{{item.name}}
                <i v-if="item.status"></i>
                <i v-else style=" background-color: rgb(187, 187, 187)"></i>
            </span>
        </el-card>
        <el-card>
            <div slot="header">
                <span>冷却塔</span>
            </div>
            <span class="freezing-label" v-for="(item,index) in tower" @click="towerOpen(index)" :key="index">{{item.name}}
                <i v-if="item.status"></i>
                <i v-else style=" background-color: rgb(187, 187, 187)"></i>
            </span>
        </el-card>
        <el-card>
            <div slot="header">
                <span>新风机组</span>
            </div>
            <span class="freezing-label" v-for="(item,index) in condenser" :key="index">{{item.name}}
                <i v-if="item.status"></i>
                <i v-else style=" background-color: rgb(187, 187, 187)"></i>
            </span>
        </el-card>
    </div>
    <div class="control" @click="box=!box">
        控制
    </div>
    <div class="control-box" v-show="box">
        <div class="instructions">
            <h2>ETA 控制器</h2>
             <el-cascader
                expand-trigger="hover"
                :options="options"
                class="test"
                size="medium"
                v-model="value">
            </el-cascader>
            <p>
                <button @click="open">确定</button>
                <button @click="cancel" style="border:1px solid #409eff;background-color:#fff;color:#409eff">取消</button>
            </p>
        </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  name:'freezer',
  data () {
      return {
          num:4,
          box:false,
          freezer:[
              {
                  name:'1#离心冷水机组',
                  status:true,
              },
              {
                  name:'2#离心冷水机组',
                  status:true,
              },
              {
                  name:'3#螺杆冷水机组',
                  status:true,
              },
          ],
          pump_left:[
              {
                  name:'1#冷却循环泵',
                  status:true,
              },
              {
                  name:'2#冷却循环泵',
                  status:true,
              },
              {
                  name:'3#冷却循环泵',
                  status:true,
              },
              {
                  name:'4#冷却循环泵',
                  status:true,
              },
          ],
          pump_right:[
              {
                  name:'1#冷冻循环泵',
                  status:true,
              },
              {
                  name:'2#冷冻循环泵',
                  status:true,
              },
              {
                  name:'3#冷冻循环泵',
                  status:true,
              },
              {
                  name:'4#冷冻循环泵',
                  status:true,
              },
          ],
          tower:[
              {
                  name:'1#冷却塔',
                  status:true,
              },
              {
                  name:'2#冷却塔',
                  status:true,
              },
              {
                  name:'3#冷却塔',
                  status:true,
              },
              {
                  name:'4#冷却塔',
                  status:true,
              },
              {
                  name:'5#冷却塔',
                  status:true,
              },
          ],
          condenser:[
              {
                  name:'1#新风机组',
                  status:true,
              },
              {
                  name:'2#新风机组',
                  status:true,
              },
              {
                  name:'3#新风机组',
                  status:true,
              },
              {
                  name:'4#新风机组',
                  status:true,
              },
              {
                  name:'5#新风机组',
                  status:true,
              },
              {
                  name:'6#新风机组',
                  status:true,
              }, 
          ],
          loading:false,
          options: [
              {
                value: 'ZLJ3_ManAuto.PV',
                label: '冷冻机手自动',
                children: [{
                    value: '1.0',
                    label: '手动',
                },{
                    value: '0.0',
                    label: '自动',
                }]
              },
              {
                value: 'ZLJ3_ManOn.PV',
                label: '冷冻机启停',
                children: [{
                    value: '1.0',
                    label: '启动',
                },{
                    value: '0.0',
                    label: '停止',
                }]
              },
              {
                value: 'ZLJ3_Run.PV',
                label: '冷冻机运行',
                children: [{
                    value: '1.0',
                    label: '运行',
                },{
                    value: '0.0',
                    label: '关闭',
                }]
              },
              {
                disabled: true,
                value: '',
                label: '——————————————',
              },
              {
                value: 'FJ3_ManAuto.PV',
                label: '冷却塔手自动',
                children: [{
                    value: '1.0',
                    label: '手动',
                },{
                    value: '0.0',
                    label: '自动',
                }]
              },
              {
                value: 'FJ3_ManOn.PV',
                label: '冷却塔启停',
                children: [{
                    value: '1.0',
                    label: '启动',
                },{
                    value: '0.0',
                    label: '停止',
                }]
              },
              {
                value: 'FJ3_Run.PV',
                label: '冷却塔运行',
                children: [{
                    value: '1.0',
                    label: '运行',
                },{
                    value: '0.0',
                    label: '关闭',
                }]
              },
              {
                disabled: true,
                value: '',
                label: '——————————————',
              },
              {
                value: 'LDB3_ManAuto.PV',
                label: '冷冻泵手自动',
                children: [{
                    value: '1.0',
                    label: '手动',
                },{
                    value: '0.0',
                    label: '自动',
                }]
              },
              {
                value: 'LDB3_ManOn.PV',
                label: '冷冻泵启停',
                children: [{
                    value: '1.0',
                    label: '启动',
                },{
                    value: '0.0',
                    label: '停止',
                }]
              },
              {
                value: 'LDB3_Run.PV',
                label: '冷冻泵运行',
                children: [{
                    value: '1.0',
                    label: '运行',
                },{
                    value: '0.0',
                    label: '关闭',
                }]
              },
              {
                disabled: true,
                value: '',
                label: '——————————————',
              },
              {
                value: 'LQB3_ManAuto.PV',
                label: '冷却泵手自动',
                children: [{
                    value: '1.0',
                    label: '手动',
                },{
                    value: '0.0',
                    label: '自动',
                }]
              },
              {
                value: 'LQB3_ManOn.PV',
                label: '冷却泵启停',
                children: [{
                    value: '1.0',
                    label: '启动',
                },{
                    value: '0.0',
                    label: '停止',
                }]
              },
              {
                value: 'LQB3_Run.PV',
                label: '冷却泵运行',
                children: [{
                    value: '1.0',
                    label: '运行',
                },{
                    value: '0.0',
                    label: '关闭',
                }]
              },
          ],
        value: []
      }
  },
  methods:{
      freezerOpen(index){
          if(index == 2){
            this.loading = true;
            if(this.freezer[index].status){
                axios.get('http://ali.cloudepc.epcifm.com/ldj/write/',{
                    params: {
                        pointName: 'ZLJ3_ManOn.PV',
                        pointValue:'0.0'
                    }
                })
                .then(res => {
                    axios.get('http://ali.cloudepc.epcifm.com/ldj/write/',{
                        params: {
                            pointName: 'ZLJ3_Run.PV',
                            pointValue:'0.0'
                        }
                    }).then(res =>{
                        this.freezer[index].status = false;
                        this.loading = false;
                    })
                })
            }else{
                axios.get('http://ali.cloudepc.epcifm.com/ldj/write/',{
                    params: {
                        pointName: 'ZLJ3_ManAuto.PV',
                        pointValue:'1.0'
                    }
                })
                .then(res => {
                    axios.get('http://ali.cloudepc.epcifm.com/ldj/write/',{
                        params: {
                            pointName: 'ZLJ3_ManOn.PV',
                            pointValue:'1.0'
                        }
                    }).then(res =>{
                        this.freezer[index].status = true;
                        this.loading = false;
                    })
                })
            }
          }else{
              this.$message({
                showClose: true,
                message: '该冷冻机暂不可控',
                type: 'error'
              });
          }
      },
      plOpen(index){
          if(index == 2){
            this.loading = true;
            if(this.pump_left[index].status){
                axios.get('http://ali.cloudepc.epcifm.com/ldj/write/',{
                    params: {
                        pointName: 'LQB3_ManOn.PV',
                        pointValue:'0.0'
                    }
                })
                .then(res => {
                    axios.get('http://ali.cloudepc.epcifm.com/ldj/write/',{
                        params: {
                            pointName: 'LQB3_Run.PV',
                            pointValue:'0.0'
                        }
                    }).then(res =>{
                        this.pump_left[index].status = false;
                        this.loading = false;
                    })
                })
            }else{
                axios.get('http://ali.cloudepc.epcifm.com/ldj/write/',{
                    params: {
                        pointName: 'LQB3_ManAuto.PV',
                        pointValue:'1.0'
                    }
                })
                .then(res => {
                    axios.get('http://ali.cloudepc.epcifm.com/ldj/write/',{
                        params: {
                            pointName: 'LQB3_ManOn.PV',
                            pointValue:'1.0'
                        }
                    }).then(res =>{
                        this.pump_left[index].status = true;
                        this.loading = false;
                    })
                })
            }
          }else{
              this.$message({
                showClose: true,
                message: '该冷却循环泵暂不可控',
                type: 'error'
              });
          }
      },
      prOpen(index){
          if(index == 2){
              this.pump_right[index].status = !this.pump_right[index].status;
            // this.loading = true;
            // if(this.pump_right[index].status){
                // axios.get('http://ali.cloudepc.epcifm.com/ldj/write/',{
                //     params: {
                //         pointName: 'LDB3_ManOn.PV',
                //         pointValue:'0.0'
                //     }
                // })
                // .then(res => {
                //     axios.get('http://ali.cloudepc.epcifm.com/ldj/write/',{
                //         params: {
                //             pointName: 'LDB3_Run.PV',
                //             pointValue:'0.0'
                //         }
                //     }).then(res =>{
                //         this.pump_right[index].status = false;
                //         this.loading = false;
                //     })
                // })
            // }else{
                // axios.get('http://ali.cloudepc.epcifm.com/ldj/write/',{
                //     params: {
                //         pointName: 'LDB3_ManAuto.PV',
                //         pointValue:'1.0'
                //     }
                // })
                // .then(res => {
                //     axios.get('http://ali.cloudepc.epcifm.com/ldj/write/',{
                //         params: {
                //             pointName: 'LDB3_ManOn.PV',
                //             pointValue:'1.0'
                //         }
                //     }).then(res =>{
                //         this.pump_right[index].status = true;
                //         this.loading = false;
                //     })
                // })
            // }
          }else{
              this.$message({
                showClose: true,
                message: '该冷冻循环泵暂不可控',
                type: 'error'
              });
          }
      },
      towerOpen(index){
          if(index == 2){
            this.loading = true;
            if(this.tower[index].status){
                axios.get('http://ali.cloudepc.epcifm.com/ldj/write/',{
                    params: {
                        pointName: 'FJ3_ManOn.PV',
                        pointValue:'0.0'
                    }
                })
                .then(res => {
                    axios.get('http://ali.cloudepc.epcifm.com/ldj/write/',{
                        params: {
                            pointName: 'FJ3_Run.PV',
                            pointValue:'0.0'
                        }
                    }).then(res =>{
                        this.tower[index].status = false;
                        this.loading = false;
                    })
                })
            }else{
                axios.get('http://ali.cloudepc.epcifm.com/ldj/write/',{
                    params: {
                        pointName: 'FJ3_ManAuto.PV',
                        pointValue:'1.0'
                    }
                })
                .then(res => {
                    axios.get('http://ali.cloudepc.epcifm.com/ldj/write/',{
                        params: {
                            pointName: 'FJ3_ManOn.PV',
                            pointValue:'1.0'
                        }
                    }).then(res =>{
                        this.tower[index].status = true;
                        this.loading = false;
                    })
                })
            }
          }else{
              this.$message({
                showClose: true,
                message: '该冷却塔暂不可控',
                type: 'error'
              });
          }
      },
      open(){
        this.loading = true;
        axios.get('http://ali.cloudepc.epcifm.com/ldj/write/',{
            params: {
                pointName: this.value[0],
                pointValue:this.value[1]
            }
        })
        .then(res => {
            this.loading = false;
        })
      },
      cancel(){
        this.box = false;
        axios.get('http://ali.cloudepc.epcifm.com/ldj/status/')
        .then(res => {
        console.log(res)
        for(let x in res.data[1]){
            res.data[1][x]?this.freezer[2].status = true:this.freezer[2].status = false;
        }
        for(let y in res.data[4]){
            res.data[4][y]?this.tower[2].status = true:this.tower[2].status = false;
        }
        for(let m in res.data[7]){
            res.data[7][m]?this.pump_right[2].status = true:this.pump_right[2].status = false;
        }
        for(let n in res.data[10]){
            res.data[10][n]?this.pump_left[2].status = true:this.pump_left[2].status = false;
        }
        })
      }
  },
  mounted () {
      axios.get('http://ali.cloudepc.epcifm.com/ldj/status/')
      .then(res => {
          console.log(res)
          for(let x in res.data[1]){
              res.data[1][x]?this.freezer[2].status = true:this.freezer[2].status = false;
          }
          for(let y in res.data[4]){
              res.data[4][y]?this.tower[2].status = true:this.tower[2].status = false;
          }
          for(let m in res.data[7]){
              res.data[7][m]?this.pump_right[2].status = true:this.pump_right[2].status = false;
          }
          for(let n in res.data[10]){
              res.data[10][n]?this.pump_left[2].status = true:this.pump_left[2].status = false;
          }
      })
  }
}
</script>

<style lang="scss" scoped>
@function pxToRem($px) {
    @return $px / 100 * 1rem;
}
.content{
    position: relative;
    width: 100%;
    height: 100%;
    overflow: auto;
    display: flex;
    .control{
        position: fixed;
        bottom: pxToRem(10);
        right: pxToRem(20);
        width: pxToRem(40);
        height: pxToRem(40);
        background: #409eff;
        font-size: pxToRem(12);
        line-height: pxToRem(40);
        text-align: center;
        color: #fff;
        border-radius: 5px;
        cursor: pointer;
    }
    .control-box{
        width: 100%;
        height: 100%;
        position: fixed;
        z-index: 999;
        background: rgba(0,0,0,0.5);
        .instructions{
            width: pxToRem(400);
            height: pxToRem(200);
            background: #fff;
            position: absolute;
            top: pxToRem(200);
            left: pxToRem(400);
            border-radius: 5px;
            h2{
                text-align: center;
                font-size: pxToRem(16);
                line-height: pxToRem(50);
            }
            .test{
                margin-left: pxToRem(80);
                margin-top: pxToRem(20);
                width: pxToRem(250);
            }
            p{
                padding: pxToRem(30) pxToRem(40);
                button{
                    float: right;
                    outline: none;
                    border: none;
                    background-color: #409eff;
                    margin-left: pxToRem(10);
                    color: #fff;
                    border-radius: 5px;
                    padding: pxToRem(5) pxToRem(10);
                }
            }
        }
    }
    .all-freezer{
        border: 2px solid #f5f5f5;
        border-top: pxToRem(5) solid #90c0f2;
        border-radius: pxToRem(10);
        display: flex;
        flex-wrap: wrap;
        width: 25%;
        height: fit-content;
        font-size: 0;
        margin: pxToRem(30);
        padding: pxToRem(20);
        .freezer{
            justify-content: center;
            img{
                width: 100%;
                height: auto;
            }
        }
        .left{
            width: 50%;
        }
        .right{
            width: 50%;  
        }
    }
    .freezer-content{
        position: fixed;
        right: pxToRem(30);
        border: 2px solid #f5f5f5;
        border-top: pxToRem(5) solid #90c0f2;
        border-radius: pxToRem(10);
        display: flex;
        flex-wrap: wrap;
        width: 50%;
        margin: pxToRem(30);
        padding: pxToRem(20);
        .el-card{
            margin-bottom: pxToRem(18);
            cursor: pointer;
            width: 100%;
            &:last-child{
               margin-bottom:0; 
            }
        }
        .freezing-label{
            padding: pxToRem(7);
            font-size: pxToRem(14);
            border: 1px solid #dadada;
            display: inline-block;
            cursor: pointer;
            i{
                display: inline-block;
                width: pxToRem(15);
                height: pxToRem(15);
                border-radius: 50%;
                border: 2px solid #ddd;
                background: #25ff00;
                vertical-align: text-bottom;
            }
        }
    }
}
</style>
