function getShippingCost(country) {
    let price;
    let final = `Shipping to ${country} will cost ${price} credits`
    switch (country) {
        case 'China':
            price = 100;
            return final;
        case 'Chile':
            price = 250;
            return final;
        case 'Australia':
            price = 170;
            return final;
        case "Jamaica":
            price = 120;
            return final;
        default: 
            return "Sorry, there is no delivery to your country";
    }
}
console.log(getShippingCost("Australia")); // "Shipping to Australia will cost 170 credits"
console.log(getShippingCost("Germany")); // "Sorry, there is no delivery to your country"
console.log(getShippingCost("China")); // "Shipping to China will cost 100 credits"
console.log(getShippingCost("Chile")); // "Shipping to Chile will cost 250 credits"
console.log(getShippingCost("Jamaica")); // "Shipping to Jamaica will cost 120 credits"
console.log(getShippingCost("Sweden")); // "Sorry, there is no delivery to your country"