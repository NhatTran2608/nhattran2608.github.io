function reset_form() {
    document.getElementById("user_form").reset();
}

function login_usr(){
    var x = document.getElementById('usr').value
    var y = document.getElementById('pass').value
    if(x == 'admin' && y == '123'){
        alert('Đăng nhập thành công');
        window.location.href = '/index.html';
    }
    else if (x == ''){
    }
    else if (y == ''){  
    }
    else if (((x != 'admin') || (y != '123') )){
        alert('Tài khoản hoặc mật khẩu không đúng');
        reset_form();
    }
    
}