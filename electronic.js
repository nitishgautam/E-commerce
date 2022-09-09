
const electronic = [
    {
        id: 4,
        titleImage: "https://gmedia.playstation.com/is/image/SIEPDC/console-left_@1x?fmt=png-alpha&scl=1",
        title: "PS5",
        category: "electronic",
        desc: `I'm baby woke mlkshk wolf bitters live-edge blue bottle, hammock freegan copper mug whatever cold-pressed `,
        price: "$100",
    },
    {
        id: 5,
        titleImage: "https://compass-ssl.xbox.com/assets/51/27/51278d66-85f5-4eca-9428-0d23669c7617.jpg?n=10202018_Panes-3-up-1400_Hero-SS_570x570.jpg",
        title: "Xbox Series S",
        category: "electronic",
        desc: `I'm baby woke mlkshk wolf bitters live-edge blue bottle, hammock freegan copper mug whatever cold-pressed `,
        price: "$100",
    },
    {
        id: 6,
        titleImage: "https://compass-ssl.xbox.com/assets/83/53/83534a33-0998-43dc-915a-4ec0a686d679.jpg?n=10202018_Panes-3-up-1400_Hero-SX_570x570.jpg",
        title: "Xbox Series X",
        category: "electronic",
        desc: `I'm baby woke mlkshk wolf bitters live-edge blue bottle, hammock freegan copper mug whatever cold-pressed `,
        price: "$100",
    },
    {
        id: 2,
        titleImage: "https://www.apple.com/v/studio-display/b/images/overview/pairs/hw_screen_studio_display__fsht7mw0rhqq_medium.jpg",
        title: "Apple Monitor",
        category: "electronic",
        desc: `I'm baby woke mlkshk wolf bitters live-edge blue bottle, hammock freegan copper mug whatever cold-pressed `,
        price: "$100",
    },
    
    {
        id: 7,
        titleImage: "https://assets.nintendo.com/image/upload/f_auto/q_auto/dpr_1.25/c_scale,w_1000/ncom/en_US/switch/site-design-update/photo01",
        title: "Nintendo Switch",
        category: "electronic",
        desc: `I'm baby woke mlkshk wolf bitters live-edge blue bottle, hammock freegan copper mug whatever cold-pressed `,
        price: "$100",
    },
    {
        id: 8,
        titleImage: "https://www.apple.com/v/macbook-air-m1/b/images/overview/compare/compare_mbp_14_16__gb70k890dbe6_medium.png",
        title: "MacBook Air",
        category: "electronic",
        desc: `I'm baby woke mlkshk wolf bitters live-edge blue bottle, hammock freegan copper mug whatever cold-pressed `,
        price: "$100",
    },
];

const electronicContainer = document.querySelector('.electronic-container');


//Load
window.addEventListener('DOMContentLoaded', function () {
    displayElectronicItem(electronic)
})



function displayElectronicItem(p) {
    let displayElectronic = p.map(function (item) {
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
    displayElectronic = displayElectronic.join('');
    electronicContainer.innerHTML = displayElectronic;
}