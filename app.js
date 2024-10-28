const decreaseBtns = document.querySelectorAll('.decrease');
const quantityElms = document.querySelectorAll('.quantity');
const items = document.querySelectorAll('.cart-item');
const increaseBtns = document.querySelectorAll('.increase');
const totalElm = document.querySelector('#total')
// const likeBtns = document.querySelectorAll('.like')
total()
decreaseBtns.forEach((decreaseBtn, index) => {
    decreaseBtn.addEventListener('click', () => {
        let quantity = parseInt(quantityElms[index].textContent);
        if (quantity > 1){
            quantity--;
            quantityElms[index].textContent = quantity;
            total();
        }
    })
});

increaseBtns.forEach((increaseBtn, index) => {
    increaseBtn.addEventListener('click', () => {
        let quantity = parseInt(quantityElms[index].textContent);
            quantity++
            quantityElms[index].textContent = quantity;
            total();
    })
});

items.forEach(item => {
    const removeBtn = item.querySelector('.remove');
    removeBtn.addEventListener('click',()=>{
        item.remove();
        total();
    });

    const likeBtn = item.querySelector('.like');
    const likeElm = likeBtn.querySelector('i');
    likeBtn.addEventListener('click', () => {
        if (likeElm.classList.contains('fa-regular')){
        likeElm.classList.replace('fa-regular', 'fa-solid');
        }else{
            likeElm.classList.replace('fa-solid', 'fa-regular')
        }
    });

    
});

function total() {
    // const items = document.querySelectorAll('.cart-item')
    let total = 0;
    items.forEach(item => {
        let quantity = parseInt(item.querySelector('.quantity').textContent);
        let prix = parseInt(item.querySelector('.item-price').textContent);
        total += quantity*prix;
    });
    totalElm.textContent = total;
}

// likeBtns.forEach((likeBtn, index) => {
//     const likeElm = likeBtn[index].querySelector('i');
//     likeBtn.addEventListener('onclick', ()=>{
//         likeElm.classlist.replace('fa-regular', 'fa-solid');
//     })
// });

