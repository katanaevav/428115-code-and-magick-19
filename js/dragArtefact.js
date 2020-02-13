'use strict';

(function () {
  var shop = document.querySelector('.setup-artifacts-shop');
  var draggedItem = null;

  shop.addEventListener('dragstart', function (evt) {
    if (evt.target.tagName.toLowerCase() === 'img') {
      draggedItem = evt.target;
      evt.dataTransfer.setData('text/plain', evt.target.alt);
    }
  });

  var artifacts = document.querySelector('.setup-artifacts');

  artifacts.addEventListener('dragover', function (evt) {
    evt.preventDefault();
    return false;
  });

  artifacts.addEventListener('drop', function (evt) {
    evt.target.style.backgroundColor = '';
    evt.target.appendChild(draggedItem);
  });


  artifacts.addEventListener('dragenter', function (evt) {
    evt.target.style.backgroundColor = 'yellow';
    evt.preventDefault();
  });

  artifacts.addEventListener('dragleave', function (evt) {
    evt.target.style.backgroundColor = '';
    evt.preventDefault();
  });

})();
