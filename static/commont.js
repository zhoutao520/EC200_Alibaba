const IPCONFIG = 'http://pythoner.55555.io'; //线上测试 
const docEl = document.documentElement,
            clientWidth = docEl.clientWidth;
            docEl.style.fontSize = clientWidth / 15.36 + 'px';
if(localStorage.getItem('userToken') == null){
    location.href = '/static/login/login.html'
}