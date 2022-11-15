var searchInput = document.querySelector('.search_input');
var searchIcon = document.querySelector('.search');
var leftIcon = document.querySelector(".prev");
var rightIcon = document.querySelector('.next');
var ImgPhone = document.getElementById("img_phone");
var Slider = document.querySelector('.container');
var NavChild = document.querySelector('.nav_body');
var List = document.querySelector('.list');
var system = document.querySelector('.System');
var buyNow = document.querySelectorAll('#buy_now');
var buyLater = document.querySelectorAll('#buy_later');

var cart = document.querySelector('.cart');
var cartIcon = document.querySelector('.cart_icon');
var cartContainer = document.querySelector('.cart_container');
var closeCart  = document.querySelector('.close');
var NumCart = document.querySelector(".cartNum span")


function ShowIcon() {
    searchIcon.classList.remove('hide');
    searchInput.classList.add('hide');
}

function hideIcon() {
    searchIcon.classList.add('hide');
    searchInput.classList.remove('hide');
}

NavChild.addEventListener('click',function() {
    ShowIcon();
})

Slider.addEventListener('click',function() {
    ShowIcon();
})

var image = [];
var index = 0;

searchIcon.addEventListener('click',()=>{
    hideIcon();
})

for(let i = 0 ; i < 3 ; i++) {
    image[i] = new Image();
    image[i].src = "img/img" + i + '.webp';
}

function imageClick() {
        index = 0 ;
        ImgPhone.src = image[index].src
}

function imageClick1() {
    index = 1 ;
    ImgPhone.src = image[index].src
}

function imageClick2() {
    index = 2;
    ImgPhone.src = image[index].src
}

rightIcon.addEventListener('click',function() {
    index++;
    if(index >= image.length) {
        index = 0;
    }
    ImgPhone.src = image[index].src
})

leftIcon.addEventListener('click',function() {
    index--;
    ImgPhone.src = image[index].src
})


var endsale = new Date("November 25 , 2022 00:00:00").getTime()
setInterval(function(){
    var beginSale = new Date().getTime();
    var endGame = endsale - beginSale;
    
    var days = Math.floor(endGame/(1000*60*60*24));
    var hours = Math.floor(endGame/(1000*60*60));
    var minutes = Math.floor(endGame/(1000*60));
    var seconds = Math.floor(endGame/(1000));

    hours %= 24;
    minutes %= 60;
    seconds %= 60;

    document.querySelector('.day').innerText = days;
    document.querySelector('.hours').innerText = hours;
    document.querySelector('.minute').innerText = minutes;
    document.querySelector('.second').innerText = seconds;
})

List.addEventListener('click',() => {
    system.classList.toggle('hide')
})

/*add cart*/

for(let i = 0 ; i < buyNow.length ; i++) {
    buyNow[i].addEventListener('click',function(){
        alert('Thêm vào vỏ hàng cái đi rồi mua gấp gáp gì đâu -_-');
    })
}

/*Show and Hide Cart*/
function HideCart() {
    cart.classList.add('hideCart')
}

function ShowCart() {
    cart.classList.toggle('hideCart')
}

cartIcon.addEventListener('click',function() {
    ShowCart()
})

cart.addEventListener('click',function() {
    HideCart();
})

cartContainer.addEventListener('click',function(e) {
    e.stopPropagation();
})

closeCart.addEventListener('click',function() {
    cart.classList.add('hideCart')
})

/*Add cart */
buyLater.forEach(function(button, index) {
    button.addEventListener('click',function(e) {{
        var btnItem = e.target
        var productItem = btnItem.parentElement.parentElement.parentElement
        var productImg = productItem.querySelector('img').src
        var productName = productItem.querySelector('h3').innerText
        var productPrice = productItem.querySelector(".cost_phone b").innerText
        addCart(productPrice,productImg,productName)
    }})
})



/*function addCart(productPrice,productImg,productName) {
    var addtr = document.createElement("tr")
    var trContent = `
            <tr>    
            <td><img class="cart_pd" src="${productImg}" alt=""></td>
            <td><b class="cart_pd cart_name">${productName}</b></td>
            <td><span class="prices">${productPrice}</span></td>
            <td><input type="number" value="1" id="input_number" class="cart_pd"></input></td>
            <td><i  style='color:red;' class='bx bx-x delete cart_pd'></i></td>
        </tr>
    `
    addtr.innerHTML = trContent
    var cartTable = document.querySelector("tbody")
    cartTable.append(addtr)
    deleteProduct()
    cartTotal()
}

function cartTotal() {
    var cartItem = document.querySelectorAll("tbody tr")
    var mul = 0
    for(var i = 0 ; i < cartItem.length ; i++) {
        var inputValue = cartItem[i].querySelector("input").value
        var productPrice = cartItem[i].querySelector(".prices").innerHTML
        productPrice = parseFloat(productPrice)
        totalA = inputValue * prodsuctPrice * 1000000
        mul = mul + totalA
    }
    var totalNumber = document.querySelector('.total_cost span')
    totalNumber.innerHTML = mul.toLocaleString("de-DE")
    NumCart.innerText = cartItem.length
    increaseNumCart();
}

function deleteProduct() {
    var cartItem = document.querySelectorAll('tbody tr')
    for(let i = 0 ; i < cartItem.length ; i++) {
        var deleteIcon = document.querySelectorAll('.delete')
        deleteIcon[i].addEventListener('click',function(e) {
            var locationDelete = e.target
            var products = locationDelete.parentElement.parentElement
            products.remove();
            cartTotal();
        })
    }
}

function increaseNumCart() {
    var cartItem = document.querySelectorAll('tbody tr')
    for(let i = 0 ; i < cartItem.length ; i++) {
        var inputNum = cartItem[i].querySelector('input')
        inputNum.addEventListener('change',function() {
            cartTotal()
        })
    }
}*/

$('.shop_name i').click(function() {
    $('html, body').animate({ scrollTop : 0}, 'slow')
})