const wrapper = document.querySelector(".wrapper");
const menuItems = document.querySelectorAll(".menuItem");
const cart = document.querySelector('.cart');
const cartBtn = document.querySelector('.cart-btn');
const cartClose = document.querySelector('.cartClose');

// menuItems.forEach((item, index) => {
//     item.addEventListener("click", () =>{
//         console.log("netvarg");
//         wrapper.style.transform = `translateX(${-100 * index}vw)`;
//     });
// });


(function () {
    [...document.querySelectorAll(".menuItem")].forEach(button => {
        button.addEventListener("click", function () {
            document.querySelector(".active-btn").classList.remove("active-btn");
            this.classList.add("active-btn");
            document.querySelector(".active").classList.remove("active");
            document.getElementById(button.dataset.id).classList.add("active");
        })
    });
})();

//CART TOGGLE 

cartBtn.addEventListener('click', () =>{
    cart.classList.add('cartOpen');
});
cartClose.addEventListener('click', () =>{
    cart.classList.remove('cartOpen');
});

// toggle.addEventListener("click", () => {
//     open.classList.remove("close");
// });

