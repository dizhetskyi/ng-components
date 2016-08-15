import template from './catalog-products.template.html';
import controller from './catalog-products.controller';

export default {
  template,
  controller,
  bindings: {
    items: '<',
  }
}