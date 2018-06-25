<template>
    <section>
        <el-card class="box">
            <div slot="header">
                <span>修改密码</span>
            </div>
            <ul class="left">
                <li>原密码：</li>
                <li>新密码：</li>
                <li>确认密码：</li>
            </ul>
            <ul class="left">
                <li>
                    <el-input
                        type="password"
                        v-model="oldPsd">
                        <i slot="prefix">
                            <svg class="icon" aria-hidden="true">
                                <use xlink:href="#icon-mima"></use>
                            </svg>
                        </i>
                    </el-input>
                </li>
                <li>
                    <el-input
                        type="password"
                        v-model="newPsd">
                        <i slot="prefix">
                            <svg class="icon" aria-hidden="true">
                                <use xlink:href="#icon-mima"></use>
                            </svg>
                        </i>
                    </el-input>
                </li>
                <li>
                    <el-input
                        type="password"
                        v-model="rePsd">
                        <i slot="prefix">
                            <svg class="icon" aria-hidden="true">
                                <use xlink:href="#icon-mima"></use>
                            </svg>
                        </i>
                    </el-input>
                </li>
            </ul>
            <el-button style="margin-left:65%" plain type="primary">提交</el-button>
        </el-card>
    </section>
</template>

<script>
export default {
    name:'editPsd',
    data(){
        return{
            oldPsd:'',
            newPsd:'',
            rePsd:''
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
    display: flex;
    justify-content: center;
    align-items: center;
    .box{
        width: pxToRem(300);
        height: pxToRem(300);
        border: 1px solid #e4e7ed;
        .left{
            width: 55%;
            margin-right: 10%;
            &:first-child{
                text-align: right;
                width: 35%;
                margin-right:0;
            }
        }
        li{
            line-height: pxToRem(60);
            .icon{
                vertical-align: text-bottom;
            }
        }
    }
}
</style>

