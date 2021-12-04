import axios from 'axios'
import Noty from 'noty'

let addToCart = document.querySelectorAll('.add-to-cart')
let cartCorner = document.querySelector('#cartCorner')

function updateCart(pizza){
    axios.post('/update-cart', pizza).then(res =>{
         cartCorner.innerText = res.data.totalQty
         new Noty({
             timeout: 1000,
             type: 'success',
            text: 'items added to cart',
            progressBar: false

          }).show();
    }).catch(err => {
        new Noty({
            timeout: 1000,
            type: 'error',
           text: 'something went wrong',
           progressBar: false

         }).show();
    })
}

addToCart.forEach((btn)=> {
    btn.addEventListener('click',(e) => {
        let pizza = JSON.parse(btn.dataset.pizza)
        updateCart(pizza)
    })
})