<template>
<section>
  <div class="content">
    <div class="floor" id="floor">
        <ul class="floor-content" >
            <li v-for="(item,index) in floor" :key="index" :class="index===2?'floor-active':''">
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
    <div class="multif point-11">
        <div class="point" v-for="(item,index) in point11" :key="index" :class="{'f-red':item.state===0,'f-green':item.state===1,'f-blue':item.state===2}"></div>
    </div>
    <div class="multif point-12">
        <div class="point" v-for="(item,index) in point12" :key="index" :class="{'f-red':item.state===0,'f-green':item.state===1,'f-blue':item.state===2}"></div>
    </div>
    <div class="multif point-13">
        <div class="point" v-for="(item,index) in point13" :key="index" :class="{'f-red':item.state===0,'f-green':item.state===1,'f-blue':item.state===2}"></div>
    </div>
    <div class="multif point-14">
        <div class="point" v-for="(item,index) in point14" :key="index" :class="{'f-red':item.state===0,'f-green':item.state===1,'f-blue':item.state===2}"></div>
    </div>
    <div class="multif point-15">
        <div class="point" v-for="(item,index) in point15" :key="index" :class="{'f-red':item.state===0,'f-green':item.state===1,'f-blue':item.state===2}"></div>
    </div>
    <div class="multif point-16">
        <div class="point" v-for="(item,index) in point16" :key="index" :class="{'f-red':item.state===0,'f-green':item.state===1,'f-blue':item.state===2}"></div>
    </div>
    <div class="multif point-17">
        <div class="point" v-for="(item,index) in point17" :key="index" :class="{'f-red':item.state===0,'f-green':item.state===1,'f-blue':item.state===2}"></div>
    </div>
    <div class="multif point-18">
        <div class="point" v-for="(item,index) in point18" :key="index" :class="{'f-red':item.state===0,'f-green':item.state===1,'f-blue':item.state===2}"></div>
    </div>
    <div class="multif point-19">
        <div class="point" v-for="(item,index) in point19" :key="index" :class="{'f-red':item.state===0,'f-green':item.state===1,'f-blue':item.state===2}"></div>
    </div>
    <div class="multif point-20">
        <div class="point" v-for="(item,index) in point20" :key="index" :class="{'f-red':item.state===0,'f-green':item.state===1,'f-blue':item.state===2}"></div>
    </div>
    <div class="multif point-21">
        <div class="point" v-for="(item,index) in point21" :key="index" :class="{'f-red':item.state===0,'f-green':item.state===1,'f-blue':item.state===2}"></div>
    </div>
    <div class="multif point-22">
        <div class="point" v-for="(item,index) in point22" :key="index" :class="{'f-red':item.state===0,'f-green':item.state===1,'f-blue':item.state===2}"></div>
    </div>
    <div class="multif point-23">
        <div class="point" v-for="(item,index) in point23" :key="index" :class="{'f-red':item.state===0,'f-green':item.state===1,'f-blue':item.state===2}"></div>
    </div>
    <div class="multif point-24">
        <div class="point" v-for="(item,index) in point24" :key="index" :class="{'f-red':item.state===0,'f-green':item.state===1,'f-blue':item.state===2}"></div>
    </div>
    <div class="multif point-25">
        <div class="point" v-for="(item,index) in point25" :key="index" :class="{'f-red':item.state===0,'f-green':item.state===1,'f-blue':item.state===2}"></div>
    </div>
    <div class="multif point-26">
        <div class="point" v-for="(item,index) in point26" :key="index" :class="{'f-red':item.state===0,'f-green':item.state===1,'f-blue':item.state===2}"></div>
    </div>
    <div class="multif point-27">
        <div class="point" v-for="(item,index) in point27" :key="index" :class="{'f-red':item.state===0,'f-green':item.state===1,'f-blue':item.state===2}"></div>
    </div>
    <div class="multif point-28">
        <div class="point" v-for="(item,index) in point28" :key="index" :class="{'f-red':item.state===0,'f-green':item.state===1,'f-blue':item.state===2}"></div>
    </div>
  </div>
    <div class="control">
        <h2><span>A1-3F</span><span>24 ℃/ 24  ℃</span></h2>
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
  data(){
    return{
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
            state:1
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
        {
            state:1
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
        {
            state:1
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
        {
            state:1
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
        {
            state:1
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
      point2:[
        {
            state:1
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
        {
            state:1
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
      ],
      point4:[
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
        {
            state:1
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
        {
            state:1
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
      point6:[
        {
            state:1
        },
        {
            state:1
        },
      ],
      point7:[
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
      point8:[
        {
            state:1
        },
      ],
      point9:[
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
      point11:[
        {
            state:1
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
      point12:[
        {
            state:1
        },
      ],
      point13:[
        {
            state:1
        },
      ],
      point14:[
        {
            state:1
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
        {
            state:1
        },
        {
            state:1
        },
        {
            state:2
        },
      ],
      point15:[
        {
            state:1
        },
      ],
      point16:[
        {
            state:1
        },
        {
            state:1
        },
      ],
      point17:[
        {
            state:1
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
      point18:[
        {
            state:1
        },
      ],
      point19:[
        {
            state:1
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
        {
            state:1
        },
        {
            state:1
        },
      ],
      point20:[
        {
            state:1
        },
      ],
      point21:[
        {
            state:1
        },
        {
            state:1
        },
      ],
      point22:[
        {
            state:1
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
        {
            state:1
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
        {
            state:1
        },
        {
            state:1
        },
      ],
      point23:[
        {
            state:1
        },
      ],
      point24:[
        {
            state:1
        },
      ],
      point25:[
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
            state:1
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
        {
            state:1
        },
        {
            state:1
        },
      ],
      point26:[
        {
            state:1
        },
      ],
      point27:[
        {
            state:1
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
        {
            state:1
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
        {
            state:1
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
      point28:[
        {
            state:1
        },
        {
            state:1
        },
      ],
    }
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
  background-image: url("../../../static/img/3F.png");
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
  .point-1{
    left: 2%;
    top: 8%;
    width: 27.6%;
    height: 15%;
  }
  .point-2{
    left: 36%;
    top: 8%;
    width: 14.1%;
    height: 15%;
  }
  .point-3{
    left: 50.4%;
    top: 13%;
    width: 3%;
    height: 6%;
  }
  .point-4{
    left: 58.5%;
    top: 13%;
    width: 3%;
    height: 6%;
  }
  .point-5{
    left: 62%;
    top: 8%;
    width: 14.1%;
    height: 15%;
  }
  .point-6{
    left: 76.5%;
    top: 13%;
    width: 5.7%;
    height: 6%;
  }
  .point-7{
    left: 1.5%;
    top: 29%;
    width: 8.7%;
    height: 6%;
  }
  .point-8{
    left: 13%;
    top: 33%;
    width: 3%;
    height: 6%;
  }
  .point-9{
    left: 32%;
    top: 34%;
    width: 3%;
    height: 6%;
  }
  .point-10{
    left: 36%;
    top: 29%;
    width: 6%;
    height: 6%;
  }
  .point-11{
    left: 47.5%;
    top: 29%;
    width: 12%;
    height: 6%;
  }
  .point-12{
    left: 60%;
    top: 35%;
    width: 3%;
    height: 6%;
  }
  .point-13{
    left: 79%;
    top: 31%;
    width: 3%;
    height: 6%;
  }
  .point-14{
    left: 13%;
    top: 45%;
    width: 9%;
    height: 28%;
  }
  .point-15{
    left: 31%;
    top: 62%;
    width: 3%;
    height: 6%;
  }
  .point-16{
    left: 35.5%;
    top: 69%;
    width: 6%;
    height: 6%;
  }
  .point-17{
    left: 47.5%;
    top: 69%;
    width: 12%;
    height: 6%;
  }
  .point-18{
    left: 59.5%;
    top: 62%;
    width: 3%;
    height: 6%;
  }
  .point-19{
    left: 72.5%;
    top: 45%;
    width: 9%;
    height: 16%;
  }
  .point-20{
    left: 78.5%;
    top: 64%;
    width: 3%;
    height: 6%;
  }
  .point-21{
    left: 81.7%;
    top: 68%;
    width: 6%;
    height: 6%;
  }
  .point-22{
    left: 13%;
    top: 80%;
    width: 14.1%;
    height: 16%;
  }
  .point-23{
    left: 27.7%;
    top: 84%;
    width: 3.1%;
    height: 6%;
  }
  .point-24{
    left: 35.7%;
    top: 84%;
    width: 3.1%;
    height: 6%;
  }
  .point-25{
    left: 39%;
    top: 81%;
    width: 14.1%;
    height: 15%;
  }
  .point-26{
    left: 59%;
    top: 84%;
    width: 3%;
    height: 6%;
  }
  .point-27{
    left: 62.2%;
    top: 81%;
    width: 19.8%;
    height: 10%;
  }
  .point-28{
    left: 82.2%;
    top: 85%;
    width: 5.8%;
    height: 6%;
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


