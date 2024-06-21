function creat_car(manufacturer, model, ...options){
    let car = {
        manufacturer: manufacturer,
        model: model
    };

    options.forEach(options => {
        let [key, value] = options.split(":")
        car[key.trim()] = value.trim()
    });
    return car
}

let my_car = creat_car("Toyota", "Corrolla", "color: Black", "Sunroof: True", "Year: 2024");

console.log(my_car); 