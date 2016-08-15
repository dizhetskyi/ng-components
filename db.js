var faker = require('faker');

const categories = (function(){
  var data = [];
  for(var i = 0; i < 6; i++){
    data.push({
      id: i + 1,
      name: faker.commerce.department()
    })
  }
  return data;
}());

module.exports = function() {

  return {
    category: categories,
    product: (function(){
      var data = [];
      for (var i = 0; i < 100; i++){
        data.push({
          id: i + 1,
          category: faker.random.arrayElement(categories).id,
          name: faker.commerce.productName(),
          price: faker.commerce.price(),
          img: faker.image.food()
        });
      }
      return data;
    }())
  }
}