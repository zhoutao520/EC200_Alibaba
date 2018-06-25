const docEl = document.documentElement,
            clientWidth = docEl.clientWidth;
            docEl.style.fontSize = clientWidth / 15.36 + 'px';
new Vue({
    el : '#app',
    data : {
        user : '',
        password : '',
        msg : ''
    },
    methods: {
        login () {
            if (this.user == '') {
                this.msg = '用户名不得为空！';
                return false;
            }
            if (this.password == '') {
                this.msg = '密码不得为空！';
                return false;
            }
            axios.post('http://192.168.0.11:8000/console/login/',{
                username:this.user,
                password:this.password
            }).then(res => {
                console.log(res)
                if(res.data.status){
                    localStorage.setItem('userToken',res.data.token);
                    localStorage.setItem('user',res.data.result.user);
                    localStorage.setItem('is_admin',res.data.result.is_admin);
                    localStorage.setItem('is_superuser',res.data.result.is_superuser);
                    location.href = '../../';  
                }
            })
        }
    }
})