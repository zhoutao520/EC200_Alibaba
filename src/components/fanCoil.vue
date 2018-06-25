<template>
    <div class="content">
        <h2>环境群控系统——1-3-N</h2>
        <div class="box" style="margin:0">
            <div id="tem1" class="tem"></div>
            <p>设置温度
                <svg class="icon" aria-hidden="true" @click="control(217,197,1)">
                    <use xlink:href="#icon-msnui-triangle-up"></use>
                </svg>
                <span>{{tem1}}℃</span>
                <svg class="icon" aria-hidden="true" @click="control(217,277,2)">
                    <use xlink:href="#icon-msnui-triangle-down"></use>
                </svg>
            </p>
            <div class="control">
                <div class="wind" :class="wind==1?'active':''" @click="control(217,517,3)">
                    <svg class="icon" aria-hidden="true">
                        <use xlink:href="#icon-xiaofeng"></use>
                    </svg>
                </div>
                <div class="wind" :class="wind==2?'active':''" @click="control(137,517,4)">
                    <svg class="icon" aria-hidden="true">
                        <use xlink:href="#icon-zhongfeng"></use>
                    </svg>
                </div>
                <div class="wind" :class="wind==3?'active':''" @click="control(57,517,5)">
                    <svg class="icon" aria-hidden="true">
                        <use xlink:href="#icon-dafeng"></use>
                    </svg>
                </div>
                <div class="wind" :class="open?'active':''" @click="control(137,117,6)">
                    <svg class="icon" aria-hidden="true">
                        <use xlink:href="#icon-guanbi"></use>
                    </svg>
                </div>
            </div>
            <button>单控</button>
        </div>
        <div class="box">
            <div id="tem2" class="tem"></div>
            <p>设置温度
                <svg class="icon" aria-hidden="true">
                    <use xlink:href="#icon-msnui-triangle-up"></use>
                </svg>
                <span>{{tem2}}℃</span>
                <svg class="icon" aria-hidden="true">
                    <use xlink:href="#icon-msnui-triangle-down"></use>
                </svg>
            </p>
            <div class="control">
                <div class="wind">
                    <svg class="icon" aria-hidden="true">
                        <use xlink:href="#icon-xiaofeng"></use>
                    </svg>
                </div>
                <div class="wind">
                    <svg class="icon" aria-hidden="true">
                        <use xlink:href="#icon-zhongfeng"></use>
                    </svg>
                </div>
                <div class="wind active">
                    <svg class="icon" aria-hidden="true">
                        <use xlink:href="#icon-dafeng"></use>
                    </svg>
                </div>
                <div class="wind active">
                    <svg class="icon" aria-hidden="true">
                        <use xlink:href="#icon-guanbi"></use>
                    </svg>
                </div>
            </div>
            <button>单控</button>
        </div>
        <div class="box">
            <div id="tem3" class="tem"></div>
            <p>设置温度
                <svg class="icon" aria-hidden="true">
                    <use xlink:href="#icon-msnui-triangle-up"></use>
                </svg>
                <span>{{tem3}}℃</span>
                <svg class="icon" aria-hidden="true">
                    <use xlink:href="#icon-msnui-triangle-down"></use>
                </svg>
            </p>
            <div class="control">
                <div class="wind">
                    <svg class="icon" aria-hidden="true">
                        <use xlink:href="#icon-xiaofeng"></use>
                    </svg>
                </div>
                <div class="wind">
                    <svg class="icon" aria-hidden="true">
                        <use xlink:href="#icon-zhongfeng"></use>
                    </svg>
                </div>
                <div class="wind active">
                    <svg class="icon" aria-hidden="true">
                        <use xlink:href="#icon-dafeng"></use>
                    </svg>
                </div>
                <div class="wind active">
                    <svg class="icon" aria-hidden="true">
                        <use xlink:href="#icon-guanbi"></use>
                    </svg>
                </div>
            </div>
            <button>单控</button>
        </div>
    </div>
</template>

<script>
import axios from 'axios'
import echarts from 'echarts'
export default {
    name:'fanCoil',
    data(){
        return{
            wind:3,
            open:true,
            tem1:27,
            tem2:26,
            tem3:26,
            temR1:23,
            temR2:22,
            temR3:22,
            test:true
        }
    },
    methods:{
        control(x,y,index){
            switch(index){
                case 1:
                    this.tem1++;
                    break;
                case 2:
                    this.tem1--;
                    break;
                case 3:
                    this.wind = 1;
                    break;
                case 4:
                    this.wind = 2;
                    break;
                case 5:
                    this.wind = 3;
                    break;
                case 6:
                    this.open = !this.open;
                    break;
            }
            axios.get('http://ali.cloudepc.epcifm.com/pg/write/',{
                params: {
                    pointX: x,
                    pointY:y
                }
            })
            .then(res => {
                this.loading = false;
            })
        },
    },
    mounted(){
        let tem1Id = document.getElementById('tem1');
        let tem1Chart = echarts.init(tem1Id);
        let tem1 = {
            series: [
                {
                    name: '室内温度',
                    type: 'gauge',
                    min:0,
                    max:40,
                    radius: '100%',
                    axisLine: {            // 坐标轴线
                        lineStyle: {       // 属性lineStyle控制线条样式
                            width: 5
                        }
                    },
                    axisTick: {            // 坐标轴小标记
                        length: 10,        // 属性length控制线长
                        lineStyle: {       // 属性lineStyle控制线条样式
                            color: 'auto'
                        }
                    },
                    splitLine: {           // 分隔线
                        length: 15,         // 属性length控制线长
                        lineStyle: {       // 属性lineStyle（详见lineStyle）控制线条样式
                            color: 'auto'
                        }
                    },
                    detail: {formatter:'{value}℃'},
                    data: [{value: this.temR1, name: '室内温度'}]
                }
            ]
        };
        tem1Chart.setOption(tem1,true);
        let tem2Id = document.getElementById('tem2');
        let tem2Chart = echarts.init(tem2Id);
        let tem2 = {
            series: [
                {
                    name: '室内温度',
                    type: 'gauge',
                    min:0,
                    max:40,
                    radius: '100%',
                    axisLine: {            // 坐标轴线
                        lineStyle: {       // 属性lineStyle控制线条样式
                            width: 5
                        }
                    },
                    axisTick: {            // 坐标轴小标记
                        length: 10,        // 属性length控制线长
                        lineStyle: {       // 属性lineStyle控制线条样式
                            color: 'auto'
                        }
                    },
                    splitLine: {           // 分隔线
                        length: 15,         // 属性length控制线长
                        lineStyle: {       // 属性lineStyle（详见lineStyle）控制线条样式
                            color: 'auto'
                        }
                    },
                    detail: {formatter:'{value}℃'},
                    data: [{value: this.temR2, name: '室内温度'}]
                }
            ]
        };
        tem2Chart.setOption(tem2,true);
        let tem3Id = document.getElementById('tem3');
        let tem3Chart = echarts.init(tem3Id);
        let tem3 = {
            series: [
                {
                    name: '室内温度',
                    type: 'gauge',
                    min:0,
                    max:40,
                    radius: '100%',
                    axisLine: {            // 坐标轴线
                        lineStyle: {       // 属性lineStyle控制线条样式
                            width: 5
                        }
                    },
                    axisTick: {            // 坐标轴小标记
                        length: 10,        // 属性length控制线长
                        lineStyle: {       // 属性lineStyle控制线条样式
                            color: 'auto'
                        }
                    },
                    splitLine: {           // 分隔线
                        length: 15,         // 属性length控制线长
                        lineStyle: {       // 属性lineStyle（详见lineStyle）控制线条样式
                            color: 'auto'
                        }
                    },
                    detail: {formatter:'{value}℃'},
                    data: [{value: this.temR3, name: '室内温度'}]
                }
            ]
        };
        tem3Chart.setOption(tem3,true);
    }
}

</script>

<style lang="scss" scoped>
@function pxToRem($px) {
    @return $px / 100 * 1rem;
}
.tem{
    width: pxToRem(400);
    height: pxToRem(200);
    margin-top: pxToRem(30);
}
.content{
    width: 100%;
    height: 100%;
    position: relative;
    background-color: #657688;
    font-size: pxToRem(14);
    padding: 0 pxToRem(20);
    .icon{
        width: 1em;
        height: 1em;
        cursor: pointer;
        &:first-child{
            margin-left: pxToRem(30);
        }
    }
    h2{
        line-height: pxToRem(50);
        font-size: pxToRem(24);
        margin-bottom: pxToRem(20);
        color: #fff;
    }
    .box{
        width: pxToRem(400);
        height: pxToRem(580);
        float: left;
        border: pxToRem(5) solid #fff;
        margin-left: pxToRem(20);
        background-color: #fff;
        p{
            font-size: pxToRem(35);
            line-height: pxToRem(60);
            text-align: center;
        }
        .control{
            width: 100%;
            height: pxToRem(200);
            display: flex;
            justify-content: center;
            align-items: center;
            .wind{
                width: pxToRem(70);
                height: pxToRem(70);
                border: 1px solid #969696;
                border-radius: 50%;
                text-align: center;
                color: #969696;
                margin: pxToRem(10);
                line-height: pxToRem(85);
                font-size: pxToRem(40);
                .icon{
                    margin: 0;
                }
            }
            .active{
                background: #1ac4e7;
                color: #fff;
            }
        }
        button{
            width: 80%;
            margin-left: 10%;
            height: pxToRem(50);
            background: #5ac2c3;
            outline: none;
            border: none;
            color: #fff;
            font-size: pxToRem(16);
            line-height: pxToRem(50);
            cursor: pointer;
            box-shadow: 0 0 5px #969696;
        }
    }
}
</style>
