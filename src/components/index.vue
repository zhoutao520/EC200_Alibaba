<template>
  <div class="content">
    <div class="machine freezing" :class="freezing.warn?'box-shadow-y':'box-shadow-b'">
        <a href="energyOperation.html#freezing">
        <h3>
            <i v-if="freezing.auto" title="自动">
                <svg class="icon" aria-hidden="true">
                    <use xlink:href="#icon-ruanqidong"></use>
                </svg>
            </i>
            <i v-else title="手动">
                <svg class="icon" aria-hidden="true">
                    <use xlink:href="#icon-guanbi"></use>
                </svg>
            </i>
            制冷系统
            <span :title="freezing.start ? '启动中' : '暂停中'" :class="[freezing.start ? 'green' : 'red']"></span>
        </h3>
        <p><span title="本小时冷需求量">EHCC：{{freezing.EHCC}}kw·h</span></p>
        <p><span title="下一小时冷需求量">FEA：{{freezing.FEA}}kw·h</span></p>
        <p><span title="冷冻机组的效率">COP：{{freezing.COP}}</span></p>
        <p><span title="实时能耗">实时能耗：{{freezing.RTEC}}kw·h</span></p>
        <p><span title="能源运行工况">能源运行工况：制冷</span></p>
        </a>
    </div>
    <div class="machine boiler" :class="boiler.warn?'box-shadow-y':'box-shadow-b'">
        <a href="energyOperation.html#boiler">
        <h3>
            <i v-if="boiler.auto" title="自动">
                <svg class="icon" aria-hidden="true">
                    <use xlink:href="#icon-ruanqidong"></use>
                </svg>
            </i>
            <i v-else title="手动">
                <svg class="icon" aria-hidden="true">
                    <use xlink:href="#icon-guanbi"></use>
                </svg>
            </i>
            供热系统
            <span :title="boiler.start ? '启动中' : '暂停中'" :class="[boiler.start ? 'green' : 'red']"></span>
        </h3>
        <p><span title="每小时热需求量">EHHC：{{boiler.EHCC}} T/h</span></p>
        <p><span title="未来能耗的需求预测">FEA：{{boiler.FEA}} kw·h</span></p>
        <p><span title="锅炉机组的效率">COP：{{boiler.COP}}</span></p>
        <p><span title="实时能耗">实时能耗：{{boiler.RTEC}} kw·h</span></p>
        <p><span title="能源运行工况">能源运行工况：停机</span></p>
        </a>
    </div>
    <div class="machine freshAir" :class="freshAir.warn?'box-shadow-y':'box-shadow-b'">
        <a href="energyOperation.html#freshAir">
        <h3>
            <i v-if="freshAir.auto" title="自动">
                <svg class="icon" aria-hidden="true">
                    <use xlink:href="#icon-ruanqidong"></use>
                </svg>
            </i>
            <i v-else title="手动">
                <svg class="icon" aria-hidden="true">
                    <use xlink:href="#icon-guanbi"></use>
                </svg>
            </i>
            新风机组
            <span :title="freshAir.start ? '启动中' : '暂停中'" :class="[freshAir.start ? 'green' : 'red']"></span>
        </h3>
        <p><span title="运行数量">运行数量：{{freshAir.runNum}}台</span></p>
        </a>
    </div>
    <div class="bottom">
        <span>总供水温度：24 ℃</span>
        <span>总回水温度：23.7 ℃</span>
        <span>总供水压力：1.1 Mpa</span>
        <span>总回水压力：0.3 Mpa</span>
        <span>总流量：0 m³/h</span>
    </div>
        <ul  class="floor">
            <li v-for="(item,index) in floor" :key="index">
                <router-link :to="{name:''+item.content+'',params:{id:item.id,content:item.content}}">{{item.content}}</router-link>
            </li>
        </ul>
    <div class="warning-box" v-if="warning" onclick="location.href='warning.html'">
        <p>警告框</p>
        <ul :style="{ marginTop: warnTop + 'px' }">
            <li v-for="(item,index) in warningContent" :class="item.type" :key="index">{{item.content}}</li>
        </ul>
    </div>
  </div>
</template>

<script>
export default {
  name:'index',
  data () {
      return {
        total_energy:'',
        thp:'',
        num:0,
        warnTop:0,
        warning:false,
        warningContent:[
            {
                type:'white',
                content:"会议室一非工作时间用电"
            },
            {
                type:'white',
                content:"7楼走廊非工作时间用电"
            },
            {
                type:'yellow',
                content:"1号冷却塔压力过高"
            },
            {
                type:'white',
                content:"1#电梯非工作时间用电"
            },
            {
                type:'white',
                content:"会议室一非工作时间用电"
            },
            {
                type:'yellow',
                content:"7号冷却塔温度过高"
            },
            {
                type:'white',
                content:"7楼走廊非工作时间用电"
            },
            {
                type:'white',
                content:"1#电梯非工作时间用电"
            },
            {
                type:'yellow',
                content:"3号冷却塔压力过高"
            }
        ],
        freezing:{
            start:true,
            auto:true,
            warn:false,
            EHCC:'0',
            FEA:'0',
            COP:'0',
            RTEC:'0'
        },
        boiler:{
            start:false,
            auto:false,
            warn:false,
            EHCC:'0',
            FEA:'0',
            COP:'0',
            RTEC:'0'
        },
        freshAir:{
            start:true,
            auto:true,
            warn:false,
            runNum:6
        },
        floor:[
            {
                id:1,
                content:'1F'
            },
            {
                id:2,
                content:'2F'
            },
            {
                id:3,
                content:'3F'
            },
            {
                id:4,
                content:'4F'
            },
            {
                id:5,
                content:'5F'
            },
            {
                id:6,
                content:'6F'
            },
            {
                id:7,
                content:'7F'
            },
        ]
      }
  },
  created () {
    setInterval( () => {
        let num = Math.abs(this.warnTop);
        if(num >= 30){
            this.warningContent.push(this.warningContent[0]);
            this.warningContent.shift();
            this.warnTop = 0;
        }
        this.warnTop -- ;
    },30)
  }
}
</script>

<style lang="scss" scoped>
@function pxToRem($px) {
    @return $px / 100 * 1rem;
}
 .content{
    width: 100%;
    height: 100%;
    position:relative;
    background-image: url("/static/img/background3.jpg");
    background-repeat:no-repeat;
    background-size:100% 100%;
    .machine{
        min-height: pxToRem(210);
        min-width: pxToRem(200);
        background-color: rgba(0,0,0,0.2);
        position: absolute;
        top: 20%;
        left: 10%;
        text-align: center;
        border-radius: 5px;
        box-shadow: 1px 1px 10px #000;
        transition: box-shadow .5s;
        i{
            margin: 0;
        }
        .icon{
            width: 1em;
            height: 1em;
            vertical-align: text-top;
        }
        h3{
            font-size: pxToRem(20);
            color: #fff;
            line-height: pxToRem(50);
            font-weight: bold;
            span{
                width: pxToRem(15);
                height: pxToRem(15);
                display: inline-block;
                border-radius: 50%;
                margin-left: pxToRem(15);
                border: 1px solid;
            }
            i{
                margin-left: pxToRem(10);
            }
        }
        p{
            line-height: pxToRem(30);
            color: white; 
            font-weight: bold;
        }
    }
    .boiler{
        left: 35%;
    }
    .freshAir{
        left: 60%;
    }
    .bottom{
        width: 100%;
        height: pxToRem(100);
        position: absolute;
        background: rgba(0, 0, 0, 0.5);
        bottom: 0;
        color: white;
        >span{
            display: inline-block;
            line-height: pxToRem(100);
            vertical-align: top;
            margin-left: 1em;
        }
        .bottom-icon{
            display: inline-block;
            margin-left: pxToRem(50);
            margin-top: pxToRem(15);
        }
        i{
            font-style: normal;
            color: white;
            cursor: pointer;
        }
        .icon{
            width: pxToRem(60);
            height: pxToRem(50);
        }
    }
    .floor{
        position: absolute;
        top: 28%;
        right: 5%;
        width: pxToRem(50);
        height: pxToRem(110);
        overflow: auto;
        text-align: center;
        box-shadow: 1px 1px pxToRem(10) #000;
        color: white;
        cursor: pointer;
        perspective: pxToRem(201);
        background-color: rgba(0,0,0,0.2);
        &::-webkit-scrollbar {
            width: 0;
        }
        a{
            color: #409eff;
        }
        li{
            line-height: pxToRem(20);
        }
        li:hover{
            font-size: pxToRem(18);
            a{
                color: #007bfa;
            }
        }
        
    }
}
.box-shadow-y{
    box-shadow: 1px 1px pxToRem(10) yellow!important;
}
.box-shadow-b{
    box-shadow: 1px 1px pxToRem(10) black;
}
.warning-box{
    width: 20%;
    height: 15%;
    position: absolute;
    background:rgba(210, 210, 210, 0.33);
    bottom: 0;
    right: 0;
    color: black;
    overflow: hidden;
    border-top-left-radius: 5px;
    border-top-right-radius: 5px;
    font-weight: 300;
    li{
        font-size: pxToRem(16);
        line-height: 30px;
    }
}
.warning{
}
.warning-box p{
    position: absolute;
    width: 100%;
    font-size: pxToRem(16);
    line-height: pxToRem(30);
    color: white;
    background-color: #696969;
    z-index: 2;
    box-shadow: 0px 1px 5px #000;
    text-align: center;
}
.green{
    background-color: rgb(12, 231, 12);
}
.red{
    background-color: rgb(231, 12, 12);
}
</style>