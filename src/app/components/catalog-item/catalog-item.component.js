import template from './catalog-item.template.html';
import controller from './catalog-item.controller';

export default {
  template,
  controller,
  bindings: {
    item: '<'
  }
}