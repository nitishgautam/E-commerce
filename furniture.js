
const furniture = [
    {
        id: 1,
        titleImage: "https://m.media-amazon.com/images/I/71D9AEENuAL._SY450_.jpg",
        title: "Pulse Gaming Racing Edition GT-700",
        category: "furniture",
        desc: `I'm baby woke mlkshk wolf bitters live-edge blue bottle, hammock freegan copper mug whatever cold-pressed `,
        price: "Rs 9999",
    },
    {
        id: 2,
        titleImage: "https://m.media-amazon.com/images/I/815I9f4qbwL._SY450_.jpg",
        title: "BLACK OAK 01 Marrber Convertible Sectional Sofa",
        category: "furniture",
        desc: `I'm baby woke mlkshk wolf bitters live-edge blue bottle, hammock freegan copper mug whatever cold-pressed `,
        price: "Rs 59K",
    },
    {
        id: 3,
        titleImage: "https://in.balmain.com/dw/image/v2/BHGX_PRD/on/demandware.static/-/Sites-balmain-mastercatalog/default/dw143487c5/images/hi-res/VM1C229TKSE0PAF.png?sw=1680&q=80",
        title: "Suede and knit B-Bold sneakers with straps",
        category: "furniture",
        desc: `I'm baby woke mlkshk wolf bitters live-edge blue bottle, hammock freegan copper mug whatever cold-pressed `,
        price: "$995",
    },
    {
        id: 4,
        titleImage: "https://in.balmain.com/dw/image/v2/BHGX_PRD/on/demandware.static/-/Sites-balmain-mastercatalog/default/dw15f321f5/images/hi-res/XM1TC180LVIT0PAF.png?sw=1680&q=80",
        title: "Smooth leather Phil Ranger ankle boots",
        category: "furniture",
        desc: `I'm baby woke mlkshk wolf bitters live-edge blue bottle, hammock freegan copper mug whatever cold-pressed `,
        price: "$1695",
    },
    {
        id: 5,
        titleImage: "https://in.balmain.com/dw/image/v2/BHGX_PRD/on/demandware.static/-/Sites-balmain-mastercatalog/default/dw351d2919/images/hi-res/YM0VJ309KPNRGFEF.png?sw=1680&q=80",
        title: "Neoprene and leather Unicorn low-top sneaker",
        category: "furniture",
        desc: `I'm baby woke mlkshk wolf bitters live-edge blue bottle, hammock freegan copper mug whatever cold-pressed `,
        price: "$1150",
    },
    {
        id: 6,
        titleImage: "https://in.balmain.com/dw/image/v2/BHGX_PRD/on/demandware.static/-/Sites-balmain-mastercatalog/default/dw1020aa24/images/hi-res/XM0VL299LPQP0FAF.png?sw=1680&q=80",
        title: "Quilted leather B-IT mules",
        category: "furniture",
        desc: `I'm baby woke mlkshk wolf bitters live-edge blue bottle, hammock freegan copper mug whatever cold-pressed `,
        price: "$750",
    },
];

const furnitureContainer = document.querySelector('.furniture-container');


//Load
window.addEventListener('DOMContentLoaded', function () {
    displayFurnitureItem(furniture)
})



function displayFurnitureItem(p) {
    let displayFurniture = p.map(function (item) {
        return `<div class="product-item item1">
        <div class="image-con">
            <img src="${item.titleImage}">
        </div>
        <div class="desc">
            <h2 class="product-title">${item.title}</h2>
            <p class="product-description">${item.desc}</p>
        
            <div class="buyButton">
                <span class="buy">${item.price} - Add to Cart</span>
            </div>
        </div>
    </div>`;
    })
    displayFurniture = displayFurniture.join('');
    furnitureContainer.innerHTML = displayFurniture;
}