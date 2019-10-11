const calcModule = () => {


const inputIds = ['m1', 'm2', 'm3', 'm4', 'card_leto_mozaika', 'card_leto_schelkovo', 'promocode'],
    inputElements = inputIds.map((id) => {
        return document.getElementById(id)
    }),
    formCardOrder = document.getElementById('card_order'),
    showPriceElement = document.getElementById('price-total');
    
    inputElements.forEach((elem) => {
        elem && elem.addEventListener('change', (event) => {
            recalculatePrice();
            
        })
    });

const recalculatePrice = () => {
    const priceData = getPriceData(),
        price = getPrice(priceData);
    showPrice(price);
};

const getPriceData = () => {

    const formData = new FormData(formCardOrder);
    let body = {};
    formData.forEach((val, key) => {
        body[key] = val;
    });
    return body;
};

const getPrice = (priceData) => {
    let price = 0;

   price = getOriginalPrice(priceData);
    price = getCorrectedPrice(price, priceData);

    return price;

};

const getOriginalPrice = (priceData) => {
    let price = 0;

    switch (priceData["card-type"]) {
        case "1":
            switch (priceData["club-name"]) {
                case "mozaika":
                    price = 1999;
                    break;
                case "schelkovo":
                    price = 2999;
                    break;
            }
            break;
        case "6":
            switch (priceData["club-name"]) {
                case "mozaika":
                    price = 9900;
                    break;
                case "schelkovo":
                    price = 14990;
                    break;
            }
            break;
        case "9":
            switch (priceData["club-name"]) {
                case "mozaika":
                    price = 13900;
                    break;
                case "schelkovo":
                    price = 21990;
                    break;
            }
            break;
        case "12":
            switch (priceData["club-name"]) {
                case "mozaika":
                    price = 19900;
                    break;
                case "schelkovo":
                    price = 24990;
                    break;
            }
            break;
    }
    return price;

};

const showPrice = (price) => {
        showPriceElement.textContent = price; 

};

const getCorrectedPrice = (price, priceData) => {
    if (priceData["promocode"] === 'ТЕЛО2019') {
        
        return Math.round(price*0.7)
    }
    return price;
};

};

export default calcModule;