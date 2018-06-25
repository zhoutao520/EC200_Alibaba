<template>
  <div class="content">
    <div class="box" v-loading="loading">
        <el-card class="pump">
            <div slot="header">
                <span class="fresh-name">1#新风机组</span>
            </div>
            <div class="parameter">
                <ul>
                    <li>排风机启停：
                        <el-switch
                        v-model="freshAir[0][0]"
                        active-color="#13ce66"
                        :width=30
                        inactive-color="#ddd"
                        >
                    </el-switch></li>
                    <li>排风机状态：{{airData[70]}}</li>
                    <li>排风机控制状态：{{airData[69]}}</li>
                    <li>风阀1：
                        <el-switch
                        v-model="freshAir[0][2]"
                        active-color="#13ce66"
                        :width=30
                        inactive-color="#ddd"
                        >
                    </el-switch></li>
                    <li>风阀2：
                        <el-switch
                        v-model="freshAir[0][3]"
                        active-color="#13ce66"
                        :width=30
                        inactive-color="#ddd"
                        >
                    </el-switch></li>
                    <li>调节水阀：{{airData[51]}}</li>
                    <li>回风CO2：{{airData[2]}}</li>
                    <li>换热温度：{{airData[3]}}</li>
                    <li>压差1：{{airData[71]}}</li>
                    <li>压差3：{{airData[74]}}</li>
                </ul>
            </div>
            <div class="parameter">
                <ul>
                    <li>送风机启停：
                        <el-switch
                        v-model="freshAir[0][1]"
                        active-color="#13ce66"
                        :width=30
                        inactive-color="#ddd"
                        >
                    </el-switch></li>
                    <li>送风机状态：{{airData[75]}}</li>
                    <li>送风机控制状态：{{airData[73]}}</li>
                    <li>风阀3：
                        <el-switch
                        v-model="freshAir[0][4]"
                        active-color="#13ce66"
                        :width=30
                        inactive-color="#ddd"
                        >
                    </el-switch></li>
                    <li>风阀4：
                        <el-switch
                        v-model="freshAir[0][5]"
                        active-color="#13ce66"
                        :width=30
                        inactive-color="#ddd"
                        >
                    </el-switch></li>
                    <li>水阀阀位：{{airData[1]}}</li>
                    <li>风速：{{airData[4]}}</li>
                    <li>加湿阀：{{airData[121]}}</li>
                    <li>压差2：{{airData[67]}}</li>
                </ul>
            </div>
            <table class="table">
                <thead>
                    <tr>
                        <th>参数</th>
                        <th>送风</th>
                        <th>回风</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>温度(℃)</td>
                        <td>{{airData[8]}}</td>
                        <td>{{airData[6]}}</td>
                    </tr>
                    <tr>
                        <td>湿度(%)</td>
                        <td>{{airData[7]}}</td>
                        <td>{{airData[5]}}</td>
                    </tr>
                </tbody>
            </table>
        </el-card>
        <el-card class="pump">
            <div slot="header">
                <span class="fresh-name">2#新风机组</span>
            </div>
            <div class="parameter">
                <ul>
                    <li>排风机启停：
                        <el-switch
                        v-model="freshAir[1][0]"
                        active-color="#13ce66"
                        :width=30
                        inactive-color="#ddd"
                        >
                    </el-switch></li>
                    <li>排风机状态：{{airData[79]}}</li>
                    <li>排风机控制状态：{{airData[78]}}</li>
                    <li>风阀1：
                        <el-switch
                        v-model="freshAir[1][2]"
                        active-color="#13ce66"
                        :width=30
                        inactive-color="#ddd"
                        >
                    </el-switch></li>
                    <li>风阀2：
                        <el-switch
                        v-model="freshAir[1][3]"
                        active-color="#13ce66"
                        :width=30
                        inactive-color="#ddd"
                        >
                    </el-switch></li>
                    <li>调节水阀：{{airData[49]}}</li>
                    <li>回风CO2：{{airData[12]}}</li>
                    <li>换热温度：{{airData[10]}}</li>
                    <li>压差1：{{airData[80]}}</li>
                    <li>压差3：{{airData[83]}}</li>
                </ul>
            </div>
            <div class="parameter">
                <ul>
                    <li>送风机启停：
                        <el-switch
                        v-model="freshAir[1][1]"
                        active-color="#13ce66"
                        :width=30
                        inactive-color="#ddd"
                        >
                    </el-switch></li>
                    <li>送风机状态：{{airData[84]}}</li>
                    <li>送风机控制状态：{{airData[82]}}</li>
                    <li>风阀3：
                        <el-switch
                        v-model="freshAir[1][4]"
                        active-color="#13ce66"
                        :width=30
                        inactive-color="#ddd"
                        >
                    </el-switch></li>
                    <li>风阀4：
                        <el-switch
                        v-model="freshAir[1][5]"
                        active-color="#13ce66"
                        :width=30
                        inactive-color="#ddd"
                        >
                    </el-switch></li>
                    <li>水阀阀位：{{airData[11]}}</li>
                    <li>风速：{{airData[9]}}</li>
                    <li>加湿阀：{{airData[124]}}</li>
                    <li>压差2：{{airData[76]}}</li>
                </ul>
            </div>
            <table class="table">
                <thead>
                    <tr>
                        <th>参数</th>
                        <th>送风</th>
                        <th>回风</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>温度(℃)</td>
                        <td>{{airData[16]}}</td>
                        <td>{{airData[14]}}</td>
                    </tr>
                    <tr>
                        <td>湿度(%)</td>
                        <td>{{airData[15]}}</td>
                        <td>{{airData[13]}}</td>
                    </tr>
                </tbody>
            </table>
        </el-card>
        <el-card class="pump">
            <div slot="header">
                <span class="fresh-name">3#新风机组</span>
            </div>
            <div class="parameter">
                <ul>
                    <li>排风机启停：
                        <el-switch
                        v-model="freshAir[2][0]"
                        active-color="#13ce66"
                        :width=30
                        inactive-color="#ddd"
                        >
                    </el-switch></li>
                    <li>排风机状态：{{airData[88]}}</li>
                    <li>排风机控制状态：{{airData[87]}}</li>
                    <li>风阀1：
                        <el-switch
                        v-model="freshAir[2][2]"
                        active-color="#13ce66"
                        :width=30
                        inactive-color="#ddd"
                        >
                    </el-switch></li>
                    <li>风阀2：
                        <el-switch
                        v-model="freshAir[2][3]"
                        active-color="#13ce66"
                        :width=30
                        inactive-color="#ddd"
                        >
                    </el-switch></li>
                    <li>调节水阀：{{airData[50]}}</li>
                    <li>回风CO2：{{airData[20]}}</li>
                    <li>换热温度：{{airData[18]}}</li>
                    <li>压差1：{{airData[89]}}</li>
                    <li>压差3：{{airData[92]}}</li>
                </ul>
            </div>
            <div class="parameter">
                <ul>
                    <li>送风机启停：
                        <el-switch
                        v-model="freshAir[2][1]"
                        active-color="#13ce66"
                        :width=30
                        inactive-color="#ddd"
                        >
                    </el-switch></li>
                    <li>送风机状态：{{airData[93]}}</li>
                    <li>送风机控制状态：{{airData[91]}}</li>
                    <li>风阀3：
                        <el-switch
                        v-model="freshAir[2][4]"
                        active-color="#13ce66"
                        :width=30
                        inactive-color="#ddd"
                        >
                    </el-switch></li>
                    <li>风阀4：
                        <el-switch
                        v-model="freshAir[2][5]"
                        active-color="#13ce66"
                        :width=30
                        inactive-color="#ddd"
                        >
                    </el-switch></li>
                    <li>水阀阀位：{{airData[19]}}</li>
                    <li>风速：{{airData[17]}}</li>
                    <li>加湿阀：{{airData[129]}}</li>
                    <li>压差2：{{airData[85]}}</li>
                </ul>
            </div>
            <table class="table">
                <thead>
                    <tr>
                        <th>参数</th>
                        <th>送风</th>
                        <th>回风</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>温度(℃)</td>
                        <td>{{airData[24]}}</td>
                        <td>{{airData[22]}}</td>
                    </tr>
                    <tr>
                        <td>湿度(%)</td>
                        <td>{{airData[23]}}</td>
                        <td>{{airData[21]}}</td>
                    </tr>
                </tbody>
            </table>
        </el-card>
        <el-card class="pump">
            <div slot="header">
                <span class="fresh-name">4#新风机组</span>
            </div>
            <div class="parameter">
                <ul>
                    <li>排风机启停：
                        <el-switch
                        v-model="freshAir[3][0]"
                        active-color="#13ce66"
                        :width=30
                        inactive-color="#ddd"
                        >
                    </el-switch></li>
                    <li>排风机状态：{{airData[97]}}</li>
                    <li>排风机控制状态：{{airData[96]}}</li>
                    <li>风阀1：
                        <el-switch
                        v-model="freshAir[3][2]"
                        active-color="#13ce66"
                        :width=30
                        inactive-color="#ddd"
                        >
                    </el-switch></li>
                    <li>风阀2：
                        <el-switch
                        v-model="freshAir[3][3]"
                        active-color="#13ce66"
                        :width=30
                        inactive-color="#ddd"
                        >
                    </el-switch></li>
                    <li>调节水阀：{{airData[53]}}</li>
                    <li>回风CO2：{{airData[28]}}</li>
                    <li>换热温度：{{airData[26]}}</li>
                    <li>压差1：{{airData[98]}}</li>
                    <li>压差3：{{airData[101]}}</li>
                </ul>
            </div>
            <div class="parameter">
                <ul>
                    <li>送风机启停：
                        <el-switch
                        v-model="freshAir[3][1]"
                        active-color="#13ce66"
                        :width=30
                        inactive-color="#ddd"
                        >
                    </el-switch></li>
                    <li>送风机状态：{{airData[102]}}</li>
                    <li>送风机控制状态：{{airData[100]}}</li>
                    <li>风阀3：
                        <el-switch
                        v-model="freshAir[3][4]"
                        active-color="#13ce66"
                        :width=30
                        inactive-color="#ddd"
                        >
                    </el-switch></li>
                    <li>风阀4：
                        <el-switch
                        v-model="freshAir[3][5]"
                        active-color="#13ce66"
                        :width=30
                        inactive-color="#ddd"
                        >
                    </el-switch></li>
                    <li>水阀阀位：{{airData[27]}}</li>
                    <li>风速：{{airData[25]}}</li>
                    <li>加湿阀：{{airData[126]}}</li>
                    <li>压差2：{{airData[94]}}</li>
                </ul>
            </div>
            <table class="table">
                <thead>
                    <tr>
                        <th>参数</th>
                        <th>送风</th>
                        <th>回风</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>温度(℃)</td>
                        <td>{{airData[32]}}</td>
                        <td>{{airData[30]}}</td>
                    </tr>
                    <tr>
                        <td>湿度(%)</td>
                        <td>{{airData[31]}}</td>
                        <td>{{airData[29]}}</td>
                    </tr>
                </tbody>
            </table>
        </el-card>
        <el-card class="pump">
            <div slot="header">
                <span class="fresh-name">5#新风机组</span>
            </div>
            <div class="parameter">
                <ul>
                    <li>排风机启停：
                        <el-switch
                        v-model="freshAir[4][0]"
                        active-color="#13ce66"
                        :width=30
                        inactive-color="#ddd"
                        >
                    </el-switch></li>
                    <li>排风机状态：{{airData[106]}}</li>
                    <li>排风机控制状态：{{airData[105]}}</li>
                    <li>风阀1：
                        <el-switch
                        v-model="freshAir[4][2]"
                        active-color="#13ce66"
                        :width=30
                        inactive-color="#ddd"
                        >
                    </el-switch></li>
                    <li>风阀2：
                        <el-switch
                        v-model="freshAir[4][3]"
                        active-color="#13ce66"
                        :width=30
                        inactive-color="#ddd"
                        >
                    </el-switch></li>
                    <li>调节水阀：{{airData[53]}}</li>
                    <li>回风CO2：{{airData[36]}}</li>
                    <li>换热温度：{{airData[34]}}</li>
                    <li>压差1：{{airData[107]}}</li>
                    <li>压差3：{{airData[110]}}</li>
                </ul>
            </div>
            <div class="parameter">
                <ul>
                    <li>送风机启停：
                        <el-switch
                        v-model="freshAir[4][1]"
                        active-color="#13ce66"
                        :width=30
                        inactive-color="#ddd"
                        >
                    </el-switch></li>
                    <li>送风机状态：{{airData[111]}}</li>
                    <li>送风机控制状态：{{airData[109]}}</li>
                    <li>风阀3：
                        <el-switch
                        v-model="freshAir[4][4]"
                        active-color="#13ce66"
                        :width=30
                        inactive-color="#ddd"
                        >
                    </el-switch></li>
                    <li>风阀4：
                        <el-switch
                        v-model="freshAir[4][5]"
                        active-color="#13ce66"
                        :width=30
                        inactive-color="#ddd"
                        >
                    </el-switch></li>
                    <li>水阀阀位：{{airData[35]}}</li>
                    <li>风速：{{airData[33]}}</li>
                    <li>加湿阀：{{airData[132]}}</li>
                    <li>压差2：{{airData[103]}}</li>
                </ul>
            </div>
            <table class="table">
                <thead>
                    <tr>
                        <th>参数</th>
                        <th>送风</th>
                        <th>回风</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>温度(℃)</td>
                        <td>{{airData[40]}}</td>
                        <td>{{airData[38]}}</td>
                    </tr>
                    <tr>
                        <td>湿度(%)</td>
                        <td>{{airData[39]}}</td>
                        <td>{{airData[37]}}</td>
                    </tr>
                </tbody>
            </table>
        </el-card>
        <el-card class="pump">
            <div slot="header">
                <span class="fresh-name">6#新风机组</span>
            </div>
            <div class="parameter">
                <ul>
                    <li>排风机启停：
                        <el-switch
                        v-model="freshAir[5][0]"
                        active-color="#13ce66"
                        :width=30
                        inactive-color="#ddd"
                        >
                    </el-switch></li>
                    <li>排风机状态：{{airData[115]}}</li>
                    <li>排风机控制状态：{{airData[114]}}</li>
                    <li>风阀1：
                        <el-switch
                        v-model="freshAir[5][2]"
                        active-color="#13ce66"
                        :width=30
                        inactive-color="#ddd"
                        >
                    </el-switch></li>
                    <li>风阀2：
                        <el-switch
                        v-model="freshAir[5][3]"
                        active-color="#13ce66"
                        :width=30
                        inactive-color="#ddd"
                        >
                    </el-switch></li>
                    <li>调节水阀：{{airData[54]}}</li>
                    <li>回风CO2：{{airData[44]}}</li>
                    <li>换热温度：{{airData[42]}}</li>
                    <li>压差1：{{airData[116]}}</li>
                    <li>压差3：{{airData[119]}}</li>
                </ul>
            </div>
            <div class="parameter">
                <ul>
                    <li>送风机启停：
                        <el-switch
                        v-model="freshAir[5][1]"
                        active-color="#13ce66"
                        :width=30
                        inactive-color="#ddd"
                        >
                    </el-switch></li>
                    <li>送风机状态：{{airData[120]}}</li>
                    <li>送风机控制状态：{{airData[118]}}</li>
                    <li>风阀3：
                        <el-switch
                        v-model="freshAir[5][4]"
                        active-color="#13ce66"
                        :width=30
                        inactive-color="#ddd"
                        >
                    </el-switch></li>
                    <li>风阀4：
                        <el-switch
                        v-model="freshAir[5][5]"
                        active-color="#13ce66"
                        :width=30
                        inactive-color="#ddd"
                        >
                    </el-switch></li>
                    <li>水阀阀位：{{airData[43]}}</li>
                    <li>风速：{{airData[41]}}</li>
                    <li>加湿阀：{{airData[135]}}</li>
                    <li>压差2：{{airData[112]}}</li>
                </ul>
            </div>
            <table class="table">
                <thead>
                    <tr>
                        <th>参数</th>
                        <th>送风</th>
                        <th>回风</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>温度(℃)</td>
                        <td>{{airData[48]}}</td>
                        <td>{{airData[46]}}</td>
                    </tr>
                    <tr>
                        <td>湿度(%)</td>
                        <td>{{airData[47]}}</td>
                        <td>{{airData[45]}}</td>
                    </tr>
                </tbody>
            </table>
        </el-card>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  name:'freshAir',
  data(){
    return {
      loading:true,
      airData:[],  
      freshAir:[
          [false,false,false,false,false,false],
          [false,false,false,false,false,false],
          [false,false,false,false,false,false],
          [false,false,false,false,false,false],
          [false,false,false,false,false,false],
          [false,false,false,false,false,false],
      ]
    }
  },
  mounted () {
    axios.get('http://xf.epcifm.com/ec_freshAir/fr_EcXf150/')
    .then(res => {
      let data = JSON.parse(res.data.data.replace('O','"O').replace("('",'=').replace("')",'"')
      .replace(/'/g,'"').replace(/ /g,'')) 
      this.airData = data;
      this.airData[122]==0?'':this.freshAir[0][0]=true;
      this.airData[123]==0?'':this.freshAir[0][1]=true;
      this.airData[55]==0?'':this.freshAir[0][2]=true;
      this.airData[56]==0?'':this.freshAir[0][3]=true;
      this.airData[139]==0?'':this.freshAir[0][4]=true;
      this.airData[140]==0?'':this.freshAir[0][5]=true;

      this.airData[125]==0?'':this.freshAir[1][0]=true;
      this.airData[138]==0?'':this.freshAir[1][1]=true;
      this.airData[57]==0?'':this.freshAir[1][2]=true;
      this.airData[58]==0?'':this.freshAir[1][3]=true;
      this.airData[141]==0?'':this.freshAir[1][4]=true;
      this.airData[142]==0?'':this.freshAir[1][5]=true;

      this.airData[130]==0?'':this.freshAir[2][0]=true;
      this.airData[131]==0?'':this.freshAir[2][1]=true;
      this.airData[59]==0?'':this.freshAir[2][2]=true;
      this.airData[60]==0?'':this.freshAir[2][3]=true;
      this.airData[143]==0?'':this.freshAir[2][4]=true;
      this.airData[144]==0?'':this.freshAir[2][5]=true;

      this.airData[127]==0?'':this.freshAir[3][0]=true;
      this.airData[128]==0?'':this.freshAir[3][1]=true;
      this.airData[61]==0?'':this.freshAir[3][2]=true;
      this.airData[62]==0?'':this.freshAir[3][3]=true;
      this.airData[145]==0?'':this.freshAir[3][4]=true;
      this.airData[146]==0?'':this.freshAir[3][5]=true;

      this.airData[133]==0?'':this.freshAir[4][0]=true;
      this.airData[134]==0?'':this.freshAir[4][1]=true;
      this.airData[63]==0?'':this.freshAir[4][2]=true;
      this.airData[64]==0?'':this.freshAir[4][3]=true;
      this.airData[147]==0?'':this.freshAir[4][4]=true;
      this.airData[148]==0?'':this.freshAir[4][5]=true;

      this.airData[136]==0?'':this.freshAir[5][0]=true;
      this.airData[137]==0?'':this.freshAir[5][1]=true;
      this.airData[65]==0?'':this.freshAir[5][2]=true;
      this.airData[66]==0?'':this.freshAir[5][3]=true;
      this.airData[149]==0?'':this.freshAir[5][4]=true;
      this.airData[150]==0?'':this.freshAir[5][5]=true;
      this.loading = false;
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
  display: flex;
  padding: 2%;
  .box{
    overflow: auto;
    margin-bottom: pxToRem(50);
    .fresh-name{
      font-size: pxToRem(20);
    }
    .pump{
      width: 28%;
      margin: 2%;
      font-size: pxToRem(14);
      border: 1px solid #f1f1f1;
      float: left;
    }
    .parameter{
        width: 50%;
        text-align: center;
        float: left;
        li{
          line-height: pxToRem(30);
        }
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
}
</style>
