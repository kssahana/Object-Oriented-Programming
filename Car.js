let Car1 = {
    name: "Innova",
    model: 2019,
    color: "grey",
    seats: "v-seats",
    numberofairbags: 6,
    price: 1200000,
    fueltype: "petrol",
    transmisiontype: "Manual",
    start: function () {
        console.log("Car is started");
    },
    stop: function () {
        console.log("Car is stped");
    }
};
let Car2 = {
    name: "Dzire",
    model: 2017,
    color: "White",
    seats: "4-seats",
    numberofairbags: 2,
    price: 600000,
    fueltype: "diseal",
    transmisiontype: "Manual",
    start: function () {
        console.log("Car is started");
    },
    stop: function () {
        console.log("Car is stped");
    }
};

console.log(Car1);
console.log(Car1.start());
console.log(Car2);