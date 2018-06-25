<template>
    <section class="content">
        <el-table
            :data="tableData"
            v-loading="loading"
            style="width: 100%">
            <el-table-column type="expand">
                <template slot-scope="props">
                <el-form label-position="left" inline class="demo-table-expand">
                    <el-form-item label="设备编号：">
                    <span>{{ props.row.machine_no }}</span>
                    </el-form-item>
                    <el-form-item label="设备名称：">
                    <span>{{ props.row.machine_name }}</span>
                    </el-form-item>
                    <el-form-item label="系统：">
                    <span>{{ props.row.machine_system }}</span>
                    </el-form-item>
                    <el-form-item label="子系统：">
                    <span>{{ props.row.machine_childSys }}</span>
                    </el-form-item>
                    <el-form-item label="安装地点：">
                    <span>{{ props.row.machine_place }}</span>
                    </el-form-item>
                    <el-form-item label="状态：">
                    <span>{{ props.row.machine_activite?'可用':'不可用' }}</span>
                    </el-form-item>
                    <el-form-item label="型号规格：">
                    <span>{{ props.row.machine_type }}</span>
                    </el-form-item>
                    <el-form-item label="品牌：">
                    <span>{{ props.row.machine_brand }}</span>
                    </el-form-item>
                    <el-form-item label="采购时间：">
                    <span>{{ props.row.machine_maker }}</span>
                    </el-form-item>
                    <el-form-item label="备注：" class="e-label">
                    <span>{{ props.row.machine_remarks?props.row.machine_remarks:'无' }}</span>
                    </el-form-item>
                    <el-form-item label="主要参数：" class="main">
                    <span>{{ props.row.machine_main }}</span>
                    </el-form-item>
                </el-form>
                </template>
            </el-table-column>
            <el-table-column
                label="设备编号"
                prop="machine_no">
            </el-table-column>
            <el-table-column
                label="设备名称"
                prop="machine_name">
            </el-table-column>
            <el-table-column
                label="安装地点"
                prop="machine_place">
            </el-table-column>
            <el-table-column
                label="系统"
                prop="machine_system">
            </el-table-column>
        </el-table>
        <el-pagination
        @current-change="handleCurrentChange"
        :current-page.sync="currentPage"
        background
        :page-size="10"
        layout="total, prev, pager, next"
        :total="total">
        </el-pagination>
    </section>
</template>

<script>
import axios from 'axios'
import fanCoilVue from './fanCoil.vue';

export default {
    name:'facilities',
    data () {
        return{
            currentPage:1,
            total:0,
            allData:[],
            loading:true,
            tableData:[{
            }],
        }
    },
    methods:{
        handleCurrentChange(val){
            console.log(val)
            this.tableData = this.allData.slice((val-1)*10,val*10);
        }
    },
    mounted : function () {
        axios.get('http://xf.epcifm.com/console/show_taizhang/')
        .then(res => {
            this.loading = false;
            this.total = res.data.data.length;
            this.allData = res.data.data;
            this.tableData = this.allData.slice(0,10);
        })
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
.content{
    margin: 0;
    height: 100%;
    overflow: auto;
    .demo-table-expand{
      font-size: 0;
      .el-form-item {
        margin-right: 0;
        margin-bottom: 0;
        width: 50%;
      }
      .main{
          width: 100%;
          span{
            width: 90%;
            text-indent: 2em;
            display: inline-block;
          }
      }
    } 
    
}
</style>
