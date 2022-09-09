
const book = [
    {
        id: 1,
        titleImage: "https://rukminim1.flixcart.com/image/416/416/k5e7o280/book/8/0/2/life-3-0-original-imaff9ezajuerw9f.jpeg?q=70",
        title: "Life 3.0",
        category: "books",
        desc: `I'm baby woke mlkshk wolf bitters live-edge blue bottle, hammock freegan copper mug whatever cold-pressed `,
        price: "$100",
    },
    {
        id: 2,
        titleImage: "https://images-na.ssl-images-amazon.com/images/I/41I3XwlE0CL._SX317_BO1,204,203,200_.jpg",
        title: "Zero to One",
        category: "books",
        desc: `I'm baby woke mlkshk wolf bitters live-edge blue bottle, hammock freegan copper mug whatever cold-pressed `,
        price: "$100",
    },
    {
        id: 3,
        titleImage: "https://images-na.ssl-images-amazon.com/images/I/519H6qwHjqL._SX328_BO1,204,203,200_.jpg",
        title: "Superintelligence",
        category: "books",
        desc: `I'm baby woke mlkshk wolf bitters live-edge blue bottle, hammock freegan copper mug whatever cold-pressed `,
        price: "$100",
    },
    {
        id: 4,
        titleImage: "https://images-na.ssl-images-amazon.com/images/I/41d7Bg6Xb9L._SX331_BO1,204,203,200_.jpg",
        title: "Structures",
        category: "books",
        desc: `I'm baby woke mlkshk wolf bitters live-edge blue bottle, hammock freegan copper mug whatever cold-pressed `,
        price: "$100",
    },
    {
        id: 5,
        titleImage: "https://images-na.ssl-images-amazon.com/images/I/51AW1VzCAdL._SX322_BO1,204,203,200_.jpg",
        title: "Ignition",
        category: "books",
        desc: `I'm baby woke mlkshk wolf bitters live-edge blue bottle, hammock freegan copper mug whatever cold-pressed `,
        price: "$100",
    },
    {
        id: 6,
        titleImage: "https://images-na.ssl-images-amazon.com/images/I/41Y7YDGDClL._SX323_BO1,204,203,200_.jpg",
        title: "The Master Algorithm",
        category: "books",
        desc: `I'm baby woke mlkshk wolf bitters live-edge blue bottle, hammock freegan copper mug whatever cold-pressed `,
        price: "$100",
    },
    {
        id: 7,
        titleImage: "https://images-na.ssl-images-amazon.com/images/I/51IZ+V-g73L._SX326_BO1,204,203,200_.jpg",
        title: "Innovators",
        category: "books",
        desc: `I'm baby woke mlkshk wolf bitters live-edge blue bottle, hammock freegan copper mug whatever cold-pressed `,
        price: "$100",
    },
    {
        id: 8,
        titleImage: "https://images-na.ssl-images-amazon.com/images/I/51mHDriUacL._SX548_BO1,204,203,200_.jpg",
        title: "Steve Jobs",
        category: "books",
        desc: `I'm baby woke mlkshk wolf bitters live-edge blue bottle, hammock freegan copper mug whatever cold-pressed `,
        price: "$100",
    },
    {
        id: 9,
        titleImage: "https://images-na.ssl-images-amazon.com/images/I/511qfHRaLtL._SX323_BO1,204,203,200_.jpg",
        title: "The Order of Time",
        category: "books",
        desc: `I'm baby woke mlkshk wolf bitters live-edge blue bottle, hammock freegan copper mug whatever cold-pressed `,
        price: "$100",
    },
    {
        id: 10,
        titleImage: "https://images-na.ssl-images-amazon.com/images/I/51snqy3F0FL._SX324_BO1,204,203,200_.jpg",
        title: "Reality is not what It Seems",
        category: "books",
        desc: `I'm baby woke mlkshk wolf bitters live-edge blue bottle, hammock freegan copper mug whatever cold-pressed `,
        price: "$100",
    },
    {
        id: 11,
        titleImage: "https://images-na.ssl-images-amazon.com/images/I/51ljQFzMIPL._SX324_BO1,204,203,200_.jpg",
        title: "Quantum Mechanics",
        category: "books",
        desc: `I'm baby woke mlkshk wolf bitters live-edge blue bottle, hammock freegan copper mug whatever cold-pressed `,
        price: "$100",
    },
    {
        id: 12,
        titleImage: "https://images-na.ssl-images-amazon.com/images/I/415gxAISkiL._SX324_BO1,204,203,200_.jpg",
        title: "The Culture Code",
        category: "books",
        desc: `I'm baby woke mlkshk wolf bitters live-edge blue bottle, hammock freegan copper mug whatever cold-pressed `,
        price: "$100",
    },
];

const bookContainer = document.querySelector('.book-container');


//Load
window.addEventListener('DOMContentLoaded', function () {
    displayBookItems(book)
})



function displayBookItems(p) {
    let displayBook = p.map(function (item) {
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
    displayBook = displayBook.join('');
    bookContainer.innerHTML = displayBook;
}