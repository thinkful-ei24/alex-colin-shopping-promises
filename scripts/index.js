/* global api, shoppingList, store */

$(document).ready(function() {
  shoppingList.bindEventListeners();
  shoppingList.render();
});

api.getItems().then(items => {
  items.forEach(item => store.addItem(item));
  shoppingList.render();
});
