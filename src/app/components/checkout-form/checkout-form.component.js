import controller from './checkout-form.controller';
import template from './checkout-form.template.html';

export default {
  controller,
  template,
  bindings: {
    onDone: '&',
    products: '<'
  }
}