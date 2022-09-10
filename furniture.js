
const furniture = [
    {
        id: 1,
        titleImage: "https://balenciaga.dam.kering.com/m/3568c9bc22b1acab/Thumbnail-666275T01011002_F.jpg?v=3",
        title: "Cities New York Cup",
        category: "furniture",
        desc: `I'm baby woke mlkshk wolf bitters live-edge blue bottle, hammock freegan copper mug whatever cold-pressed `,
        price: "Rs 9k",
    },
    {
        id: 2,
        titleImage: "https://balenciaga.dam.kering.com/m/5087470548ca4244/Thumbnail-666275T01019004_F.jpg?v=3",
        title: "Cities Beijing Cup",
        category: "furniture",
        desc: `I'm baby woke mlkshk wolf bitters live-edge blue bottle, hammock freegan copper mug whatever cold-pressed `,
        price: "Rs 59K",
    },
    {
        id: 3,
        titleImage: "https://balenciaga.dam.kering.com/m/365ed9b177abc70/Thumbnail-682680T01089081_F.jpg?v=5",
        title: "Champagne Glass",
        category: "furniture",
        desc: `I'm baby woke mlkshk wolf bitters live-edge blue bottle, hammock freegan copper mug whatever cold-pressed `,
        price: "$995",
    },
    {
        id: 4,
        titleImage: "https://balenciaga.dam.kering.com/m/195e7f46c44a17f1/Large-682678T01089081_F.jpg?v=5",
        title: "WIine Glass",
        category: "furniture",
        desc: `I'm baby woke mlkshk wolf bitters live-edge blue bottle, hammock freegan copper mug whatever cold-pressed `,
        price: "$1695",
    },
    {
        id: 5,
        titleImage: "https://balenciaga.dam.kering.com/m/795c4eb76be7252/Thumbnail-662620TKVG61000_F.jpg?v=4",
        title: "Travel Pillow",
        category: "furniture",
        desc: `I'm baby woke mlkshk wolf bitters live-edge blue bottle, hammock freegan copper mug whatever cold-pressed `,
        price: "Rs 9999",
    },
    {
        id: 6,
        titleImage: "https://balenciaga.dam.kering.com/m/499c4be87a2a3678/Thumbnail-672709T01051000_F.jpg?v=4",
        title: "H20 Bottle",
        category: "furniture",
        desc: `I'm baby woke mlkshk wolf bitters live-edge blue bottle, hammock freegan copper mug whatever cold-pressed `,
        price: "Rs 59K",
    },
    {
        id: 7,
        titleImage: "https://balenciaga.dam.kering.com/m/7e08aed95591e507/Thumbnail-6693962UA871090_F.jpg?v=6",
        title: "Groccery Shopper Bag",
        category: "furniture",
        desc: `I'm baby woke mlkshk wolf bitters live-edge blue bottle, hammock freegan copper mug whatever cold-pressed `,
        price: "$995",
    },
    {
        id: 8,
        titleImage: "https://balenciaga.dam.kering.com/m/7d43ea5d9201244e/Thumbnail-698553T01231001_F.jpg?v=3",
        title: "Allover Cushion",
        category: "furniture",
        desc: `I'm baby woke mlkshk wolf bitters live-edge blue bottle, hammock freegan copper mug whatever cold-pressed `,
        price: "$1695",
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
                <div class="buy">${item.price} - Add to Cart</div>
            </div>
        </div>
    </div>`;
    })
    displayFurniture = displayFurniture.join('');
    furnitureContainer.innerHTML = displayFurniture;
}