// Файл avatar.js
'use strict';

(function () {
  var FILE_TYPES = ['jpg', 'jpeg', 'png'];

  var fileSelect = document.querySelector('.upload input[type=file]');
  var preview = document.querySelector('.setup-user-pic');

  fileSelect.addEventListener('change', function () {
    var file = fileSelect.files[0];
    var fileName = file.name.toLowerCase();

    var matches = FILE_TYPES.some(function (it) {
      return fileName.endsWith(it);
    });

    if (matches) {
      var reader = new FileReader();

      reader.addEventListener('load', function () {
        preview.src = reader.result;
      });

      reader.readAsDataURL(file);
    }
  });
})();
