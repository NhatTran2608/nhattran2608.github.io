var listPhone = document.querySelector('.list_phone')
var icon = document.querySelector('.drop')
var searchIcon = document.querySelector('.search_icon i')
var Imgslider = document.querySelector('.img_slider')
var searchInput = document.querySelector('.search_input')
var navChild = document.querySelector('.nav_body')

/*Cart */
var cart = document.querySelector('.cart')
var cartIcon = document.querySelector('.cart_icon')
var cartContainer = document.querySelector('.cart_container')
var closeCart  = document.querySelector('.close')
var NumCart = document.querySelector(".cartNum span")
var cartProduct = document.querySelector('.cart_product')
var TextNull = document.querySelector('.null_text')
/*End Cart */



/*var producBody = document.querySelector('.body_phone');
var productName = producBody.children[0];
var productPrice = producBody.children[2].children[0]
var productImg = document.querySelector('.iphone img').src;*/

/*button product */
const ItemBtn = document.querySelectorAll('.add_cart')



icon.addEventListener('click',function() {
    listPhone.classList.toggle('hide_list')
})

searchIcon.addEventListener('click', function() {
    searchIcon.classList.add('hide')
    searchInput.classList.remove('hide')
})

Imgslider.addEventListener('click',function(){
    searchIcon.classList.remove('hide')
    searchInput.classList.add('hide')
})

navChild.addEventListener('click', function() {
    searchIcon.classList.remove('hide')
    searchInput.classList.add('hide')
})

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
/*End Show Cart */

/* Lắng nghe sự kiện button Chuyển product qua local*/
let items =[];
for(let i = 0 ; i < ItemBtn.length ; i++) {
    ItemBtn[i].addEventListener('click',function(e) {
        if(typeof(Storage) !== 'undefined') {
            let item = {
                id: i+1,
                img:e.target.parentElement.nextSibling.parentElement.parentElement.children[0].children[0].src,
                name: e.target.parentElement.nextSibling.parentElement.children[0].textContent,
                price: e.target.parentElement.nextSibling.parentElement.children[2].children[0].textContent,
                quantity: 1
               };
               if(JSON.parse(localStorage.getItem('items')) === null){
                    items.push(item)
                    localStorage.setItem("items", JSON.stringify(items))
                    window.location.reload()
               }else {
                    const localItems = JSON.parse(localStorage.getItem("items"))
                    localItems.map(data => {
                        if(item.id == data.id){
                            item.quantity = data.quantity + 1 
                        }else {
                            items.push(data)
                        }
                    })
                    items.push(item)
                        localStorage.setItem('items',JSON.stringify(items))
                        window.location.reload()
               }
        }else {
            alert('local Storage is not working!')
        }
    })
}

/*Thêm phẩy phần nghìn */
const formatCurrency = (amount, locale = "vi-VN") => {
    return new Intl.NumberFormat(locale, {
    style: 'currency',
    currency: 'VND',
    minimumFractionDigits: 0,
    maximumFractionDigits: 2
    }).format(amount);
}

/*Tăng số lượng trên cartIcon */
var NumCart = document.querySelector('.cartNum span')
let num = 0
let GetlocalCart = JSON.parse(localStorage.getItem('items'))
    GetlocalCart.map(data=>{
    num = num +data.quantity 
})// chuyển về dạng objects để đọc số lượng sau đó innerText cho NumCart
NumCart.innerText = num

//Lấy products ra local và thêm sản phẩm vào giỏ hàng
var Cost = document.querySelector('.total')
const tableCart = document.querySelector('table')
var total = 0
var convert = 0
let tableTotal = ''
let tableData = ''
tableData += `
                        <thead>
                                    <tr>
                                        <th>
                                            <h4>Hình ảnh</h4>
                                        </th>
                                        <th>
                                            <h4>Sản phẩm</h4>
                                        </th>
                                        <th>
                                            <h4>Giá</h4>
                                        </th>
                                        <th>
                                            <h4>Số lượng</h4>
                                        </th>
                                        <th>
                                            <h4>Chọn</h4>
                                        </th>
                                    </tr>
                                </thead>
`
if(GetlocalCart[0] == null) {
    TextNull.innerHTML = 'Chưa có sản phẩm nào trong giỏ hàng :('
}else {
    JSON.parse(localStorage.getItem('items')).forEach(data => {
        total += Number(data.quantity) * Number(data.price.replace(/[^0-9]/g,"")) 
        tableData += `
        <tr>    
        <td><img class="cart_pd" src="${data.img}" alt=""></td>
        <td><b class="cart_pd cart_name">${data.name}</b></td>
        <td><span class="prices">${formatCurrency(data.price.replace(/[^0-9]/g,""))}</span></td>
        <td><input type="number" value="${data.quantity}" id="input_number" class="cart_pd"></input></td>
        <td><i style='color:red;' class='bx bx-x delete cart_pd' onclick="Delete(this)"></i></td>
    </tr>
 `
    })
    tableCart.innerHTML = tableData  
        tableTotal += 
            `<b class="total_cost">Tổng chi phí: <span>${formatCurrency(total)}</span></b>`
            Cost.innerHTML = tableTotal
}



function Delete(e){
    let items = []
    JSON.parse(localStorage.getItem('items')).map(data => {
        if(data.name != e.parentElement.parentElement.children[1].textContent) {
            items.push(data)
        }
    })
    localStorage.setItem('items',JSON.stringify(items))
    window.location.reload()
}