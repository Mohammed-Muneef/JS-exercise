var toppings = ['Cheese', 'Ham', 'Bits', 'Tomatoes'];

function makePizza(toppings){
    var toppingstr=toppings.join(' and ');
    console.log("A tasty pizza with "+toppingstr);
}

makePizza(toppings)