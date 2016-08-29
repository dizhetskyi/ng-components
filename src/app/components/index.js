import login from './login/login.component';
import categoriesNav from './categories-nav/categories-nav.component';
import catalog from './catalog/catalog.component';
import catalogProducts from './catalog-products/catalog-products.component';
import catalogItem from './catalog-item/catalog-item.component';
import cart from './cart/cart.component';
import cartItem from './cart-item/cart-item.component';
import checkout from './checkout/checkout.component';
import checkoutForm from './checkout-form/checkout-form.component';
import productView from './product-view/product-view.component';

const module = angular.module('app.components', [])
  .component('login', login)
  .component('catalog', catalog)
  .component('catalogProducts', catalogProducts)
  .component('catalogItem', catalogItem)
  .component('categoriesNav', categoriesNav)
  .component('cart', cart)
  .component('cartItem', cartItem)
  .component('checkout', checkout)
  .component('checkoutForm', checkoutForm)
  .component('productView', productView)

export default module;