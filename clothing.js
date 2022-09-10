
const cloth = [
    {
        id: 1,
        titleImage: "https://balenciaga.dam.kering.com/m/234d6704f445d228/Thumbnail-600583TIV539040_F.jpg?v=7",
        title: "Political Campaign Hoodie",
        category: "cloth",
        desc: `I'm baby woke mlkshk wolf bitters live-edge blue bottle, hammock freegan copper mug whatever cold-pressed `,
        price: "$1195",
    },
    {
        id: 2,
        titleImage: "https://balenciaga.dam.kering.com/m/3be7acbaa5ef27a0/Large-620973TKVI91366_F.jpg?v=3",
        title: "Political Campaign Hoodie",
        category: "cloth",
        desc: `I'm baby woke mlkshk wolf bitters live-edge blue bottle, hammock freegan copper mug whatever cold-pressed `,
        price: "$850",
    },
    {
        id: 3,
        titleImage: "https://balenciaga.dam.kering.com/m/29561a9784ff2fcc/Small_thumbnail-600583TIV531070_F.jpg?v=5",
        title: "Political Campaign Hoodie",
        category: "cloth",
        desc: `I'm baby woke mlkshk wolf bitters live-edge blue bottle, hammock freegan copper mug whatever cold-pressed `,
        price: "$995",
    },
    {
        id: 4,
        titleImage: "https://balenciaga.dam.kering.com/m/20731a01cce9f503/Small_thumbnail-600583TIV531195_F.jpg?v=3",
        title: "Political Campaign Hoodie",
        category: "cloth",
        desc: `I'm baby woke mlkshk wolf bitters live-edge blue bottle, hammock freegan copper mug whatever cold-pressed `,
        price: "$1695",
    },
    {
        id: 5,
        titleImage: "https://balenciaga.dam.kering.com/m/30e4b0d296fe44e/Small_thumbnail-659403TKVB63011_F.jpg?v=7",
        title: "Destroyed Hoodie",
        category: "cloth",
        desc: `I'm baby woke mlkshk wolf bitters live-edge blue bottle, hammock freegan copper mug whatever cold-pressed `,
        price: "$1150",
    },
    {
        id: 6,
        titleImage: "https://balenciaga.dam.kering.com/m/1c69854684dd0cf5/Small_thumbnail-659403TKVB61093_F.jpg?v=3",
        title: "Destroyed Hoodie",
        category: "cloth",
        desc: `I'm baby woke mlkshk wolf bitters live-edge blue bottle, hammock freegan copper mug whatever cold-pressed `,
        price: "$750",
    },
    {
        id: 7,
        titleImage: "https://balenciaga.dam.kering.com/m/64fc8a734de4dd4e/Small_thumbnail-659403TKVB63078_F.jpg?v=6",
        title: "Destroyed Hoodie",
        category: "cloth",
        desc: `I'm baby woke mlkshk wolf bitters live-edge blue bottle, hammock freegan copper mug whatever cold-pressed `,
        price: "$1150",
    },
    {
        id: 8,
        titleImage: "https://balenciaga.dam.kering.com/m/52bba294c3ffaa93/Thumbnail-600583TMVL17110_F.jpg?v=4",
        title: "Destroyed Hoodie",
        category: "cloth",
        desc: `I'm baby woke mlkshk wolf bitters live-edge blue bottle, hammock freegan copper mug whatever cold-pressed `,
        price: "$750",
    },
];

const clothContainer = document.querySelector('.cloth-container');


//Load
window.addEventListener('DOMContentLoaded', function () {
    displayClothItem(cloth)
})



function displayClothItem(p) {
    let displayCloth = p.map(function (item) {
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
    displayCloth = displayCloth.join('');
    clothContainer.innerHTML = displayCloth;
}