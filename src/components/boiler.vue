<template>
    <div class="content">
        <div id="boiler" class="machine">
            <div class="box" style="width: 20%;">
                <h3 @click="boilerType=0">供热系统</h3>
                <div class="machine-freezing" >
                    <figure class="freezer" @click="boilerType=3">
                        <img src="../../static/img/boiler.jpg" alt="锅炉" title="锅炉">
                        <figcaption>锅炉</figcaption>
                    </figure>
                    <figure class="freezer" @click="boilerType=1">
                        <img src="../../static/img/rb.jpg" alt="水源热泵" title="水源热泵">
                        <figcaption>水源热泵</figcaption>
                    </figure>
                    <figure class="freezer" @click="boilerType=2">
                        <img src="../../static/img/sb.jpg" alt="循环水泵" title="循环水泵">
                        <figcaption>循环水泵</figcaption>
                    </figure>
                </div>
            </div>
            <div class="box" style="width: 70%;">
                <div class="box-content" v-show="boilerType==0">
                    <div class="freezing-box">
                        <el-card>
                            <div slot="header">
                                <span>锅炉机组</span>
                            </div>
                            <span class="freezing-label" @click="boilerType=3" v-for="(item,index) in boiler.allBoiler" :key="index">{{item.name}}
                                <i v-if="item.state==0"></i>
                                <i v-if="item.state==1" style=" background: rgb(187, 187, 187)"></i>
                                <i v-if="item.state==2" style=" background: red"></i>
                            </span>
                        </el-card>
                        <el-card>
                            <div slot="header">
                                <span>水源热泵机组</span>
                            </div>
                            <span class="freezing-label" @click="boilerType=1" v-for="(item,index) in boiler.heat_pump" :key="index">{{item.name}}
                                <i v-if="item.state==0"></i>
                                <i v-if="item.state==1" style=" background: rgb(187, 187, 187)"></i>
                                <i v-if="item.state==2" style=" background: red"></i>
                            </span>
                        </el-card>
                        <el-card>
                            <div slot="header">
                                <span>供热循环水泵</span>
                            </div>
                            <span class="freezing-label" @click="boilerType=2" v-for="item in boiler.pump" :key="item.id">{{item.name}}
                                <i v-if="item.state==0"></i>
                                <i v-if="item.state==1" style=" background: rgb(187, 187, 187)"></i>
                                <i v-if="item.state==2" style=" background: red"></i>
                            </span>
                        </el-card>
                    </div>
                </div>
                <div class="box-content" v-show="boilerType==1">
                    <el-card class="pump" v-for="(item,index) in heat_pump" :key="index">
                        <div slot="header">
                            <span>{{item.name}}</span>
                            <i v-if="item.state==0"></i>
                            <i v-if="item.state==1" style=" background: rgb(187, 187, 187)"></i>
                            <i v-if="item.state==2" style=" background: red"></i>
                        </div>
                        <div class="parameter">
                            <ul>
                            <li>热泵启停：
                                <el-switch
                                v-model="item.unlock"
                                active-color="#13ce66"
                                :width=30
                                inactive-color="#ddd"
                                @change="coolingWaterLock(item.id)">
                            </el-switch></li>
                            <li>制冷工况：<i :style="item.condition1?'':'background: rgb(187, 187, 187)'"></i></li>
                            <li>供热工况：<i :style="item.condition2?'':'background: rgb(187, 187, 187)'"></i></li>
                            <li>供水温度：{{item.supply_tem}}</li>
                            <li>设定供水温度：<input type="text" @blur="coolingWaterTem(item.id)" :placeholder="item.supply_tem"></li>
                            </ul>
                        </div>
                        <table class="table">
                            <thead>
                                <tr>
                                    <th>类型</th>
                                    <th>进水温度</th>
                                    <th>出水温度</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>蒸发器</td>
                                    <td>{{item.evaporator_enter}}</td>
                                    <td>{{item.evaporator_out}}</td>
                                </tr>
                                <tr>
                                    <td>冷凝器</td>
                                    <td>{{item.condenser_enter}}</td>
                                    <td>{{item.condenser_out}}</td>
                                </tr>
                            </tbody>
                        </table>
                    </el-card>
                </div>
                <div class="box-content" v-show="boilerType==2">
                    <el-card class="pump" v-for="(item,index) in boiler_pump" :key="index">
                        <div slot="header">
                            <span>{{item.name}}</span>
                            <i v-if="item.state==0"></i>
                            <i v-if="item.state==1" style=" background: rgb(187, 187, 187)"></i>
                            <i v-if="item.state==2" style=" background: red"></i>
                        </div>
                        <div class="parameter">
                            <ul>
                            <li>水泵启停：
                                <el-switch
                                v-model="item.unlock"
                                active-color="#13ce66"
                                :width=30
                                inactive-color="#ddd"
                                @change="freezing_pumpLock(item.id)">
                            </el-switch></li>
                            <li>控制状态：{{item.control}}</li>
                            <li>设定频率：<input type="text" @blur="freezing_pumpRate(item.id)" :placeholder="item.supply_rate"></li>
                            </ul>
                        </div>
                        <table class="table">
                            <thead>
                                <tr>
                                    <th>频率</th>
                                    <th>出口压力</th>
                                    <th>入口压力</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>{{item.supply_rate}}</td>
                                    <td>{{item.pressure_out}}</td>
                                    <td>{{item.pressure_enter}}</td>
                                </tr>
                            </tbody>
                        </table>
                    </el-card>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
  name: 'boiler',
  data () {
      return {
        boilerType:0,
        boiler:{
            allBoiler:[
                {
                    name:'1#锅炉',
                    state:1,
                },
                {
                    name:'2#锅炉',
                    state:1,
                },
                {
                    name:'3#锅炉',
                    state:1,
                },
            ],
            heat_pump:[
                {
                    name:'1#水源热泵',
                    state:1,
                    tem:37
                },
                {
                    name:'2#水源热泵',
                    state:1,
                    tem:37
                },
                {
                    name:'3#水源热泵',
                    state:1,
                    tem:37
                },
            ],
            pump:[
                {
                    name:'1#供热循环水泵',
                    state:1,
                    rate:60
                },
                {
                    name:'2#供热循环水泵',
                    state:1,
                    rate:60
                },
                {
                    name:'3#供热循环水泵',
                    state:1,
                    rate:60
                },
                {
                    name:'4#供热循环水泵',
                    state:1,
                    rate:60
                },
            ]
        },
        heat_pump:[
            {
                id:1,
                name:'一号水源热泵',
                unlock:false,
                state:1,
                condition1:false,
                condition2:false,
                supply_tem:'-',
                evaporator_enter:'-',
                evaporator_out:'-',
                condenser_enter:'-',
                condenser_out:'-'
            },
            {
                id:2,
                name:'二号水源热泵',
                unlock:false,
                state:1,
                condition1:false,
                condition2:false,
                supply_tem:'-',
                evaporator_enter:'-',
                evaporator_out:'-',
                condenser_enter:'-',
                condenser_out:'-'
            },
            {
                id:3,
                name:'三号水源热泵',
                unlock:false,
                state:1,
                condition1:false,
                condition2:false,
                supply_tem:'-',
                evaporator_enter:'-',
                evaporator_out:'-',
                condenser_enter:'-',
                condenser_out:'-'
            },
        ],
        boiler_pump:[
            {
                id:1,
                name:'一号供热循环水泵',
                unlock:false,
                state:1,
                control:'远程',
                supply_rate:'-',
                pressure_enter:'-',
                pressure_out:'-'
            },
            {
                id:2,
                name:'二号供热循环水泵',
                unlock:false,
                state:1,
                control:'远程',
                supply_rate:'-',
                pressure_enter:'-',
                pressure_out:'-'
            },
            {
                id:3,
                name:'三号供热循环水泵',
                unlock:false,
                state:1,
                control:'远程',
                supply_rate:'-',
                pressure_enter:'-',
                pressure_out:'-'
            },
            {
                id:4,
                name:'四号供热循环水泵',
                unlock:false,
                state:1,
                control:'远程',
                supply_rate:'-',
                pressure_enter:'-',
                pressure_out:'-'
            },
        ],
      }
  },
  methods:{
    coolingWaterTem : function (index) {
        console.log(index)
    },
    coolingWaterLock : function (index) {
        console.log(index)
    },
    freezing_pumpRate : function (index) {
        console.log(index)
    },
    freezing_pumpLock : function (index) {
        console.log(index)
    },
  }
}
</script>

<style lang="scss" scoped>
@function pxToRem($px) {
    @return $px / 100 * 1rem;
}
/*滚动条样式*/
.content::-webkit-scrollbar {/*滚动条整体样式*/
    width: 10px;     /*高宽分别对应横竖滚动条的尺寸*/
    height: 10px;
}
.content::-webkit-scrollbar-thumb {/*滚动条里面小方块*/
    border-radius: 5px;
    -webkit-box-shadow: inset 0 0 5px rgba(0,0,0,0.2);
    background: rgba(0,0,0,0.2);
}
.content::-webkit-scrollbar-track {/*滚动条里面轨道*/
    -webkit-box-shadow: inset 0 0 5px rgba(0,0,0,0.2);
    border-radius: 0;
    background: rgba(0,0,0,0.1);
}
.freezing-box{
    width: pxToRem(650);
    height: pxToRem(450);
    margin: pxToRem(20) auto;
    border-radius: 3px;
    text-align: left;
    .el-card{
        margin-bottom: pxToRem(20);
        cursor: pointer;
    }
    .freezing-label{
        padding: pxToRem(7);
        font-size: pxToRem(15);
        border: 1px solid #f1f1f1;
        display: inline-block;
        margin-left: pxToRem(7);
        margin-top: pxToRem(5);
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
        small{
            margin-left: pxToRem(10);
        }
    }
}
.content{
  width: 100%;
  height: 100%;
  overflow: auto;
    .machine{
        height: pxToRem(630);
        padding: pxToRem(20);
        overflow: hidden;
        .machine-freezing{
            height: 90%;
            overflow: auto;
            cursor: pointer;
        }
        &::-webkit-scrollbar-thumb:horizontal {
            border-radius: 4px;
            -webkit-box-shadow: inset 0 0 6px rgba(0,0,0,.3);
            background-color:rgba(9, 144, 255, 0.5);
        }
        &::-webkit-scrollbar-thumb:vertical {
            border-radius: 4px;
            -webkit-box-shadow: inset 0 0 6px rgba(0,0,0,.3);
            background-color:rgba(9, 144, 255, 0.5);
        }
        .freezer{
            margin: 0;
            margin-top: pxToRem(15);
            margin-left: auto;
            margin-right: auto;
            width: 80%;
            border: 1px solid #d2d6de;
            border-radius: 5px;
            box-shadow: 0px 0px 10px #000;
        }
        img{
            height: pxToRem(100);
        }
        h3{
            border-bottom: 1px solid #11cad2;
            margin: 0;
            padding: pxToRem(10);
            font-size: pxToRem(18);
            cursor: pointer;                               
        }
    }
    .box{
        position: relative;
        height: pxToRem(630);
        text-align: center;
        font-weight: 300;
        padding-bottom: 1px;
        float: left;
        margin-right: 5%;
        border-radius: 5px;
        overflow: hidden;
        background: #ffffff;
        border-top: 3px solid #d2d6de;
        box-shadow: 0 1px 1px rgba(0, 0, 0, 0.1);
        .box-content{
            overflow: auto;
            height: pxToRem(620);
            .pump{
                width: 29%;
                margin: 2% 2% 0;
                font-size: 12px;
                border: 1px solid #f1f1f1;
                float: left;
                .el-card__body{
                    padding: pxToRem(15)!important;
                }
                .el-card__header{
                    padding: 0;
                    font-size: pxToRem(18);
                    line-height:pxToRem(40);
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
                h4{
                    font-size: pxToRem(16);
                }
                table{
                    margin-top: pxToRem(10);
                    font-size: pxToRem(12);
                }
                li{
                    line-height: pxToRem(25);
                }
            }
            .pump-buttom{
                background: #729aca;
                color: white;
                margin-bottom: pxToRem(20);
            }
            .content-left{
                width: pxToRem(200);
                height: pxToRem(430);
                background: #f1f1f1;
                margin-left: pxToRem(20);
                border-radius: 5px;
                float: left;
                overflow: auto;
                li{
                    font-size: 18px;
                    line-height: pxToRem(40);
                    cursor: pointer;
                    margin-top: 10px;
                    span{
                        font-size: 12px;
                    }
                    &:first-child{
                        font-size: 22px;
                    }
                    &:hover{
                       color: red;
                    }
                }
                i{
                    display: inline-block;
                    width: pxToRem(15);
                    height: pxToRem(15);
                    margin-left: pxToRem(10);
                    border-radius: 50%;
                    border: 2px solid #ddd;
                    background: #25ff00;
                }
            }
            .content-right{
                width: pxToRem(450);
                height: pxToRem(430);
                background: #f1f1f1;
                margin-left: pxToRem(50);
                border-radius: 5px;
                float: left;
                overflow: auto;
                table{
                    margin-top: 20px;
                    td{
                        background-color: #f9f9f9;
                    }
                }
                .allFreezing{
                    ul{
                        width: 48%;
                        font-size: 16px;
                        line-height: 30px;
                        float: left;
                        text-align: left;
                        margin-left: 10px;
                    }
                    .title{
                        text-align: right;
                        margin: 0;
                    }
                }
            }
        }
        .nav li:hover{
            color: #555;
            background-color: #e7e7e7;
        }
        .board{
            width: pxToRem(300);
            padding: pxToRem(10);
            margin: 2%;
            border: 1px solid #d2d6de;
        }
        .parameter{
            width: 61%;
            margin: 0 auto;
            text-align: left;
            input{
                width: 20%;
                outline: none;
                font-size: pxToRem(12);
                border: 1px solid #409eff;
                border-radius: 3px;
                text-align: center;
            }
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
        table{
            width: 100%;
            font-size: 15px;
            caption{
                text-align: center;
                font-size: 18px;
            }
            thead{
                background-color: rgba(79,129,189, 0.8);
                color: white;
                font-weight: 300;
            }
            tbody{
            }
            tfoot{
                background-color: rgba(208,216,232, 0.8);
            }
            th,td{
                padding: pxToRem(5);
                text-align: center;
                vertical-align: middle;
                border:1px solid #ddd;
            }
        }
    }
    #boiler{
        .pump{
            width: 45%;
        }
    }
    #board{
        .pump{
            width: 45%;
        }
    }
    #freshAir{
        .box{
            width: 95%;
            margin: 0;
            overflow: auto;
            .fresh-name{
                font-size: pxToRem(20);
            }
            .el-card{
                width: 26%;
                margin: pxToRem(20);
            }
            .pump{
                width: 28%;
                margin: 2%;
                font-size: 12px;
                border: 1px solid #f1f1f1;
                float: left;
                .parameter{
                    width: 65%;
                }
                li{
                    line-height: pxToRem(22);
                }
            }
        }
    }
}
</style>

