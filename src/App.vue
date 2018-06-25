<template>
  <div id="app">
    <header :class="isCollapse?'small-w':'big-w'" id="head">
      <el-row>
        <el-col class="left" :span="12">
          <i class="el-icon-menu" @click="isCollapse=!isCollapse"></i>
          <span>伊塔全生命周期科技设施与能源管理系统</span>
        </el-col>
        <el-col class="right" :span="6" :offset="6">
        <el-popover
            placement="bottom"
            trigger="hover">
            <img slot="reference" src="../static/img/user.jpg" alt="">
            <span slot="reference" v-text="username"></span>
            <p class="user-box"><router-link to="/personal">个人中心</router-link></p>
            <p class="user-box"><router-link to="/editPsd">修改密码</router-link></p>
            <p class="user-box" @click="exit">退出登录</p>
        </el-popover>
        </el-col>
      </el-row>
    </header>
    <aside :class="isCollapse?'small':'big'">
        <p class="logo">
            <img src="../static/img/EPCLogo6.png" alt="LOGO">
        </p>
      <el-menu :default-active="$store.state.type"
        class="el-menu-vertical-demo"
        :collapse="isCollapse"
        background-color="#424d58"
        text-color="#fff"
        active-text-color="#ffd04b">
          <el-menu-item index="6" style="padding:0">
              <img src="../static/img/user.jpg" alt="">
              <p slot="title">
                  <span>当前用户：{{username}}</span><br>
                  <span>时间：{{nowTime}}</span>
              </p>
          </el-menu-item>
            <el-menu-item index="1" @click="turn('1')">
                <i>
                    <svg class="icon" aria-hidden="true">
                        <use xlink:href="#icon-shouye1"></use>
                    </svg>
                </i>
                <span slot="title">首页</span>
            </el-menu-item>
            <el-submenu index="2">
                <template  slot="title">
                    <i>
                        <svg class="icon" aria-hidden="true">
                            <use xlink:href="#icon-xinnengyuan"></use>
                        </svg>
                    </i>
                    <span slot="title">能源运营</span>
                </template>
                <el-menu-item-group>
                    <el-menu-item index="2-1" @click="turn('2-1')">制冷系统</el-menu-item>
                    <!-- <el-menu-item index="2-2" @click="turn('2-2')">供热系统</el-menu-item> -->
                    <el-menu-item index="2-2" @click="turn('2-2')">新风机组</el-menu-item>
                    <el-menu-item index="2-3" @click="turn('2-3')">风机盘管</el-menu-item>
                </el-menu-item-group>
            </el-submenu>
            <!-- <el-submenu index="3">
                <template slot="title">
                    <i>
                        <svg class="icon" aria-hidden="true">
                            <use xlink:href="#icon-nengyuanguanli"></use>
                        </svg>
                    </i>
                    <span slot="title">能源管理</span>
                </template> 
                <el-menu-item-group>
                    <el-menu-item index="3-1" @click="turn('3-1')">在线监测</el-menu-item>
                    <el-menu-item index="3-2" @click="turn('3-2')">数据中心</el-menu-item>
                    <el-menu-item index="3-3" @click="turn('3-3')">节能分析</el-menu-item>
                </el-menu-item-group>
            </el-submenu> -->
            <el-menu-item index="4" @click="turn('4')">
                <i>
                    <svg class="icon" aria-hidden="true">
                        <use xlink:href="#icon-navicon-kctz"></use>
                    </svg>
                </i>
                <span slot="title">设备台账</span>
            </el-menu-item>
      </el-menu>
    </aside>
    <main :class="isCollapse?'small-w':'big-w'">
      <router-view/>
    </main>
  </div>
</template>

<script>
import store from '@/store'

export default {
  name: 'App',
  store,
  data () {
    return {
      username:localStorage.getItem('user'),
      isCollapse : false,
      type:'1',
      nowTime: '',
    }
  },
  methods: {
    dateFtt (fmt,date) {
      var o = {   
          "M+" : date.getMonth()+1,                 //月份   
          "d+" : date.getDate(),                    //日   
          "h+" : date.getHours(),                   //小时   
          "m+" : date.getMinutes(),                 //分   
          "s+" : date.getSeconds(),                 //秒   
          "q+" : Math.floor((date.getMonth()+3)/3), //季度   
          "S"  : date.getMilliseconds()             //毫秒   
      };   
      if(/(y+)/.test(fmt))   
      fmt=fmt.replace(RegExp.$1, (date.getFullYear()+"").substr(4 - RegExp.$1.length));   
      for(var k in o)   
      if(new RegExp("("+ k +")").test(fmt))   
      fmt = fmt.replace(RegExp.$1, (RegExp.$1.length==1) ? (o[k]) : (("00"+ o[k]).substr((""+ o[k]).length)));   
      return fmt;
    },
    checkUrlString (name) {
        let url = location.href;
        let reg = new RegExp(""+ name +"");
        let r = reg.test(url);
        return r;
    },
    exit(){
        localStorage.removeItem('userToken');
        location.reload();
    },
    turn (index) {
        switch (index) {
            case '1' :
                this.$store.commit('change','1')
                this.$router.push('/');
                break;
            case '2-1' :
                this.$store.commit('change','2-1')
                this.$router.push('/freezer');
                break;
            // case '2-2' :
            //     this.$store.commit('change','2-2')
            //     this.$router.push('/boiler');
            //     break;
            case '2-2' :
                this.$store.commit('change','2-2')
                this.$router.push('/freshAir');
                break;
            case '2-3' :
                this.$store.commit('change','2-3')
                this.$router.push('/fanCoil');
                break;
            case '3-1' :
                this.$store.commit('change','3-1')
                this.$router.push('/monitoring');
                break;
            case '3-2' :
                this.$store.commit('change','3-2')
                this.$router.push('/dataCenter');
                break;
            case '3-3' :
                this.$store.commit('change','3-3')
                this.$router.push('/analysis');
                break;
            case '4' :
                this.$store.commit('change','4')
                this.$router.push('/facilities');
                break;
        }
    }
  },
  created () {
    setInterval(() => {
      this.nowTime = this.dateFtt("yyyy-MM-dd hh:mm:ss",new Date());
    },1000);
    this.checkUrlString('freezer') ? this.$store.commit('change','2-1') : '';
    this.checkUrlString('boiler') ? this.$store.commit('change','2-2') : '';
    this.checkUrlString('freshAir') ? this.$store.commit('change','2-3') : '';
    this.checkUrlString('fanCoil') ? this.$store.commit('change','2-4') : '';
    this.checkUrlString('monitoring') ? this.$store.commit('change','3-1') : '';
    this.checkUrlString('dataCenter') ? this.$store.commit('change','3-2') : '';
    this.checkUrlString('analysis') ? this.$store.commit('change','3-3') : '';
    this.checkUrlString('facilities') ? this.$store.commit('change','4') : '';
    document.getElementById('load').style.display = 'none';
  }
}
</script>

<style lang="scss" scoped>
@function pxToRem($px) {
    @return $px / 100 * 1rem;
}
.user-box{
    text-align: center;
    line-height: pxToRem(30);
    cursor: pointer;
    &:hover{
        color: #409EFF;
    }
    a:hover{
        color: #409EFF;
    }
}
.el-menu{
    height: 92%;
    overflow-x: hidden;
    overflow-y: auto;
    border: 0;
}
.big{
    width: 15%;
    height: 100%;
    float: left;
    background: #424d58;
    .logo{
        img{
            width: pxToRem(60);
        }
    }
    i{
        color: inherit;
    }
    .icon{
        padding: 0 pxToRem(10);
    }
    img{
        width: pxToRem(40);
        border-radius: 50%;
        margin:0 pxToRem(5);
    }
    p{
        display: inline-block;
        line-height: pxToRem(20);
    }
    span{
        vertical-align: sub;
    }
    .el-menu-item{
        height: pxToRem(56);
        line-height: pxToRem(56);
        font-size: pxToRem(14);
    }
}
.small{
    width: 5%;
    height: 100%;
    float: left;
    background: #424d58;
    .logo{
        img{
            width: pxToRem(40);
        }
    }
    .icon{
        width: pxToRem(20);
        height: pxToRem(20);
    }
    img{
        width: pxToRem(30);
        height: pxToRem(30);
        border-radius: 50%;
    }
    .el-menu--collapse{
        width: 100%;
    }
    .el-tooltip{
        padding: 0px pxToRem(20)!important;
    }
    .el-submenu__title{
        padding-left: pxToRem(20)!important;
    }
    .el-submenu, .el-menu-item{
        text-align: center;
    }
    i{
        color: inherit;
    }
}
.logo{
    width: 100%;
    height: 8%;
    display: flex!important;
    justify-content: center;
    align-items: center;
    background-color: #007bfa;
    img{
        height: auto;
        border-radius: 0;
    }
}
header{
    height: 8%;
    float: right;
    background: #409EFF;
    .el-row{
        height: 100%;
    }
    .left{
        display: flex;
        height: 100%;
        align-items: center;
        font-size: pxToRem(20);
        color: white;
        i{
            padding:0 pxToRem(20);
        }
    }
    .right{
        display: flex;
        height: 100%;
        justify-content: flex-end;
        align-items: center;
        img{
            width: pxToRem(30);
            height: pxToRem(30);
            border-radius: 50%;
            vertical-align: text-bottom;
        }
        span{
            font-size: pxToRem(16);
            color: white;
            vertical-align: middle;
            margin: 0 pxToRem(5);
        }
    }
}
.small-w{
    width: 95%;
}
.big-w{
    width: 85%;
}
/*滚动条样式*/
.el-menu::-webkit-scrollbar {/*滚动条整体样式*/
    width: 4px;     /*高宽分别对应横竖滚动条的尺寸*/
    height: 4px;
}
.el-menu::-webkit-scrollbar-thumb {/*滚动条里面小方块*/
    border-radius: 5px;
    -webkit-box-shadow: inset 0 0 5px rgba(0,0,0,0.2);
    background: rgba(0,0,0,0.2);
}
.el-menu::-webkit-scrollbar-track {/*滚动条里面轨道*/
    -webkit-box-shadow: inset 0 0 5px rgba(0,0,0,0.2);
    border-radius: 0;
    background: rgba(0,0,0,0.1);
}
main{
    float: right;
    height: 92%;
    overflow: hidden;
}
</style>

