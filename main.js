let navigation = document.getElementsByClassName('buttonNavgation');
let contentElements = document.getElementsByClassName('categoryContainer');
let outDate = document.getElementById('outDate');

const data = {
    descriptions: {
        door: [
            "Применение: для всех типов помещений ",
            "Комплектация: петли - 2 шт, замок",
            "Материал покрытия: пленка ПВХ",
            "Тип наличников, коробки и доборов: стандартные, телескопические",
            "Конструктивные особенности: установленный замок"
        ],
        lamp: [
            "Крепление: крюк, тип потолка: бетонный",
            "Тип цоколя: E27",
            "Площадь освещения: 24 кв.м",
            "Материал основания: металл",
            "Материал плафона: стекло"
        ],
        vase: [
            "Материал: керамика",
            "Форма: фигурная",
            "Размещение: пол, стол",
            "Ширина / Диаметр: 18,5 см",
            "Высота: 16,5 см"
        ],
    },
    doors: [
        {
            "image": "./image/door/4001160_1_ddbf.jpg",
            "price": 9799,
            "discountPrice": 13799,
            "date": "01.01.2022",
        },
        {
            "image": "./image/door/4004859_1_c9da.jpg",
            "price": 6499,
            "discountPrice": 10699,
            "date": "01.01.2022",
        },
        {
            "image": "./image/door/4019907_1_2001.jpg",
            "price": 7799,
            "discountPrice": 11799,
            "date": "01.01.2022",
        },
        {
            "image": "./image/door/4330668_1_e5ac.jpg",
            "price": 5499,
            "discountPrice": 10499,
            "date": "01.01.2022",
        },
        {
            "image": "./image/door/4628822_1_67a6.jpg",
            "price": 6799,
            "discountPrice": 9799,
            "date": "01.01.2022",
        },
        {
            "image": "./image/door/4628996_1_78f8.jpg",
            "price": 4599,
            "discountPrice": 6599,
            "date": "01.01.2022",
        },
        {
            "image": "./image/door/4694055_1_0710.jpg",
            "price": 3699,
            "discountPrice": 5799,
            "date": "01.01.2022",
        },
        {
            "image": "./image/door/4694238_1_d284.jpg",
            "price": 9999,
            "discountPrice": 10999,
            "date": "01.01.2022",
        },
        {
            "image": "./image/door/4694451_1_fbfc.jpg",
            "price": 8899,
            "discountPrice": 11899,
            "date": "01.01.2022",
        },
        {
            "image": "./image/door/4720389_1_847c.jpg",
            "price": 6299,
            "discountPrice": 9299,
            "date": "01.01.2022",
        },
        {
            "image": "./image/door/4720710_1_fc28.jpg",
            "price": 10299,
            "discountPrice": 15299,
            "date": "01.01.2022",
        },
        {
            "image": "./image/door/4787453_1_393f.jpg",
            "price": 8899,
            "discountPrice": 12899,
            "date": "01.01.2022",
        },
    ],
    lamps:
        [
            {
                "image": "./image/lamp/4143624_1_3dd2.jpg",
                "price": 9799,
                "discountPrice": 13799,
                "date": "01.01.2022",
            },
            {
                "image": "./image/lamp/4375895_1_64ab.jpg",
                "price": 6499,
                "discountPrice": 10699,
                "date": "01.01.2022",
            },
            {
                "image": "./image/lamp/4376034_1_2362.jpg",
                "price": 11799,
                "discountPrice": 13299,
                "date": "01.01.2022",
            },
            {
                "image": "./image/lamp/4376398_1_4350.jpg",
                "price": 8499,
                "discountPrice": 10499,
                "date": "01.01.2022",
            },
            {
                "image": "./image/lamp/4376745_1_a61d.jpg",
                "price": 11299,
                "discountPrice": 17299,
                "date": "01.01.2022",
            },
            {
                "image": "./image/lamp/4579793_1_8896.jpg",
                "price": 5499,
                "discountPrice": 10499,
                "date": "01.01.2022",
            },
            {
                "image": "./image/lamp/4579926_1_6822.jpg",
                "price": 9799,
                "discountPrice": 12799,
                "date": "01.01.2022",
            },
            {
                "image": "./image/lamp/4807152_1_f40f.jpg",
                "price": 7399,
                "discountPrice": 13399,
                "date": "01.01.2022",
            },
            {
                "image": "./image/lamp/4807186_1_b7e9.jpg",
                "price": 8899,
                "discountPrice": 11899,
                "date": "01.01.2022",
            },
            {
                "image": "./image/lamp/4808317_1_dc36.jpg",
                "price": 5499,
                "discountPrice": 15599,
                "date": "01.01.2022",
            },
            {
                "image": "./image/lamp/4809489_1_982a.jpg",
                "price": 13999,
                "discountPrice": 19999,
                "date": "01.01.2022",
            },
            {
                "image": "./image/lamp/4809901_1_02a6.jpg",
                "price": 11199,
                "discountPrice": 15599,
                "date": "01.01.2022",
            },
        ],
    vase: [
        {
            "image": "./image/vase/4574075_1_d844.jpg",
            "price": 1499,
            "discountPrice": 2699,
            "date": "01.01.2022",
        },
        {
            "image": "./image/vase/4704631_1_c399.jpg",
            "price": 999,
            "discountPrice": 2699,
            "date": "01.01.2022",
        },
        {
            "image": "./image/vase/4727905_1_96c4.jpg",
            "price": 699,
            "discountPrice": 1199,
            "date": "01.01.2022",
        },
        {
            "image": "./image/vase/4728135_1_1a11.jpg",
            "price": 2499,
            "discountPrice": 3199,
            "date": "01.01.2022",
        },
        {
            "image": "./image/vase/4728457_1_61e4.jpg",
            "price": 1299,
            "discountPrice": 3399,
            "date": "01.01.2022",
        },
        {
            "image": "./image/vase/4728473_1_3d90.jpg",
            "price": 1099,
            "discountPrice": 2099,
            "date": "01.01.2022",
        },
        {
            "image": "./image/vase/4799615_1_ab54.jpg",
            "price": 2099,
            "discountPrice": 3399,
            "date": "01.01.2022",
        },
        {
            "image": "./image/vase/4799821_1_7ae3.jpg",
            "price": 3899,
            "discountPrice": 4899,
            "date": "01.01.2022",
        },
        {
            "image": "./image/vase/4799920_1_a86a.jpg",
            "price": 3499,
            "discountPrice": 4699,
            "date": "01.01.2022",
        },
        {
            "image": "./image/vase/4799979_1_f894.jpg",
            "price": 1499,
            "discountPrice": 1999,
            "date": "01.01.2022",
        },
        {
            "image": "./image/vase/5060210_1_2572.jpg",
            "price": 999,
            "discountPrice": 1399,
            "date": "01.01.2022",
        },
        {
            "image": "./image/vase/5060219_1_8d04.jpg",
            "price": 1399,
            "discountPrice": 1799,
            "date": "01.01.2022",
        },

    ]
};

function createCard(itemDescription, data) {
    const templateCard = document.createElement('div');
    templateCard.classList.add('card');

    const imageContainer = document.createElement('img')
    imageContainer.classList.add('imageInCard');
    imageContainer.src = data.image;

    const nameBrand = document.createElement('div');
    nameBrand.classList.add('productInformation');
    nameBrand.innerHTML =
        `
     <h1>HOME</h1>
     <h2>Comfort at home</h2>
    `;

    const productInformation = document.createElement('div');
    productInformation.classList.add('productInformation');
    productInformation.appendChild(nameBrand);

    let ulDescriptions = document.createElement('ul');
    ulDescriptions.classList.add('description');
    for (let i = 0; i < itemDescription.length; i++) {
        let liElem = document.createElement('li');
        liElem.innerText = itemDescription[i];
        ulDescriptions.appendChild(liElem);
    }

    productInformation.appendChild(ulDescriptions);

    const containerPrice = document.createElement('div');
    containerPrice.classList.add('containerPrice');
    const priceElem = document.createElement('p');
    priceElem.classList.add('price');
    const discountPriceElem = document.createElement('p');
    discountPriceElem.classList.add('discountsPrice');
    priceElem.innerText = data.price + " ₽"
    discountPriceElem.innerText = data.discountPrice + " ₽"

    containerPrice.appendChild(priceElem)
    containerPrice.appendChild(discountPriceElem)

    const buttonBuy = document.createElement('div');
    buttonBuy.innerHTML =
        `
         <button class="buttonBuy">
            <img src="./image/icon/icon-cart.svg" style="width: 15px; height: 15px; padding-right: 10px;">
            Add to Cart
        </button>
        `;


    productInformation.appendChild(containerPrice);
    productInformation.appendChild(buttonBuy);

    // buttonBuy.addEventListener('click', function(){
    //     const modalWindow = document.getElementById('modalBuyWindow');
    //     modalWindow.classList.remove('modalBuyWindowClose');
    //     modalWindow.classList.add('modalBuyWindow');
    // });

    templateCard.appendChild(imageContainer);
    templateCard.appendChild(productInformation);
    return templateCard;
}

let containerForCardsDoors = document.getElementById('containerForCardsDoors');
let containerForCardsLamps = document.getElementById('containerForCardsLamps');
let containerForCardsVase = document.getElementById('containerForCardsVase');

for (let j = 0; j < 3; j++) {
    if (j == 0) {
        for (let i = 0; i < data.doors.length; i++) {
            containerForCardsDoors.appendChild(createCard(data.descriptions.door, data.doors[i]));
        }
    }
    if (j == 1) {
        for (let i = 0; i < data.lamps.length; i++) {
            containerForCardsLamps.appendChild(createCard(data.descriptions.lamp, data.lamps[i]));
        }
    }
    if (j == 2) {
        for (let i = 0; i < data.vase.length; i++) {
            containerForCardsVase.appendChild(createCard(data.descriptions.vase, data.vase[i]));
        }
    }

}

//modal window
// buttonBuy.addEventListener('click', function(){
//     const modalWindow = document.getElementById('modalBuyWindow');
//     modalWindow.classList.remove('modalBuyWindowClose');
//     modalWindow.classList.add('modalBuyWindow');
// });

let buttonModalWindowClose = document.getElementById('buttonModalWindowClose');
buttonModalWindowClose.addEventListener('click', closeModalWindow);

let buttonModalWindowBuy = document.getElementById('buttonModalWindowBuy');
buttonModalWindowBuy.addEventListener('click', function () {
    closeModalWindow();
    alert('Спасибо за покупку!');
});

function closeModalWindow() {
    const modalWindow = document.getElementById('modalBuyWindow');
    modalWindow.classList.remove('modalBuyWindow');
    modalWindow.classList.add('modalBuyWindowClose');
}

//Date

// const getDate = () =>{
//     let date = new Date();
//     alert (date);

// }

// function randomDate(start, end) {
//     return new Date(start.getTime() 
//             + Math.random() * (end.getTime() - start.getTime()));
//   }

// let myDate  = randomDate(new Date(2012, 0, 1), new Date());

// outDate.append(myDate.getFullYear() + '-'
//     + ('0' + (myDate.getMonth() + 1)).slice(-2) 
//     + '-' + ('0' + myDate.getDate()).slice(-2)
//     + ' '
//     +  ('0' + myDate.getHours()).slice(-2)
//     + ':' + ('0' + myDate.getMinutes()).slice(-2)
//     + ':' + ('0' + myDate.getSeconds()).slice(-2) 
// );

//mobile navBar
function openNavBar() {
    let bgMobileNavBar = document.getElementById('bgMobileNavBar');
    bgMobileNavBar.classList.add('bgMobileNavBar');
    let navBarMobileBlock = document.getElementById('mobileNavBar');
    navBarMobileBlock.classList.add('showNavBarMobile');
    let openModalBlock = document.getElementById('openModal');
    console.log(openModalBlock.style.display)
    openModalBlock.style.display = 'none';
}
function closeNavBar() {
    let bgMobileNavBar = document.getElementById('bgMobileNavBar');
    bgMobileNavBar.classList.remove('bgMobileNavBar');
    let navBarMobileBlock = document.getElementById('mobileNavBar');
    navBarMobileBlock.classList.remove('showNavBarMobile');
    navBarMobileBlock.classList.add('closeMobileNavBar');
    let openModalBlock = document.getElementById('openModal');
    openModalBlock.style.display = '';
}

//button appearance back to top of page
let scroll = document.querySelector('.buttonUpPage');
window.addEventListener('scroll', function () {
    scroll.classList.toggle("active", window.scrollY > 300);
});
function scrollTop() {
    window.scroll({
        top: 0,
        behavior: 'smooth'
    })
}