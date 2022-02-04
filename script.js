//Let's hop onto that shit

let stocks = {
  Fruits: ["Apple", "Banana", "Pineapple"]
}

function order(fruit_Name) {
  
  setTimeout( ()=> {
    console.log(`Order placed successfully ${fruit_Name}`);
    production(fruit_Name);
  }, 1000)
}

function production(production_fruit) {
  console.log(`Order Received and production started ${production_fruit}`);
}

order(stocks.Fruits[0]);

