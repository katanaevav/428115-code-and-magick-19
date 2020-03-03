'use strict';

(function () {
  var userDialog = document.querySelector('.setup');
  var userDialogOpen = document.querySelector('.setup-open');
  var userDialogClose = userDialog.querySelector('.setup-close');

  var onPopupEscPress = function (evt) {
    window.util.isEscEvent(evt, closeUserDialog);
  };

  var openUserDialog = function () {
    userDialog.classList.remove('hidden');
    document.addEventListener('keydown', onPopupEscPress);
  };

  var closeUserDialog = function () {
    userDialog.classList.add('hidden');
    document.removeEventListener('keydown', onPopupEscPress);
  };

  userDialogOpen.addEventListener('click', function () {
    openUserDialog();
  });

  userDialogOpen.addEventListener('keydown', function (evt) {
    window.util.isEscEvent(evt, openUserDialog);
  });

  userDialogClose.addEventListener('click', function () {
    closeUserDialog();
  });

  userDialogClose.addEventListener('keydown', function (evt) {
    window.util.isEscEvent(evt, closeUserDialog);
  });

  var userNameInput = userDialog.querySelector('.setup-user-name');

  userNameInput.addEventListener('invalid', function () {
    if (userNameInput.validity.tooShort) {
      userNameInput.setCustomValidity('Имя должно состоять минимум из 2-х символов');
    } else if (userNameInput.validity.tooLong) {
      userNameInput.setCustomValidity('Имя не должно превышать 25-ти символов');
    } else if (userNameInput.validity.valueMissing) {
      userNameInput.setCustomValidity('Обязательное поле');
    } else {
      userNameInput.setCustomValidity('');
    }
  });

  userNameInput.addEventListener('input', function (evt) {
    var target = evt.target;
    if (target.value.length < window.wizardSetupUtils.minNameLength) {
      target.setCustomValidity(
          'Имя должно состоять минимум из ' +
          window.wizardSetupUtils.minNameLength +
          '-х символов'
      );
    } else {
      target.setCustomValidity('');
    }
  });

  var onSuccessSave = function () {
    userDialog.classList.add('hidden');
  };

  var form = userDialog.querySelector('.setup-wizard-form');

  form.addEventListener('submit', function (evt) {
    evt.preventDefault();
    window.backend.save(new FormData(form), onSuccessSave, window.backend.error);
  });
})();
