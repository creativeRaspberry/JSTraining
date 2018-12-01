/**

 # Zadanie
 1. Udowodnij, że obiekt zwrócony przez "callTheProduct" ma dostęp do "product"
 2. Wykaż, że zmiana nazwy "product" wpływa tylko na jedną instancję tak zwróconego obiektu "callTheProduct"

 #Cel:
 Przypomnienie o kolejnej własności JavaScript wywodzącej się ze sposobu traktowania zasięgów.
 Za każdym razem gdy wywołana zostanie funkcja callTheProduct()
 nowy obiekt będzie miał dostęp do własnego "domknięcia" zmiennej product.
 */


function callTheProduct() {

  const product = {
    name: 'Cooler',
    manufacturer: 'Bosh',
    amount: 399.99
  };

  function getPrice() {
    console.log(product);
  }

  return {
    getPrice,
    changeProductName(name) {
      product.name = name;
    }
  }
}

// Rozwiązanie:

const myProduct = callTheProduct();
const myOtherProduct = callTheProduct();

myProduct.getPrice();
myOtherProduct.getPrice();

myOtherProduct.changeProductName("freezer");

myProduct.getPrice();
myOtherProduct.getPrice();

console.log(myOtherProduct.changeProductName("freezer"));

