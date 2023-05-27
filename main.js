import data from "./constants.js";

//mobile navBar
let closeModal = document.getElementById('closeModal');
let openModal = document.getElementById('openModal');
let bgMobileNavBar = document.getElementById('bgMobileNavBar');
let navBarMobileBlock = document.getElementById('mobileNavBar');

openModal.addEventListener('click', function openNavBar() {
    bgMobileNavBar.classList.add('bgMobileNavBar');
    navBarMobileBlock.classList.add('showNavBarMobile');
    openModal.style.display = 'none';
});

closeModal.addEventListener('click', function closeNavBar() {
    bgMobileNavBar.classList.remove('bgMobileNavBar');
    navBarMobileBlock.classList.remove('showNavBarMobile');
    navBarMobileBlock.classList.add('closeMobileNavBar');
    openModal.style.display = '';
});

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

    const dateTemplate = document.createElement('p');
    dateTemplate.textContent = 'Дaтa добавления:';
    dateTemplate.classList.add('dateTemplate');
    productInformation.appendChild(dateTemplate);

    const date = document.createElement('p');
    date.textContent = getDayInfo(data.date);
    date.classList.add('dateStyle');

    productInformation.appendChild(date);

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

    const buttonBuy = document.createElement('button');
    buttonBuy.classList.add('buttonBuy');

    const image = document.createElement('img');
    image.src = "./image/icon/icon-cart.svg";
    image.style.width = "15px"
    image.style.height = "15px";
    image.style.paddingRight = "10px";
    buttonBuy.appendChild(image);

    const buttonText = document.createElement('p');
    buttonText.innerText = "Add to Cart"

    buttonBuy.appendChild(buttonText);
    buttonBuy.addEventListener('click', function () {
        const modalWindow = document.getElementById('modalBuyWindow');
        modalWindow.classList.remove('modalBuyWindowClose');
        modalWindow.classList.add('modalBuyWindow');
    });

    productInformation.appendChild(containerPrice);
    productInformation.appendChild(buttonBuy);

    templateCard.appendChild(imageContainer);
    templateCard.appendChild(productInformation);
    return templateCard;
}

let containerForCardsDoors = document.getElementById('containerForCardsDoors');
let containerForCardsLamps = document.getElementById('containerForCardsLamps');
let containerForCardsVase = document.getElementById('containerForCardsVase');


for (let i = 0; i < data.doors.length; i++) {
    containerForCardsDoors.appendChild(createCard(data.descriptions.door, data.doors[i]));
}

for (let i = 0; i < data.lamps.length; i++) {
    containerForCardsLamps.appendChild(createCard(data.descriptions.lamp, data.lamps[i]));
}

for (let i = 0; i < data.vase.length; i++) {
    containerForCardsVase.appendChild(createCard(data.descriptions.vase, data.vase[i]));
}

//Modal window
let buttonModalWindowClose = document.getElementById('buttonModalWindowClose');
function closeModalWindow() {
    const modalWindow = document.getElementById('modalBuyWindow');
    modalWindow.classList.remove('modalBuyWindow');
    modalWindow.classList.add('modalBuyWindowClose');
};

buttonModalWindowClose.addEventListener('click', closeModalWindow);

//Date
function getDayInfo(dateString) {
    if (!dateString) return;
    const date = new Date(dateString)
    const nameDay = getNameDay(date.getDay())
    const numweek = getNumWeek(date)
    const nameMonth = getMonthName(date.getMonth())

    return `${nameDay}, ${numweek} неделя ${nameMonth} ${date.getFullYear()} года`
}

function getNameDay(numDay) {
    switch (numDay) {
        case 0: return 'Воскресенье'
        case 1: return 'Понедельник'
        case 2: return 'Вторник'
        case 3: return 'Среда'
        case 4: return 'Четверг'
        case 5: return 'Пятница'
        case 6: return 'Суббота'
        default: return 'День недели'
    }
}

function getNumWeek(date) {
    var onejan = new Date(date.getFullYear(), 0, 1);
    var today = new Date(date.getFullYear(), date.getMonth(), date.getDate());
    var dayOfYear = ((today - onejan + 86400000) / 86400000);
    return Math.ceil(dayOfYear / 7)
};

function getMonthName(numMonth) {
    switch (numMonth) {
        case 0: return 'Января'
        case 1: return 'Февраля'
        case 2: return 'Марта'
        case 3: return 'Апреля'
        case 4: return 'Мая'
        case 5: return 'Июня'
        case 6: return 'Июля'
        case 7: return 'Авгуса'
        case 8: return 'Сентября'
        case 9: return 'Октября'
        case 10: return 'Ноября'
        case 11: return 'Декабря'
        default: return 'Месяца'
    }
}

//button appearance back to top of page
let scroll = document.querySelector('.buttonUpPage');
window.addEventListener('scroll', function () {
    scroll.classList.toggle("active", window.scrollY > 300);
});

function addDarkTheme() {
    const main = document.querySelector('.mainContainer');
    const cards = document.querySelectorAll('.card');
    main.classList.add('mainContainerDark');
    cards.forEach((card) => {
        card.classList.add('cardDark');
    });
}

function removeDarkTheme() {
    const main = document.querySelector('.mainContainer');
    const cards = document.querySelectorAll('.card');
    main.classList.remove('mainContainerDark')
    cards.forEach((card) => {
        card.classList.remove('cardDark');
    });
}


//button chenges the View
let buttomDarkLightView = document.getElementById('buttomDarkLightView');
let buttonDarkView = document.getElementById('buttonDarkView');
let buttonlightView = document.getElementById('buttonlightView');

buttomDarkLightView.addEventListener('click', function (e) {
    const color = e.currentTarget.dataset.color;

    if (color === 'white') {
        e.currentTarget.dataset.color = 'black';
        buttonlightView.classList.remove('ButtonViewOff');
        buttonlightView.classList.add('ButtonLightViewOn');
        buttonDarkView.classList.remove('ButtonLightViewOn');
        buttonDarkView.classList.add('ButtonViewOff');
        addDarkTheme();
    }
    else if (color === 'black') {
        e.currentTarget.dataset.color = 'white';
        buttonDarkView.classList.remove('ButtonViewOff');
        buttonDarkView.classList.add('ButtonLightViewOn');
        buttonlightView.classList.remove('ButtonLightViewOn');
        buttonlightView.classList.add('ButtonViewOff');
        removeDarkTheme();
    }
});

//button chenges the view mobile
let buttomDarkLightViewMobile = document.getElementById('buttomDarkLightViewMobile');
let buttonDarkViewMobile = document.getElementById('buttonDarkViewMobile');
let buttonlightViewMobile = document.getElementById('buttonlightViewMobile');

buttomDarkLightViewMobile.addEventListener('click', function (e) {
    const color = e.currentTarget.dataset.color;

    if (color === 'white') {
        e.currentTarget.dataset.color = 'black';
        buttonlightViewMobile.classList.remove('ButtonViewOff');
        buttonlightViewMobile.classList.add('ButtonLightViewOn');
        buttonDarkViewMobile.classList.remove('ButtonLightViewOn');
        buttonDarkViewMobile.classList.add('ButtonViewOff');
        addDarkTheme();
    }
    else if (color === 'black') {
        e.currentTarget.dataset.color = 'white';
        buttonDarkViewMobile.classList.remove('ButtonViewOff');
        buttonDarkViewMobile.classList.add('ButtonLightViewOn');
        buttonlightViewMobile.classList.remove('ButtonLightViewOn');
        buttonlightViewMobile.classList.add('ButtonViewOff');
        removeDarkTheme();
    }
});

const form = document.querySelector('#myForm');
form.onsubmit = (e) => {
    e.preventDefault();
    const { count, color, text } = e.target
    alert(`Спасибо за покупку ${count.value} ${color.value} ${text.value}!`)
    closeModalWindow();
};