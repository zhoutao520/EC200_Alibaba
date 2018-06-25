<template>
    <section>
        <el-tabs type="border-card" class="info-tab">
            <el-tab-pane label="个人信息">
                <div class="info-box">
                    <el-button class="edit" @click="dialogFormVisible2 = true" icon="el-icon-edit-outline"></el-button>
                    <p>
                        账号：<span>{{user.username}}</span>
                    </p>
                    <p>
                        姓名：<span>{{user.name}}</span>
                    </p>
                    <p>
                        邮箱：<span>{{user.email}}</span>
                    </p>
                    <p>
                        手机号：<span>{{user.phone}}</span>
                    </p>
                    <p>
                        权限：<span>{{role}}</span>
                    </p>
                </div>
            </el-tab-pane>
            <el-tab-pane v-if="role != '操作员'" label="角色管理">
                <el-button icon="el-icon-plus" class="add" @click="add">添加用户</el-button>
                <el-table
                    stripe
                    :data="tableData"
                    height="4.5rem"
                    class="info">
                    <el-table-column
                    label="账号"
                    prop="username"
                    align="center"
                    :width="tableWidth">
                    </el-table-column>
                    <el-table-column
                    label="姓名"
                    prop="name"
                    align="center"
                    :width="tableWidth">
                    </el-table-column>
                    <el-table-column
                    prop="password"
                    align="center"
                    label="密码"
                    :width="tableWidth">
                    </el-table-column>
                    <el-table-column
                    prop="email"
                    align="center"
                    label="邮箱"
                    :width="tableWidth">
                    </el-table-column>
                    <el-table-column
                    prop="phone"
                    align="center"
                    label="手机号"
                    :width="tableWidth">
                    </el-table-column>
                    <el-table-column
                    prop="kis_admin"
                    label="权限"
                    align="center"
                    :width="tableWidth">
                    </el-table-column>
                    <el-table-column align="center" label="操作">
                    <template slot-scope="scope">
                        <el-button 
                        type="primary"
                        icon="el-icon-edit" 
                        circle
                        size="mini"
                        @click="handleEdit(scope.$index, scope.row)"></el-button>
                        <el-button
                        type="danger"
                        icon="el-icon-delete" 
                        circle
                        size="mini"
                        @click="handleDelete(scope.$index, scope.row)"></el-button>
                    </template>
                    </el-table-column>
                </el-table>
            </el-tab-pane>
        </el-tabs>
        <el-dialog :title="addOrup?'添加用户':'修改用户'" :visible.sync="dialogFormVisible" width="30%">
            <el-form :model="userForm">
                <el-form-item label="账号：" label-width="20%">
                    <el-input v-model="userForm.username" auto-complete="off"></el-input>
                </el-form-item>
                <el-form-item label="姓名：" label-width="20%">
                    <el-input v-model="userForm.name" auto-complete="off"></el-input>
                </el-form-item>
                <el-form-item label="密码：" label-width="20%">
                    <el-input v-model="userForm.password" auto-complete="off"></el-input>
                </el-form-item>
                <el-form-item label="邮箱：" label-width="20%">
                    <el-input v-model="userForm.email" auto-complete="off"></el-input>
                </el-form-item>
                <el-form-item label="手机号：" label-width="20%">
                    <el-input v-model="userForm.phone" auto-complete="off"></el-input>
                </el-form-item>
                <el-form-item label="权限：" label-width="20%">
                    <el-radio-group v-model="userForm.kis_admin" size="small">
                        <el-radio label="管理员" border>管理员</el-radio>
                        <el-radio label="操作员" border>操作员</el-radio>
                    </el-radio-group>
                </el-form-item>
            </el-form>
            <div slot="footer" class="dialog-footer">
                <el-button @click="dialogFormVisible = false">取 消</el-button>
                <el-button type="primary" @click="submit">确 定</el-button>
            </div>
        </el-dialog>
        <el-dialog title="修改基本信息" :visible.sync="dialogFormVisible2" width="30%">
            <el-form :model="user">
                <el-form-item label="账号：" label-width="20%">
                    <span>{{user.username}}</span>
                </el-form-item>
                <el-form-item label="姓名：" label-width="20%">
                    <el-input v-model="user.name" auto-complete="off"></el-input>
                </el-form-item>
                <el-form-item label="邮箱：" label-width="20%">
                    <el-input v-model="user.email" auto-complete="off"></el-input>
                </el-form-item>
                <el-form-item label="手机号：" label-width="20%">
                    <el-input v-model="user.phone" auto-complete="off"></el-input>
                </el-form-item>
                <el-form-item label="权限：" label-width="20%">
                    <span>{{role}}</span>
                </el-form-item>
            </el-form>
            <div slot="footer" class="dialog-footer">
                <el-button @click="dialogFormVisible2 = false">取 消</el-button>
                <el-button type="primary" @click="userSubmit">确 定</el-button>
            </div>
        </el-dialog>
    </section>
</template>

<script>
import axios from 'axios'

export default {
    name:'personal',
    data(){
        return{
            tableWidth:170,
            role:'',
            user:{
                id:'1',
                username:'123134',
                name:'阿萨德',
                email:'13241324',
                phone:'1412414444',
                kis_admin:'超级管理员'
            },
            tableData: [{
                username: '123133',
                name: '王小虎1',
                password: '123456',
                phone: '1317861893',
                email: '704633203',
                kis_admin: '管理员'
            }, {
                username: '12313412',
                name: '王小虎2',
                password: '123456',
                phone: '1317861893',
                email: '704633203',
                kis_admin: '操作员'
            }, {
                username: '12313412',
                name: '王小虎3',
                password: '123456',
                phone: '1317861893',
                email: '704633203',
                kis_admin: '操作员'
            },
             {
                username: '12313412',
                name: '王小虎4',
                password: '123456',
                phone: '1317861893',
                email: '704633203',
                kis_admin: '操作员'
            },
             {
                username: '12313412',
                name: '王小虎5',
                password: '123456',
                phone: '1317861893',
                email: '704633203',
                kis_admin: '操作员'
            },
             {
                username: '12313412',
                name: '王小虎6',
                password: '123456',
                phone: '1317861893',
                email: '704633203',
                kis_admin: '操作员'
            },
             {
                username: '12313412',
                name: '王小虎7',
                password: '123456',
                phone: '1317861893',
                email: '704633203',
                kis_admin: '操作员'
            },
             {
                username: '12313412',
                name: '王小虎8',
                password: '123456',
                phone: '1317861893',
                email: '704633203',
                kis_admin: '操作员'
            },
             {
                username: '12313412',
                name: '王小虎9',
                password: '123456',
                phone: '1317861893',
                email: '704633203',
                kis_admin: '操作员'
            },
            ],
            dialogFormVisible: false,
            dialogFormVisible2: false,
            userForm:{},
            form: {
                username: '',
                name:'',
                password: '',
                phone: '',
                email: '',
                kis_admin: '操作员',
            },
            addOrup:true
        }
    },
    methods: {
      handleEdit(index, row) {
        this.addOrup = false;
        this.userForm = row;
        this.dialogFormVisible = true;
      },
      handleDelete(index, row) {
        console.log(index, row);
      },
      add(){
        this.addOrup = true;
        this.userForm = JSON.parse(JSON.stringify(this.form));
        this.dialogFormVisible = true;
      },
      submit(){
          let admin = JSON.parse(JSON.stringify(this.userForm));
          admin.kis_admin = admin.kis_admin == '管理员'?true:false;
          if(this.addOrup){
            axios.post('http://192.168.0.11:8000/console/add_user/',{
                token:localStorage.getItem('userToken'),
                new_user:admin
            }).then( res => {
                console.log(res)
            });
          }
      },
      userSubmit(){
          
      }
    },
    created(){
        if(localStorage.getItem('is_superuser') == 'true'){
            this.role = '超级管理员';
        }else if(localStorage.getItem('is_admin') == 'true'){
            this.role = '管理员'
        }else{
            this.role = '操作员'
        }
    },
    mounted(){
        axios.get('http://192.168.0.11:8000/console/user_list/',{
            params:{
                token:localStorage.getItem('userToken')
            }
        }).then( res => {
            console.log(res)
        });
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
    overflow: auto;
}
.info-tab{
    margin: 2%;
    text-align: right;
    height: 90%;
    overflow: auto;
}
.add{
    margin-right: 3%;
}
.info{
    margin: 2% 0;
}
.edit{
    display: block;
}
.info-box{
    width: 100%;
    padding: pxToRem(20);
    text-align: left;
    button{
        margin-left: 90%;
    }
    p{
        font-size: pxToRem(18);
        line-height: pxToRem(50);
        padding-left: pxToRem(50);
    }
}
</style>


