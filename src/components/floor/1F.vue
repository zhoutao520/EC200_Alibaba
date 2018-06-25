<template>
<section>
  <div class="content">
    <div class="floor" id="floor">
        <ul class="floor-content" >
            <li v-for="(item,index) in floor" :key="index" :class="index===0?'floor-active':''">
                <router-link :to="{name:''+item.content+'',params:{id:item.id,content:item.content}}">{{item.content}}</router-link>
            </li>
        </ul>
    </div>
    <div class="multif point-1">
        <div class="point" v-for="(item,index) in point1" :key="index" :class="{'f-red':item.state===0,'f-green':item.state===1,'f-blue':item.state===2}"></div>
    </div>
    <div class="multif point-2">
        <div class="point" v-for="(item,index) in point2" :key="index" :class="{'f-red':item.state===0,'f-green':item.state===1,'f-blue':item.state===2}"></div>
    </div>
    <div class="multif point-3">
        <div class="point" v-for="(item,index) in point3" :key="index" :class="{'f-red':item.state===0,'f-green':item.state===1,'f-blue':item.state===2}"></div>
    </div>
    <div class="multif point-4">
        <div class="point" v-for="(item,index) in point4" :key="index" :class="{'f-red':item.state===0,'f-green':item.state===1,'f-blue':item.state===2}"></div>
    </div>
    <div class="multif point-5">
        <div class="point" v-for="(item,index) in point5" :key="index" :class="{'f-red':item.state===0,'f-green':item.state===1,'f-blue':item.state===2}"></div>
    </div>
    <div class="multif point-6">
        <div class="point" v-for="(item,index) in point6" :key="index" :class="{'f-red':item.state===0,'f-green':item.state===1,'f-blue':item.state===2}"></div>
    </div>
    <div class="multif point-7">
        <div class="point" v-for="(item,index) in point7" :key="index" :class="{'f-red':item.state===0,'f-green':item.state===1,'f-blue':item.state===2}"></div>
    </div>
    <div class="multif point-8">
        <div class="point" v-for="(item,index) in point8" :key="index" :class="{'f-red':item.state===0,'f-green':item.state===1,'f-blue':item.state===2}"></div>
    </div>
    <div class="multif point-9">
        <div class="point" v-for="(item,index) in point9" :key="index" :class="{'f-red':item.state===0,'f-green':item.state===1,'f-blue':item.state===2}"></div>
    </div>
    <div class="multif point-10">
        <div class="point" v-for="(item,index) in point10" :key="index" :class="{'f-red':item.state===0,'f-green':item.state===1,'f-blue':item.state===2}"></div>
    </div>
  </div>
    <div class="control">
        <h2><span>A1-1F</span><span>24 ℃/ 24  ℃</span></h2>
        <div class="control-con">
            <h3>预设</h3>
            <div class="float-left">
                <p><span>ALL：</span></p>
                <p><span>Group：</span></p>
                <p><span>Solo：</span></p>
                <p><span class="btn">Timer</span></p>
            </div>
            <div class="float-right">
                <p><span class="btn">C611</span></p>
                <p><span class="btn">G111</span></p>
                <p><span class="btn">7042</span></p>
                <p><span class="btn">Query Log</span></p>
            </div>
        </div>
        <div class="control-con">
            <h3>风机控制</h3>
            <p>
                <span class="btn">P</span>
                <span class="btn">H</span>
                <span class="btn">M</span>
                <span class="btn">L</span>
                <span class="btn">T</span>
            </p>
            <h3>照明控制</H3>
            <p>
                <span class="btn">ALL</span>
                <span class="btn">1/5</span>
                <span class="btn">2/6</span>
                <span class="btn">3/7</span>
                <span class="btn">4/8</span>
            </p>
            <p>
                <span class="btn">0%</span>
                <span class="btn">20%</span>
                <span class="btn">50%</span>
                <span class="btn">60%</span>
                <span class="btn">100%</span>
            </p>
        </div>
        <div class="control-con">
            <h3>温度设定</H3>
            <p>
                <span class="btn">UP</span>
                <span class="btn">DOWN</span>
            </p>
            <h3>工作时长</h3>
            <p class="time-btn">0</p>
            <p class="time-btn">50</p>
        </div>
    </div>
</section>
</template>

<script>
export default {
  data () {
      return {
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
        ],
        point1:[
            {
                state:2
            },
            {
                state:2
            },
        ],
        point2:[
            {
                state:2
            },
            {
                state:2
            },
            {
                state:2
            },
            {
                state:2
            },
            {
                state:2
            },
            {
                state:1
            },
            {
                state:1
            },
            {
                state:2
            },
            {
                state:1
            },
            {
                state:1
            },
            {
                state:1
            },
        ],
        point3:[
            {
                state:1
            },
            {
                state:2
            },
            {
                state:1
            },
            {
                state:2
            },
            {
                state:1
            },
            {
                state:2
            },
        ],
        point4:[
            {
                state:1
            },
            {
                state:1
            },
            {
                state:1
            },
        ],
        point5:[
            {
                state:1
            },
            {
                state:1
            },
        ],
        point6:[
            {
                state:2
            },
            {
                state:0
            },
            {
                state:2
            },
        ],
        point7:[
            {
                state:1
            },
            {
                state:1
            },
        ],
        point8:[
            {
                state:1
            },
        ],
        point9:[
            {
                state:1
            },
            {
                state:1
            },
        ],
        point10:[
            {
                state:1
            },
            {
                state:1
            },
        ],
      }
  },
  methods : {
  }
}
</script>

<style lang="scss" scoped>
@function pxToRem($px) {
  @return $px / 100 * 1rem;
}
section{
    width: 100%;
    height: 100%;
}
.content{
  position: relative;
  width: 100%;
  height: 75%;
  background-image: url("../../../static/img/1F.png");
  background-repeat:no-repeat;
  background-size:100% 100%;
  .floor{
    position: absolute;
    top: 28%;
    right: 5%;
    width: pxToRem(40);
    height: pxToRem(110);
    overflow: auto;
    text-align: center;
    box-shadow: 1px 1px pxToRem(10) #000;
    color: white;
    cursor: pointer;
    perspective: pxToRem(201);
    background-color: rgba(0,0,0,0.1);
    &::-webkit-scrollbar {
        width: 0;
    }
    a{
        color: #000;
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
    .floor-active{
        a{
            color: #007bfa;
        }
    }
  }
  .point{
        margin:0 pxToRem(10);
    }
  .point-1{
    left: 0;
    top: 12.7%;
    width: 5%;
    height: 5%;
    .point{
        margin:pxToRem(13) pxToRem(5);
    }
  }
  .point-2{
    left: 5%;
    top: 0;
    width: 3%;
    height: 55%;
  }
  .point-3{
    left: 28%;
    top: 30%;
    width: 6.2%;
    height: 15%;
  }
  .point-4{
    left: 11%;
    top: 57%;
    width: 3%;
    height: 13%;
  }
  .point-5{
    left: 30%;
    top: 46%;
    width: 3%;
    height: 9%;
  }
  .point-6{
    left: 68%;
    top: 57%;
    width: 3%;
    height: 13%;
  }
  .point-7{
    left: 4%;
    top: 72%;
    width: 3%;
    height: 9%;
  }
  .point-8{
    left: 24%;
    top: 80%;
    width: 3%;
    height: 9%;
  }
  .point-9{
    left: 56%;
    top: 72%;
    width: 3%;
    height: 11%;
  }
  .point-10{
    left: 53%;
    top: 85%;
    width: 3%;
    height: 11%;
  }
}
  .control{
    width: 100%;
    height: 25%;
    background-color: rgba(255,255,255,0.7);
    font-size: pxToRem(12);
    text-align: center;
    h2{
        width: 100%;
        line-height: pxToRem(28);
        font-size: pxToRem(16);
        font-weight: bold;
        span{
            margin-left: 30%;
        }
    }
    h3{
        line-height: pxToRem(26);
        font-size: pxToRem(14);
        font-weight: bold;
    }
    .control-con{
        width: 33%;
        float: left;
    }
    .float-left{
        float: left;
        width: 50%;
        text-align: right;
    }
    .float-right{
        float: left;
        width: 50%;
        text-align: left;
    }
    p{
        line-height: pxToRem(24);
        margin-top: pxToRem(3);
    }
    .time-btn{
        line-height: pxToRem(18);
        border: 1px solid #409eff;
        background-color: gary;
        margin-top: pxToRem(5);  
        &:last-child{
            margin-top: pxToRem(5);
        }
    }
    .btn{
        border: 1px solid #409eff;
        color: #409eff;
        padding: pxToRem(3) pxToRem(5);
        margin-left: pxToRem(5);
        cursor: pointer;
    }
  }
</style>


