import './cart-item.scss';

import controller from './cart-item.controller';
import template from './cart-item.template.html';

export default {
  controller,
  template,
  bindings: {
    'item': '<'
  }
}