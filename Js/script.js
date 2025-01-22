document.getElementById('btnlogin').addEventListener('click',function(){
    const user=document.getElementById('username').value.trim();
    const pass=document.getElementById('password').value.trim();
    if(user=="sovannet" && pass=="admin"){
        location.href="./html/home.html";
        alert("login sucess!");
    }else{alert("login faild!");}
});