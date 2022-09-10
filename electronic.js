
const electronic = [
    {
        id: 1,
        titleImage: "https://images.samsung.com/is/image/samsung/p6pim/in/2208/gallery/in-galaxy-z-fold4-f936-sm-f936bzahinu-533084043?$1300_1038_PNG$",
        title: " Galaxy Z Fold4",
        category: "electronic",
        desc: `I'm baby woke mlkshk wolf bitters live-edge blue bottle, hammock freegan copper mug whatever cold-pressed `,
        price: "$100",
    },
    {
        id: 2,
        titleImage: "https://images.samsung.com/is/image/samsung/p6pim/in/2208/gallery/in-galaxy-z-flip4-f721-sm-f721blvainu-533048782?$1300_1038_PNG$",
        title: " Galaxy Z Flip4",
        category: "electronic",
        desc: `I'm baby woke mlkshk wolf bitters live-edge blue bottle, hammock freegan copper mug whatever cold-pressed `,
        price: "$100",
    },
    {
        id: 3,
        titleImage: "https://images.samsung.com/is/image/samsung/p6pim/in/2208/gallery/in-galaxy-watch5-40mm-sm-r900nzaainu-533186450?$2052_1641_PNG$",
        title: "Galaxy Watch5",
        category: "electronic",
        desc: `I'm baby woke mlkshk wolf bitters live-edge blue bottle, hammock freegan copper mug whatever cold-pressed `,
        price: "$100",
    },
    {
        id: 4,
        titleImage: "https://images.samsung.com/is/image/samsung/p6pim/in/2208/gallery/in-galaxy-watch5-pro-sm-r920nzkainu-533190299?$2052_1641_PNG$",
        title: "Galaxy Watch5 Pro",
        category: "electronic",
        desc: `I'm baby woke mlkshk wolf bitters live-edge blue bottle, hammock freegan copper mug whatever cold-pressed `,
        price: "$100",
    },
    
    {
        id: 5,
        titleImage: "https://images.samsung.com/is/image/samsung/p6pim/in/2208/gallery/in-galaxy-buds2-pro-r510-sm-r510nlvainu-533192230?$1300_1038_PNG$",
        title: "Galaxy Buds Pro",
        category: "electronic",
        desc: `I'm baby woke mlkshk wolf bitters live-edge blue bottle, hammock freegan copper mug whatever cold-pressed `,
        price: "$100",
    },
    {
        id: 6,
        titleImage: "https://images.samsung.com/is/image/samsung/p6pim/in/sm-p613nzaainu/gallery/in-galaxy-tab-s6-lite-p610-428695-sm-p613nzaainu-532944520?$1300_1038_PNG$",
        title: "Galaxy Tab S6 Lite",
        category: "electronic",
        desc: `I'm baby woke mlkshk wolf bitters live-edge blue bottle, hammock freegan copper mug whatever cold-pressed `,
        price: "$100",
    },
    {
        id: 7,
        titleImage: "https://images.samsung.com/is/image/samsung/p6pim/in/rt34b4542s8-hl/gallery/in-ref-tmf-rt4000-424849-rt34b4542s8-hl-532548251?$1300_1038_PNG$",
        title: "324L Twin Cooling Plus",
        category: "electronic",
        desc: `I'm baby woke mlkshk wolf bitters live-edge blue bottle, hammock freegan copper mug whatever cold-pressed `,
        price: "$100",
    },
    {
        id: 8,
        titleImage: "https://images.samsung.com/is/image/samsung/p6pim/in/ls32bg750nwxxl/gallery/in-odyssey-neo-g7-g75nb-ls32bg750nwxxl-533184849?$1300_1038_PNG$",
        title: "Quantum Mini-LED",
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
                <div class="buy">${item.price} - Add to Cart</div>
            </div>
        </div>
    </div>`;
    })
    displayElectronic = displayElectronic.join('');
    electronicContainer.innerHTML = displayElectronic;
}