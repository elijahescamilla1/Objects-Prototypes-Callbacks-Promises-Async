let person3 = {
    pizza: ["Deep Dish", "South Side Thin Crust"],
    tacos: "Anything not from Taco Bell",
    burgers: "Portillos Burgers",
    ice_cream: ["Chocolate", "Vanilla", "Oreo"],
    shakes: [{
        oberwise: "Chocolate",
        dunkin: "Vanilla",
        culvers: "All of them",
        mcDonalds: "Sham-rock-shake",
        cupids_candies: "Chocolate Malt"
    }]
};

function displayFavoriteFoods(person) {
    for (let key in person) {
        if (Array.isArray(person[key])) {
            person[key].forEach(item => {
                if (typeof item === 'object') {
                    for (let subKey in item) {
                        console.log(`${subKey}: ${item[subKey]}`);
                    }
                } else {
                    console.log(item);
                }
            });
        } else {
            console.log(person[key]);
        }
    }
}

// Call the function
displayFavoriteFoods(person3);
